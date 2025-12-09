<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');

    Route::get('courses', function () {
        return Inertia::render('courses/index');
    })->name('courses.index');

    Route::get('courses/{id}', function (string $id) {
        return Inertia::render('courses/show', ['courseId' => $id]);
    })->name('courses.show');

    Route::get('my-courses', function () {
        return Inertia::render('courses/my-courses');
    })->name('courses.my-courses');

    Route::get('courses/{id}/modules', function (string $id) {
        return Inertia::render('courses/modules', ['courseId' => $id]);
    })->name('courses.modules');

    Route::get('courses/{id}/modules/{moduleId}', function (
        string $id,
        string $moduleId,
    ) {
        return Inertia::render('courses/module-content', [
            'courseId' => $id,
            'moduleId' => $moduleId,
        ]);
    })->name('courses.module-content');

    Route::get('courses/{id}/modules/{moduleId}/quiz', function (
        string $id,
        string $moduleId,
    ) {
        return Inertia::render('courses/quiz', [
            'courseId' => $id,
            'moduleId' => $moduleId,
        ]);
    })->name('courses.quiz');

    Route::get('leaderboards', function () {
        return Inertia::render('leaderboards');
    })->name('leaderboards');
});

require __DIR__.'/settings.php';
