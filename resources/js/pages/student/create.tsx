import StudentForm from '@/components/form/student-form';
import AuthLayout from '@/layouts/auth-layout';
import { Head } from '@inertiajs/react';

export default function CreateStudent() {
    return (
        <AuthLayout title="Log in to your account" description="Enter your email and password below to log in">
            <Head title="Create Student" />
            <StudentForm action="create" submitRoute={route('student.create')} />
        </AuthLayout>
    );
}
