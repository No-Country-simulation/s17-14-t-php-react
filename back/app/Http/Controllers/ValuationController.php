<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Valuation;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Log;

class ValuationController extends Controller
{
    public function topRated()
    {
        try {
            // Consulta para obtener las valoraciones con grade de 4 o 5, ordenadas por la columna 'grade' en orden descendente
            $topRated = Valuation::whereIn('grade', [4, 5])
                ->orderBy('grade', 'desc')
                ->take(10)
                ->get();

            // Devolver una respuesta JSON exitosa
            return response()->json([
                'message' => 'Top valoraciones obtenidas exitosamente',
                'data' => $topRated
            ], Response::HTTP_OK);

        } catch (\Exception $e) {
            // Manejo de errores
            return response()->json([
                'message' => 'Error interno',
                'error' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
    public function index()
    {
        try {
            $data = Valuation::paginate(10);
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
            $rules = [
                'mentor_id' => 'required|exists:mentors,id',
                'grade' => 'required|integer|between:1,5',
                'review' => 'required|string',

            ];

            if (!$user) {
                Log::info('Usuario no autenticado');
                return response()->json([
                    'message' => 'No autenticado',
                ], Response::HTTP_UNAUTHORIZED);
            }
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                return response()->json([
                    'message' => 'Validación fallida',
                    'errors' => $validator->errors()
                ], Response::HTTP_BAD_REQUEST);
            }
            $chat = Valuation::create([
                'mentor_id' => $request->input('mentor_id'),
                'user_id' => Auth::id(),  // Usa el ID del usuario autenticado
                'grade' => $request->grade,
                'review' => $request->review,
            ]);
            //$dataToCreate = $validator->validated();
            //$dataToCreate['user_id'] = $user->id;
            //$data = Valuation::create($dataToCreate);

            return response()->json([
                'message' => 'Valoracion y reseña creado exitosamente',
                'data' => $chat
            ], Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error interno',
                'error' => $e->getMessage()
            ], Response::HTTP_BAD_REQUEST);
        }
    }
    public function update(Request $request, $id)
    {
        try {
            // Obtener el usuario autenticado
            $user = Auth::user();

            // Validar la autenticación del usuario
            if (!$user) {
                Log::info('Usuario no autenticado');
                return response()->json([
                    'message' => 'No autenticado',
                ], Response::HTTP_UNAUTHORIZED);
            }

            // Definir las reglas de validación
            $rules = [
                'mentor_id' => 'required|exists:mentors,id',
                'grade' => 'required|integer|between:1,5',
                'review' => 'required|string',
            ];

            // Validar la solicitud
            $validator = Validator::make($request->all(), $rules);
            if ($validator->fails()) {
                return response()->json([
                    'message' => 'Validación fallida',
                    'errors' => $validator->errors()
                ], Response::HTTP_BAD_REQUEST);
            }

            // Buscar la valoración existente
            $valuation = Valuation::find($id);

            // Verificar si la valoración existe
            if (!$valuation) {
                return response()->json([
                    'message' => 'Valoración no encontrada',
                ], Response::HTTP_NOT_FOUND);
            }

            // Verificar que el usuario autenticado es el propietario de la valoración
            if ($valuation->user_id !== $user->id) {
                return response()->json([
                    'message' => 'No autorizado para actualizar esta valoración',
                ], Response::HTTP_FORBIDDEN);
            }

            // Actualizar la valoración
            $valuation->update([
                'mentor_id' => $request->input('mentor_id'),
                'grade' => $request->input('grade'),
                'review' => $request->input('review'),
            ]);

            return response()->json([
                'message' => 'Valoración actualizada exitosamente',
                'data' => $valuation
            ], Response::HTTP_OK);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error interno',
                'error' => $e->getMessage()
            ], Response::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
