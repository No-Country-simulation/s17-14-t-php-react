<?php

use Illuminate\Foundation\Application;
use Fruitcake\Cors\HandleCors;

return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Illuminate\Foundation\Configuration\Middleware $middleware) {
       /*  $middleware->append(HandleCors::class); */
        // Agrega otros middleware según sea necesario
    })
    ->withExceptions(function ($exceptions) {
        //
    })->create();
