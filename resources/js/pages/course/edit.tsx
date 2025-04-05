import CourseForm from '@/components/form/course-form';
import FormLayout from '@/layouts/form-layout';
import { Head } from '@inertiajs/react';
import { CourseType } from '.';

export default function EditCourse({ course }: { course: CourseType }) {
    return (
        <FormLayout title="Edit course" description="Enter the latest course name below.">
            <Head title="Edit Course" />
            <CourseForm action="edit" course={course} submitRoute={route('course.update', course.id)} />
        </FormLayout>
    );
}
