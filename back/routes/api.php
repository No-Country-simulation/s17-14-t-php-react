
<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\FeaturedController;
use App\Http\Controllers\MentorController;
use App\Http\Controllers\SearchControlador;
use App\Http\Controllers\ValuationController;
use AWS\CRT\HTTP\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;
use SebastianBergmann\CodeCoverage\Driver\Driver;

//users
Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::post('/register', [AuthController::class, 'register'])->name('register');
//mentor
Route::get('mentor', [MentorController::class, 'index']);
Route::get('mentor/{id}', [MentorController::class, 'show']);
//search
Route::get('/search/{type}/{query}', [SearchControlador::class, 'index']);
Route::get('/search', [SearchControlador::class, 'search']);
//valuation
Route::get('/valuation', [ValuationController::class, 'topRated']);
//featured
Route::get('/featured',[FeaturedController::class, 'index']);
// rutas privadas
Route::middleware('auth:api')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

});

// Rutas protegidas con autenticación
//chat
Route::middleware('auth:api')->group(function () {
    // Ruta para enviar mensajes
    Route::post('/chat/send', [ChatController::class, 'sendMessage']);

    // Ruta para obtener mensajes entre un usuario y un mentor
    Route::get('/chat/{mentor_id}', [ChatController::class, 'getMessages']);
    //valuation
    Route::post('valuation', [ValuationController::class, 'store'])->name('valuation');
    Route::put('valuation/{id}', [ValuationController::class, 'update'])->name('valuation');

});
