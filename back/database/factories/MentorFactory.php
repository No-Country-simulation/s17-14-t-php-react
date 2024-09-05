<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Mentor>
 */
class MentorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->word,
            'description' => $this->faker->paragraph,
            'name' => $this->faker->firstName,
            'last' => $this->faker->lastName,
            'img' => $this->faker->imageUrl,
            'price_min' => $this->faker->randomFloat(2, 10, 100),
            'price_med' => $this->faker->randomFloat(2, 100, 200),
            'price_max' => $this->faker->randomFloat(2, 200, 300),
            'skill_id' => $this->faker->randomFloat(2, 200, 300), 
            'valuation_id' => $this->faker->randomFloat(2, 200, 300),
        ];
    }
}
