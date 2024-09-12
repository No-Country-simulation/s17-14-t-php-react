<?php

namespace Database\Seeders;

use App\Models\Valuation;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ValuationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Valuation::factory()->count(5)->create();
    }
}
