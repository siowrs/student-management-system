import ResultForm from '@/components/form/result-form';
import AuthLayout from '@/layouts/auth-layout';
import { Head } from '@inertiajs/react';
import { CourseType } from '../course';
import { StudentType } from '../student';

export default function CreateResult({ students, courses }: { students: StudentType[]; courses: CourseType[] }) {
    // console.log(courses);
    return (
        <AuthLayout title="Log in to your account" description="Enter your email and password below to log in">
            <Head title="Create Result" />
            <ResultForm students={students} courses={courses} action="create" submitRoute={route('result.store')} />
        </AuthLayout>
    );
}
