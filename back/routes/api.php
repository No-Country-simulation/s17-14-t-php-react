
<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\Auth\GoogleController;
use AWS\CRT\HTTP\Request;
use Illuminate\Support\Facades\Route;
use Laravel\Socialite\Facades\Socialite;
use SebastianBergmann\CodeCoverage\Driver\Driver;

//users
Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::post('/register', [AuthController::class, 'register'])->name('register');
//users_google


// rutas privadas
Route::middleware('auth:api')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

});
