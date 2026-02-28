<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ApplicationInstallment extends Model
{
    protected $fillable = ['car_id', 'user_id', 'status', 'nominal','month','date', 'notes'];

    function car(){
        return $this->belongsTo(Car::class,'car_id');
    }
    function user(){
        return $this->belongsTo(User::class,'user_id');
    }
}
