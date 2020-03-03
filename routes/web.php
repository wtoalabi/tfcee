<?php

    use Illuminate\Support\Facades\Route;

    Route::domain('admin.tfcee.loc')->middleware('web')->group(function () {
        Route::get('/', function(){
            return view('admin.dashboard.index');
        });
    });

    Route::domain('students.tfcee.loc')->middleware('web')->group(function () {
        Route::get('/', function(){
            return view('student.dashboard.index');
        });
    });
