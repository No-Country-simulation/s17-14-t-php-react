<?php

namespace Database\Factories;

use App\Models\Skill;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Skill>
 */
class SkillFactory extends Factory
{
    protected $model = Skill::class;

    public function definition(): array
    {
        $skill = [
            'Empatía',
            'Paciencia',
            'Adaptabilidad',
            'Confidencialidad',
            'Autenticidad'
        ];
        return [
            'name' => $this->faker->randomElement($skill),
        ];
    }
}
