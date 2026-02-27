<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    function login(Request $request){
        $dataClient = $request->validate([
            'id_card_number' => 'required',
            'password' => 'required',
        ]);

        $user = User::where('id_card_number', $dataClient['id_card_number'])->first();

        if(!$user || $user->password != $dataClient['password']){
            return response()->json([
                "Header" =>[
                    'Response code'=>401
                    ],
                "Body"=>[
                    "message" => "ID Card or Password incorrect"
                ]
            ],401);
        }

        if(!$user->token){
            $data['token'] = $user->createToken('auth')->plainTextToken;
            $user->update($data);
        }

        return response()->json([
            "Header" =>[
                'Response code'=>200
            ],
            "Body"=>[
                'name'=>$user->name,
                'born_date'=>$user->born_date,
                'gender'=>$user->gender,
                'address'=>$user->address,
                'token'=>$user->token,
                'regional'=>[
                    'id' => $user->regional->id,
                    'province' => $user->regional->province,
                    'district' => $user->regional->district,
                ]
            ]
        ],200);

    }

    function logout(Request $request){
        $token = $request->bearerToken();

        $user = User::where('token', $token)->first();

        $data['token'] = '';

        $user->update($data);

        return response()->json([
                "Header" =>[
                    'Response code'=>200
                    ],
                "Body"=>[
                    "message" => "Logout Success"
                ]
            ],200);
    }

    function getUser(Request $request){
        $token = $request->bearerToken();

        $user = User::where('token', $token)->first();
        return response()->json([
            "Header" =>[
                'Response code'=>200
            ],
            "Body"=>[
                'name'=>$user->name,
                'born_date'=>$user->born_date,
                'gender'=>$user->gender,
                'address'=>$user->address,
                'token'=>$user->token,
                'regional'=>[
                    'id' => $user->regional->id,
                    'province' => $user->regional->province,
                    'district' => $user->regional->district,
                ]
            ]
        ],200);
    }
}
