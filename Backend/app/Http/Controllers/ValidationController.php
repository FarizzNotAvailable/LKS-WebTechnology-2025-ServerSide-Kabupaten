<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Validation;
use Illuminate\Http\Request;

class ValidationController extends Controller
{
    function post(Request $request){
        $dataClient = $request->validate([
            'job' => 'required',
            'job_description' => 'nullable',
            'income' => 'required',
            'reason_accepted' => 'nullable',
        ]);

        $token = $request->bearerToken();
        $user = User::where('token', $token)->first();

        $dataClient['user_id'] = $user->id;
        Validation::create($dataClient);

        return response()->json([
                "Header" =>[
                    'Response code'=>200
                    ],
                "Body"=>[
                    "message" => "Request data validation sent successfull"
                ]
            ],200);
    }

    function get(Request $request){
        $token = $request->bearerToken();
        $user = User::where('token', $token)->first();

        $validation = Validation::where('user_id', $user->id)->first();

        if($validation->validator == null){
            $validator = "";
        }else{
            $validator = $validation->validator->user->name;
        }
        return response()->json([
                "Header" =>[
                    'Response code'=>200
                    ],
                "Body"=>[
                    "id" => $validation->id,
                    "status" => $validation->status,
                    "job" => $validation->job,
                    "job_description" => $validation->job_description,
                    "income" => $validation->income,
                    "reason_accepted" => $validation->reason_accepted,
                    "validator_notes" => $validation->validator_notes,
                    "validator" => $validator
                ]
            ],200);
    }
}
