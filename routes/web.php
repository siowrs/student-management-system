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
    Route::get('/{student}', [StudentController::class, 'show'])->name('show');
    Route::get('/{student}/edit', [StudentController::class, 'edit'])->name('edit');
    Route::patch('/{student}/edit', [StudentController::class, 'update'])->name('update');
    Route::delete('/{student}/delete', [StudentController::class, 'destroy'])->name('delete');
});

Route::prefix('course')->name('course.')->group(function () {
    Route::get('/', [CourseController::class, 'index'])->name('index');
    Route::get('/create', [CourseController::class, 'create'])->name('create');
    Route::post('/create', [CourseController::class, 'store'])->name('store');
    Route::get('{course}/edit', [CourseController::class, 'edit'])->name('edit');
    Route::patch('{course}/edit', [CourseController::class, 'update'])->name('update');
    Route::delete('{course}/delete', [CourseController::class, 'destroy'])->name('delete');
});

Route::prefix('result')->name('result.')->group(function () {
    Route::get('/', [ResultController::class, 'index'])->name('index');
    Route::get('/create', [ResultController::class, 'create'])->name('create');
    Route::post('/create', [ResultController::class, 'store'])->name('store');
    Route::get('{result}/edit', [ResultController::class, 'edit'])->name('edit');
    Route::patch('{result}/edit', [ResultController::class, 'update'])->name('update');
    Route::delete('{result}/delete', [ResultController::class, 'destroy'])->name('delete');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
