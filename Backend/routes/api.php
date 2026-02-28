<?php

use App\Http\Controllers\ApplicationController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\InstallmentController;
use App\Http\Controllers\ValidationController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::prefix('/v1')->group(function(){
    Route::post("/auth/login", [AuthController::class, 'login']);
    Route::middleware('auth:sanctum')->group(function(){
        Route::get("/user", [AuthController::class, 'getUser']);
        Route::post("/auth/logout", [AuthController::class, 'logout']);
        Route::post("/validation", [ValidationController::class, 'post']);
        Route::get("/validation", [ValidationController::class, 'get']);
        Route::get("/installment_cars", [InstallmentController::class, 'get']);
        Route::get("/installment_cars/{id}", [InstallmentController::class, 'show']);
        Route::post("/applications", [ApplicationController::class, 'post']);
        Route::get("/applications", [ApplicationController::class, 'get']);
        Route::get("/application", [ApplicationController::class, 'show']);
    });
});