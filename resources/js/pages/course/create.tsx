import CourseForm from '@/components/form/course-form';
import AuthLayout from '@/layouts/auth-layout';
import { Head } from '@inertiajs/react';

export default function CreateCourse() {
    return (
        <AuthLayout title="Log in to your account" description="Enter your email and password below to log in">
            <Head title="Create Course" />
            <CourseForm action="create" submitRoute={route('course.store')} />
        </AuthLayout>
    );
}
