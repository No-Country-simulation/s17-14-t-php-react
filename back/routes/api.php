
<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\MentorController;
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
//valuation
Route::post('valuation', [ValuationController::class, 'store']);

// rutas privadas
Route::middleware('auth:api')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

});
