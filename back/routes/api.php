<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\MentorController;
use App\Http\Controllers\ValuationController;
use Illuminate\Support\Facades\Route;

// Rutas de autenticación
Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::post('/register', [AuthController::class, 'register'])->name('register');

// Rutas públicas
Route::get('mentor', [MentorController::class, 'index']);
Route::get('mentor/{id}', [MentorController::class, 'show']);
Route::post('valuation', [ValuationController::class, 'store']);

// Rutas protegidas con autenticación
Route::middleware('auth:api')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');
    Route::get('/me', [AuthController::class, 'me']);

    // Rutas de chat
    Route::post('/chat/send', [ChatController::class, 'sendMessage']);
    Route::get('/chat/{mentor_id}', [ChatController::class, 'getMessages']);
});
