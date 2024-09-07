<?php

namespace Database\Factories;


use App\Models\Mentor;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Mentor>
 */
class MentorFactory extends Factory
{

    protected $model = Mentor::class;

    public function definition(): array
    {
        return [
            'title' => $this->faker->word,
            'description' => $this->faker->paragraph,
            'name' => $this->faker->firstName,
            'last' => $this->faker->lastName,
            'img' => $this->faker->imageUrl, // Genera una URL de imagen falsa
            'price_min' => $this->faker->randomFloat(2, 10, 100), // Precio mínimo
            'price_med' => $this->faker->randomFloat(2, 100, 200), // Precio medio
            'price_max' => $this->faker->randomFloat(2, 200, 500), // Precio máximo
            'skill_id' => $this->faker->randomFloat(1, 10), // Asume que hay skills con IDs del 1 al 10
            'valuation_id' => $this->faker->randomFloat(1, 10) // Asume que hay valuaciones con IDs del 1 al 10
            //'valuation_id' => $this->faker->numberBetween(1, 10) // Asume que hay valuaciones con IDs del 1 al 10
        ];
    }
}
