<?php

namespace App\Http\Controllers;

use App\Models\Featured;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\HttpFoundation\Response;

class FeaturedController extends Controller
{
    /**
     * Muestra una lista de elementos destacados.
     *
     * @return \Illuminate\View\View
     */
    public function index()
        {
        try {
            $data = Featured::paginate(10);
            $response = [
                'lastPage' => $data->lastPage(),
                'currentPage' => $data->currentPage(),
                'total' => $data->total(),
                'data' => $data->items()
            ];
            return response()->json($response, Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error interno',
                'error' => $e->getMessage()
            ], Response::HTTP_BAD_REQUEST);
        }

    }

    public function store(Request $request)
    {
        try {
            $user = Auth::user();
            // Si el usuario no está autenticado
            if (!$user) {
                Log::info('Usuario no autenticado');
                return response()->json([
                    'message' => 'No autenticado',
                ], Response::HTTP_UNAUTHORIZED);
            }
            // Reglas de validación
            $rules = [
                'mentor_id' => 'required|exists:mentors,id', // Verificar que el mentor exista
                'destacado' => 'required|boolean', // Verificar que 'destacado' sea booleano
            ];

            // Validar los datos de la solicitud
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                return response()->json([
                    'message' => 'Validación fallida',
                    'errors' => $validator->errors()
                ], Response::HTTP_BAD_REQUEST);
            }

            // Crear un nuevo registro de 'Featured'
            $featured = Featured::create([
                'mentor_id' => $request->input('mentor_id'),
                'user_id' => Auth::id(),
                'destacado' => $request->input('destacado'),
            ]);

            // Devolver una respuesta JSON exitosa
            return response()->json([
                'message' => 'Registro de Featured creado exitosamente',
                'data' => $featured
            ], Response::HTTP_CREATED);

        } catch (\Exception $e) {
            // Manejo de errores
            return response()->json([
                'message' => 'Error interno',
                'error' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

        public function update(Request $request, $id)
    {
        try {
            $user = Auth::user();

            // Si el usuario no está autenticado
            if (!$user) {
                Log::info('Usuario no autenticado');
                return response()->json([
                    'message' => 'No autenticado',
                ], Response::HTTP_UNAUTHORIZED);
            }

            // Reglas de validación
            $rules = [
                'mentor_id' => 'required|exists:mentors,id', // Verificar que el mentor exista
                'destacado' => 'required|boolean', // Verificar que 'destacado' sea booleano
            ];

            // Validar los datos de la solicitud
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                return response()->json([
                    'message' => 'Validación fallida',
                    'errors' => $validator->errors()
                ], Response::HTTP_BAD_REQUEST);
            }

            // Encontrar el registro de 'Featured' por ID
            $featured = Featured::find($id);

            // Verificar si la valoración existe
            if (!$featured) {
                return response()->json([
                    'message' => 'Valoración no encontrada',
                ], Response::HTTP_NOT_FOUND);
            }

            // Verificar que el usuario autenticado es el propietario de la valoración
            if ($featured->user_id !== $user->id) {
                return response()->json([
                    'message' => 'No autorizado para actualizar esta valoración',
                ], Response::HTTP_FORBIDDEN);
            }

            // Actualizar el registro con los datos de la solicitud
            $featured->update([
                'mentor_id' => $request->input('mentor_id'),
                'destacado' => $request->input('destacado'),
            ]);

            // Devolver una respuesta JSON exitosa
            return response()->json([
                'message' => 'Featured actualizado exitosamente',
                'data' => $featured
            ], Response::HTTP_OK);

        } catch (\Exception $e) {
            // Manejo de errores
            return response()->json([
                'message' => 'Error interno',
                'error' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }

}
