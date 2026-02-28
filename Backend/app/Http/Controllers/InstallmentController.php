<?php

namespace App\Http\Controllers;

use App\Models\AvailableMonth;
use App\Models\Car;

class InstallmentController extends Controller
{
    function get(){
        $cars = Car::all();

        $cars = $cars->map(function ( $car) {
            $months = AvailableMonth::where('car_id', $car->id)->get();

            return [
                'id'=>$car->id,
                'car'=>$car->name,
                'brand'=>$car->brand->name,
                'price'=>$car->price,
                'description'=>$car->description,
                'available_month'=>$months->map(function ( $month) {
                    return [
                        'id'=>$month->id,
                        'month' => $month->month,
                        'description' => $month->description,
                    ];
                })
            ];
        })->toArray();


        return response()->json([
            'Header'=>[
                'Response code'=>200
            ],
            "Body"=>[
                "cars"=>$cars
            ]
        ]);
    }
    function show(string $id){
        $car = Car::where('id', $id)->first();
        $months = AvailableMonth::where('car_id', $car->id)->get();

        return response()->json([
            'Header'=>[
                'Response code'=>200
            ],
            "Body"=>[
                "installment"=>[
                    'id'=>$car->id,
                    'car'=>$car->name,
                    'brand'=>$car->brand->name,
                    'price'=>$car->price,
                    'description'=>$car->description,
                    'available_month'=>$months->map(function ( $month) {
                        return [
                            'id'=>$month->id,
                            'month' => $month->month,
                            'description' => $month->description,
                        ];
                    })
                ]
            ]
        ]);
    }
}
