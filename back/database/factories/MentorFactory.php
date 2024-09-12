<?php

namespace Database\Factories;


use App\Models\Mentor;
use App\Models\Category;
use App\Models\Skill;
use App\Models\Valuation;
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
            'skill_id' => Skill::inRandomOrder()->first()->id,
            'valuation_id' => Valuation::inRandomOrder()->first()->id,
            'category_id' => Category::inRandomOrder()->first()->id
        ];
    }
}
