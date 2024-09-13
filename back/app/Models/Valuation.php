<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;

class Valuation extends Model
{
    use HasFactory, Notifiable, SoftDeletes;

    protected $fillable = [
        'user_id',
        'mentor_id',
        'grade',
        'review'
    ];
    // Relación con usuarios
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function mentors()
    {
        return $this->hasMany(Mentor::class);
    }
}


