<?php

namespace App\Http\Controllers;

use App\Models\ApplicationInstallment;
use App\Models\Car;
use App\Models\User;
use App\Models\Validation;
use Illuminate\Http\Request;

class ApplicationController extends Controller
{
    function post(Request $request){
        $dataClient = $request->validate([
            'installment_id' => 'required',
            'month' => 'required|integer',
            'notes' => 'nullable'
        ]);

        $user = User::where('token', $request->bearerToken())->first();
        $validation = Validation::where('user_id', $user->id)->first();
        $application = ApplicationInstallment::where('user_id', $user->id)->first();

        if($validation->status != 'accepted'){
            return response()->json([
                'Header'=>[
                    'Response code'=> 401
                ],
                'Body'=>[
                    'message' => 'Your data validation must be accepted by validator before'
                ]
            ],401);
        }
        if($application){
            return response()->json([
                'Header'=>[
                    'Response code'=> 401
                ],
                'Body'=>[
                    'message' => 'Application for an installment can only be once'
                ]
            ],401);
        }
        $car = Car::where('id', $dataClient['installment_id'])->first();
        
        $data['car_id'] = $dataClient['installment_id'];
        $data['date'] = date("Y-m-d");
        $data['user_id'] = $user->id;
        $data['month'] = $dataClient['month'];
        $data['nominal'] = $car->price/$dataClient['month'];
        $data['notes'] = $dataClient['notes'];

        ApplicationInstallment::create($data);

        return response()->json([
                'Header'=>[
                    'Response code'=> 200
                ],
                'Body'=>[
                   'message' => 'Applying for installment successfull'
                ]
            ],200);
    }
    function get(){
        $applications = ApplicationInstallment::all();

        $applications = $applications->map(function ($application) {
            return[
                'id' => $application->id,
                'car' => $application->car->name,
                'brand' => $application->car->brand->name,
                'price' => $application->car->price,
                'description' => $application->car->description,
                'application' =>[
                    'month' => $application->month,
                    'nominal' => $application->nominal,
                    'apply_status' => $application->status,
                    'notes' => $application->notes,
                ]
            ];
        })->toArray();

        return response()->json([
            'Header'=>[
                'Response code'=>200
            ],
            'Body'=>[
                'installment'=>$applications
            ]
        ]);
    }

    function show(Request $request){
        $user = User::where('token', $request->bearerToken())->first();
        $application = ApplicationInstallment::where('user_id',$user->id)->first();

        return response()->json([
            'Header'=>[
                'Response code'=>200
            ],
            'Body'=>[
                'installment'=>[
                    'id' => $application->id,
                    'car' => $application->car->name,
                    'brand' => $application->car->brand->name,
                    'price' => $application->car->price,
                    'description' => $application->car->description,
                    'application' =>[
                        'month' => $application->month,
                        'date' => $application->date,
                        'nominal' => $application->nominal,
                        'apply_status' => $application->status,
                        'notes' => $application->notes,
                    ]
                ]
            ]
        ]);
    }
}
