<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreResultRequest;
use App\Http\Requests\UpdateResultRequest;
use App\Models\Course;
use App\Models\Result;
use App\Models\Student;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\DB;
use Inertia\Response;

class ResultController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $results = Result::with(['student:id,name', 'course:id,name'])->get();

        // dd($results);

        return inertia('result/index', ['results' => $results]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        $courses = Course::all();
        $students = Student::all();

        return inertia('result/create', [
            'courses' => $courses,
            'students' => $students
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreResultRequest $request): RedirectResponse
    {

        $validated = $request->validate([
            'score' => ['numeric', 'required'],
            'student' => ['required', 'exists:students,id'],
            'course' => ['required', 'exists:courses,id']
        ]);


        DB::transaction(function () use ($validated) {

            $student = Student::find($validated['student']);

            Result::create([
                'score' => $validated['score'],
                'student_id' => $validated['student'],
                'course_id' => $validated['course']
            ]);

            $student->update([
                'average_score' => $student->results->avg('score')
            ]);
        });

        return to_route('result.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Result $result)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Result $result): Response
    {
        $courses = Course::all();
        $students = Student::all();

        return inertia('result/edit', [
            'result' => $result->load(['student:id,name', 'course:id,name']),
            'courses' => $courses,
            'students' => $students
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateResultRequest $request, Result $result): RedirectResponse
    {

        // dd($request->all());

        $validated = $request->validate([
            'score' => ['numeric', 'required'],
            'student' => ['required', 'exists:students,id'],
            'prevStudent' => ['required', 'exists:students,id'],
            'course' => ['required', 'exists:courses,id']
        ]);


        DB::transaction(function () use ($result, $validated) {

            $new_student = Student::find($validated['student']);

            $prev_student = Student::find($validated['prevStudent']);

            $result->update([
                'score' => $validated['score'],
                'student_id' => $validated['student'],
                'course_id' => $validated['course']
            ]);

            $new_student->update([
                'average_score' => $new_student->results->avg('score')
            ]);

            $prev_student->update([
                'average_score' => $prev_student->results->avg('score')
            ]);
        });

        return to_route('result.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Result $result): RedirectResponse
    {

        DB::transaction(function () use ($result) {

            $student = $result->student;

            $result->delete();

            $student->update([
                'average_score' => $student->results->avg('score') ?? 0
            ]);
        });

        return to_route('result.index');
    }
}
