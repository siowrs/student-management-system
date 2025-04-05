import ResultForm from '@/components/form/result-form';
import FormLayout from '@/layouts/form-layout';
import { Head } from '@inertiajs/react';
import { ResultType } from '.';
import { CourseType } from '../course';
import { StudentType } from '../student';

export default function EditResult({ result, students, courses }: { result: ResultType; students: StudentType[]; courses: CourseType[] }) {
    // console.log(courses);
    return (
        <>
            <FormLayout title="Update result" description="Enter the latest result below.">
                <Head title="Create Result" />
                <ResultForm result={result} students={students} courses={courses} action="edit" submitRoute={route('result.update', result.id)} />
            </FormLayout>
        </>
    );
}
