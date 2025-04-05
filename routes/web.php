<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\ResultController;
use App\Http\Controllers\StudentController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::prefix('student')->name('student.')->group(function () {
    Route::get('/', [StudentController::class, 'index'])->name('index');
    Route::get('/create', [StudentController::class, 'create'])->name('create');
    Route::post('/create', [StudentController::class, 'store'])->name('store');
    Route::get('/edit/{student}', [StudentController::class, 'edit'])->name('edit');
    Route::patch('/edit/{student}', [StudentController::class, 'update'])->name('update');
    Route::delete('/delete/{student}', [StudentController::class, 'destroy'])->name('delete');
});

Route::prefix('course')->name('course.')->group(function () {
    Route::get('/', [CourseController::class, 'index'])->name('index');
    Route::get('/create', [CourseController::class, 'create'])->name('create');
    Route::post('/create', [CourseController::class, 'store'])->name('store');
    Route::get('/edit/{course}', [CourseController::class, 'edit'])->name('edit');
    Route::patch('/edit/{course}', [CourseController::class, 'update'])->name('update');
    Route::delete('/delete/{course}', [CourseController::class, 'destroy'])->name('delete');
});

Route::prefix('result')->name('result.')->group(function () {
    Route::get('/', [ResultController::class, 'index'])->name('index');
    Route::get('/create', [ResultController::class, 'create'])->name('create');
    Route::post('/create', [ResultController::class, 'store'])->name('store');
    Route::get('/edit/{result}', [ResultController::class, 'edit'])->name('edit');
    Route::patch('/edit/{result}', [ResultController::class, 'update'])->name('update');
    Route::delete('/delete/{result}', [ResultController::class, 'destroy'])->name('delete');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
