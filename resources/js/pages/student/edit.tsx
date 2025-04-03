import StudentForm from '@/components/form/student-form';
import AuthLayout from '@/layouts/auth-layout';
import { Head } from '@inertiajs/react';
import { StudentType } from '.';

export default function EditStudent({ student }: { student: StudentType }) {
    return (
        <AuthLayout title="Log in to your account" description="Enter your email and password below to log in">
            <Head title="Edit Student" />
            <StudentForm action="edit" student={student} submitRoute={route('student.update', student.id)} />
        </AuthLayout>
    );
}
