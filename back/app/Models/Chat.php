<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Chat extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = ['user_id', 'mentor_id', 'message', 'pay_id'];

    // Relación con usuarios
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    // Relación con mentores
    public function mentor()
    {
        return $this->belongsTo(Mentor::class);
    }
}
