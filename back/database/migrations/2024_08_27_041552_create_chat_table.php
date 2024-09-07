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
        Schema::create('chats', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');  // Relación con users
            $table->unsignedBigInteger('mentor_id'); // Relación con mentors
            $table->unsignedBigInteger('pay_id')->nullable(); // Dejarlo opcional por ahora
            $table->text('message');  // Cambiar a 'text' ya que los mensajes pueden ser largos
            $table->timestamps();
            $table->softDeletes();

            // Claves foráneas
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('mentor_id')->references('id')->on('mentors')->onDelete('cascade');
        
        });
    }

    /**
     * Reverse the migrations
     */
    public function down(): void
    {
        Schema::dropIfExists('chats');
    }
};
