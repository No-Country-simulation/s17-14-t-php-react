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
            $table->unsignedBigInteger('skill_id');
            $table->unsignedBigInteger('valuation_id');
            $table->unsignedBigInteger('category_id');
            $table->timestamps();
            $table->softDeletes();

            // Claves foráneas
            $table->foreign('skill_id')->references('id')->on('skills')->onDelete('cascade');
            $table->foreign('valuation_id')->references('id')->on('valuations')->onDelete('cascade');
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');

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
