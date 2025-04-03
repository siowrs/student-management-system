<?php

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
    Route::patch('/update/{student}', [StudentController::class, 'update'])->name('update');
    Route::delete('/delete/{student}', [StudentController::class, 'destroy'])->name('delete');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
require __DIR__ . '/auth.php';
