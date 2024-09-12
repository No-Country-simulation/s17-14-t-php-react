<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Skill;
use App\Models\Category;
use App\Models\Mentor;
use Illuminate\Http\Response;
use App\Models\Valuation;

class SearchControlador extends Controller
{

    public function search(Request $request)
    {
        // Crear la consulta base
        $query = Mentor::query();

        // Aplicar filtros
        if ($request->has('skill_id')) {
            $query->where('skill_id', $request->input('skill_id'));
        }

        if ($request->has('valuation_id')) {
            $query->where('valuation_id', $request->input('valuation_id'));
        }

        if ($request->has('category_id')) {
            $query->where('category_id', $request->input('category_id'));
        }

        // Obtener el número de elementos por página desde la solicitud o establecer un valor predeterminado
        $perPage = $request->input('per_page', 10); // Valor predeterminado es 10 si no se proporciona

        // Ejecutar la consulta y obtener los resultados paginados
        $data = $query->paginate($perPage);

        // Formatear la respuesta
        $response = [
            'lastPage' => $data->lastPage(),
            'currentPage' => $data->currentPage(),
            'total' => $data->total(),
            'perPage' => $data->perPage(),
            'data' => $data->items()
        ];

        return response()->json($response, Response::HTTP_OK);


    }

    public function index($type, $query)
    {
        if (!$query || !$type) {
            return response()->json(['error' => 'Faltan parámetros de búsqueda'], 400);
        }
        switch ($type) {
            case 'skill':
                $skills = Skill::where('name', 'like', '%' . $query . '%')->get();
                $mentors = Mentor::whereIn('skill_id', $skills->pluck('id'))
                ->with('title', 'name', 'last')->get();
                return response()->json([
                    'skills' => $skills,
                    'mentors' => $mentors
                ]);

            case 'category':
                $categories = Category::where('name', 'like', '%' . $query . '%')->get();
                $mentors = Mentor::whereIn('category_id', $categories->pluck('id'))
                ->with('skill_id', 'category_id', 'valuation_id')->get();
                return response()->json([
                    'categories' => $categories,
                    'mentors' => $mentors
                ]);

            case 'name':
                $mentors = Mentor::where('name', 'like', '%' . $query . '%')->with('skill_id', 'category_id', 'valuation_id')->get();
                return response()->json([
                    'mentors' => $mentors
                ]);

            case 'valuation':
                $valuations = Valuation::where('description', 'like', '%' . $query . '%')->get();
                $mentors = Mentor::whereIn('valuation_id', $valuations->pluck('id'))
                ->with('skill', 'category', 'valuation')->get();
                return response()->json([
                    'valuations' => $valuations,
                    'mentors' => $mentors
                ]);

            default:
                return response()->json(['error' => 'Tipo de búsqueda no válido'], 400);
        }

    }
    public function indexsearch(Request $request)
    {
        // Crear la consulta base
        $query = Mentor::query();

        // Aplicar filtros
        if ($request->has('skill_id')) {
            $skillName = $request->input('skill_id');

            // Unir la tabla skills con la tabla mentors
            $query->join('skills', 'mentors.skill_id', '=', 'skills.id')
                ->where('skills.name', 'LIKE', "%{$skillName}%");
        }

        if ($request->has('valuation_id')) {
            $valuationGrade = $request->input('valuation_id');

            $query->join('valuations', 'mentors.valuation_id', '=', 'valuations.id')
                ->where('valuations.grade', 'LIKE', "%{$valuationGrade}%");
        }

        if ($request->has('category_id')) {
            $categoryName = $request->input('category_id');

            $query->join('categories', 'mentors.category_id', '=', 'categories.id')
                ->where('categories.name', 'LIKE', "%{$categoryName}%");
        }

        // Seleccionar todos los campos de mentors y el nombre de skills
        $query->select( 'mentors.*',
                        'skills.name as skill_name',
                        'valuations.grade as valuation_grade',
                        'categories.name as category_name');

        // Obtener el número de elementos por página desde la solicitud o establecer un valor predeterminado
        $perPage = $request->input('per_page', 10);

        // Ejecutar la consulta y obtener los resultados paginados
        $data = $query->paginate($perPage);

        // Formatear la respuesta
        $response = [
            'lastPage' => $data->lastPage(),
            'currentPage' => $data->currentPage(),
            'total' => $data->total(),
            'perPage' => $data->perPage(),
            'data' => $data->items()
        ];

        return response()->json($response, Response::HTTP_OK);
    }

}
