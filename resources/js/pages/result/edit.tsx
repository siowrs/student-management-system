import ResultForm from '@/components/form/result-form';
import AuthLayout from '@/layouts/auth-layout';
import { Head } from '@inertiajs/react';
import { ResultType } from '.';
import { CourseType } from '../course';
import { StudentType } from '../student';

export default function EditResult({ result, students, courses }: { result: ResultType; students: StudentType[]; courses: CourseType[] }) {
    // console.log(courses);
    return (
        <AuthLayout title="Log in to your account" description="Enter your email and password below to log in">
            <Head title="Create Result" />
            <ResultForm result={result} students={students} courses={courses} action="edit" submitRoute={route('result.update', result.id)} />
        </AuthLayout>
    );
}
