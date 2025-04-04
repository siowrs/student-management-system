<?php

use App\Http\Controllers\CourseController;
use App\Http\Controllers\ExamResultController;
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

Route::prefix('exam')->name('exam.')->group(function () {
    Route::get('/', [ExamResultController::class, 'index'])->name('index');
    Route::get('/create', [ExamResultController::class, 'create'])->name('create');
    Route::post('/create', [ExamResultController::class, 'store'])->name('store');
    Route::get('/edit/{exam}', [ExamResultController::class, 'edit'])->name('edit');
    Route::patch('/edit/{exam}', [ExamResultController::class, 'update'])->name('update');
    Route::delete('/delete/{exam}', [ExamResultController::class, 'destroy'])->name('delete');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
