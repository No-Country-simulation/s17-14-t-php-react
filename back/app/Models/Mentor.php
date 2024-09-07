<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Mentor extends Authenticatable
{
    use HasFactory, Notifiable;

    protected $fillable = [
        'title',
        'description',
        'name',
        'last',
        'img',
        'price_min',
        'price_med',
        'price_max',
        'skill_id',
        'valuation_id'
    ];

    public function chats() {
        return $this->hasMany(Chat::class);
    }

}
