import CourseForm from '@/components/form/course-form';
import AuthLayout from '@/layouts/auth-layout';
import { Head } from '@inertiajs/react';
import { CourseType } from '.';

export default function EditCourse({ course }: { course: CourseType }) {
    return (
        <AuthLayout title="Log in to your account" description="Enter your email and password below to log in">
            <Head title="Edit Student" />
            <CourseForm action="edit" course={course} submitRoute={route('course.update', course.id)} />
        </AuthLayout>
    );
}
