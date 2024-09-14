<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Featured extends Model
{
    use HasFactory, SoftDeletes;

    protected $fillable = [
        'mentor_id',
        'user_id',
        'destacado',
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
