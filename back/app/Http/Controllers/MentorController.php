<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Mentor;
use Illuminate\Http\Response;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class MentorController extends Controller
{

    public function index()
    {
        try {

            $data = Mentor::paginate(10);
            $response = [
                'lastPage' => $data->lastPage(),
                'currentPage' => $data->currentPage(),
                'total' => $data->total(),
                'data' => $data->items()
            ];
            return response()->json($response, Response::HTTP_OK);
        }catch (\Exception $e) {
            return response()->json([
                'message' => "Error",
                'error' => $e->getMessage()
            ], Response::HTTP_BAD_REQUEST);
        }
    }


    public function show($id)
    {
        try {
            $data = Mentor::findOrFail($id);
            return response()->json($data, Response::HTTP_OK);
        }catch (ModelNotFoundException $e) {
            // Manejo de error si no se encuentra el modelo
            $modelName = class_basename($e->getModel());
            return response()->json([
                'message' => "No hay resultados de consulta por el id $id del modelo {$modelName} "
            ], Response::HTTP_NOT_FOUND);
            // Manejo de cualquier otro error
        }catch (\Exception $e) {
            return response()->json([
                'message' => 'Error interno',
                'error' => $e->getMessage()
            ], Response::HTTP_BAD_REQUEST);
        }
    }
}
