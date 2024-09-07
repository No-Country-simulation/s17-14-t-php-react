<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;


class Mentor extends Model
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
