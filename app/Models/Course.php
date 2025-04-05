<?php

namespace App\Models;

use DateTimeInterface;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Course extends Model
{
    /** @use HasFactory<\Database\Factories\CourseFactory> */
    use HasFactory, HasUuids;
    protected $guarded = ['id'];
    protected $keyType = 'string';
    public $incrementing = false;

    public function students(): HasMany
    {
        return $this->hasMany(Course::class);
    }

    public function results(): HasMany
    {
        return $this->hasMany(Result::class);
    }

    protected function serializeDate(DateTimeInterface $date): string
    {

        return $date->format('d M Y');
    }
}
