<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('mentors', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->text('description');
            $table->string('name');
            $table->string('last');
            $table->string('img');
            $table->float("price_min");
            $table->float("price_med");
            $table->float("price_max");
            $table->float('skill_id');
            $table->float('valuation_id');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations
     */
    public function down(): void
    {
        Schema::dropIfExists('mentors');
    }
};
