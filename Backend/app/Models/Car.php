<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Car extends Model
{
    protected $fillable = ['name', 'car_brand_id', 'price', 'description'];

    function brand(){
        return $this->belongsTo(CarBrand::class, 'car_brand_id');
    }
}
