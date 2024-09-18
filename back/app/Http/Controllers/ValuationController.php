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
            $authUser = Auth::user();
            $rules = [
                'grade' => 'required|integer|between:1,5',
                'review' => 'required|string',

            ];

            if (!$authUser) {
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

            $dataToCreate = $validator->validated();
            $dataToCreate['user_id'] = $authUser->id;
            $data = Valuation::create($dataToCreate);

            return response()->json([
                'message' => 'Valoracion y reseña creado exitosamente',
                'data' => $data
            ], Response::HTTP_CREATED);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Error interno',
                'error' => $e->getMessage()
            ], Response::HTTP_BAD_REQUEST);
        }
    }

}
