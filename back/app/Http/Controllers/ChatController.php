<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use Illuminate\Http\Request;
use Pusher\Pusher;
use Illuminate\Support\Facades\Auth;

class ChatController extends Controller
{
    public function sendMessage(Request $request)
    {
        // Verifica si el usuario está autenticado
        if (!Auth::check()) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    
        $request->validate([
            'mentor_id' => 'required|exists:mentors,id',
            'message' => 'required|string'
        ]);
    
        $chat = Chat::create([
            'user_id' => Auth::id(),  // Usa el ID del usuario autenticado
            'mentor_id' => $request->mentor_id,
            'message' => $request->message,
        ]);
/*
        //prueba de si pusher anda
        dd([
            'PUSHER_APP_KEY' => env('PUSHER_APP_KEY'),
            'PUSHER_APP_SECRET' => env('PUSHER_APP_SECRET'),
            'PUSHER_APP_ID' => env('PUSHER_APP_ID'),
            'PUSHER_APP_CLUSTER' => env('PUSHER_APP_CLUSTER')
        ]);
*/        
    
        // Notificar a Pusher para enviar el mensaje en tiempo real
        $pusher = new Pusher(
            env('PUSHER_APP_KEY'),
            env('PUSHER_APP_SECRET'),
            env('PUSHER_APP_ID'),
            [
                'cluster' => env('PUSHER_APP_CLUSTER'),
                'useTLS' => true
            ]
        );
    
        $pusher->trigger('chat-channel', 'new-message', $chat);
    
        return response()->json(['message' => 'Message sent successfully', 'chat' => $chat]);
    }
    
    public function getMessages($mentor_id)
    {
        // Verifica si el usuario está autenticado
        if (!Auth::check()) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    
        $user_id = Auth::id();  // Usa el ID del usuario autenticado
    
        $messages = Chat::where('user_id', $user_id)
            ->where('mentor_id', $mentor_id)
            ->orderBy('created_at', 'asc')
            ->get();
    
        return response()->json($messages);
    }
    
        
}
