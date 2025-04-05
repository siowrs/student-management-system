import CourseForm from '@/components/form/course-form';
import FormLayout from '@/layouts/form-layout';
import { Head } from '@inertiajs/react';

export default function CreateCourse() {
    return (
        <FormLayout title="Create course" description="Enter course name below.">
            <Head title="Create Course" />
            <CourseForm action="create" submitRoute={route('course.store')} />
        </FormLayout>
    );
}
