<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use App\Models\GoogleUser;
use Illuminate\Support\Facades\Validator;

class GoogleController extends Controller
{
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    public function handleGoogleCallback()
    {
        try {
            $googleUser = Socialite::driver('google')->user();

            // Busca el usuario en la base de datos
            $user = GoogleUser::where('google_id', $googleUser->id)->first();

            if ($user) {
                // Inicia sesión con el usuario existente
                Auth::login($user);
            } else {
                // Crea un nuevo usuario
                $new = GoogleUser::create([
                    'name' => $googleUser->name,
                    'email' => $googleUser->email,
                    'google_id' => $googleUser->id,
                    'password' => bcrypt('password') // Genera una contraseña predeterminada o usa una lógica diferente
                ]);

                // Inicia sesión con el nuevo usuario
                Auth::login($new);
            }

            return redirect()->route('home'); // Redirige a la ruta deseada

        } catch (\Exception $e) {
            return redirect('/')->withErrors('Error en la autenticación con Google: ' . $e->getMessage());
        }
    }
}
