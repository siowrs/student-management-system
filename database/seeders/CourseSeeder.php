<?php

namespace Database\Seeders;

use App\Models\Course;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Course::factory()->create([
            'name' => 'Biology'
        ]);

        Course::factory()->create([
            'name' => 'Physics'
        ]);

        Course::factory()->create([
            'name' => 'Chemistry'
        ]);

        Course::factory()->create([
            'name' => 'Mathematics'
        ]);

        Course::factory()->create([
            'name' => 'English'
        ]);
    }
}
