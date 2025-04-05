import ResultForm from '@/components/form/result-form';
import FormLayout from '@/layouts/form-layout';
import { Head } from '@inertiajs/react';
import { CourseType } from '../course';
import { StudentType } from '../student';

export default function CreateResult({ students, courses }: { students: StudentType[]; courses: CourseType[] }) {
    // console.log(courses);
    return (
        <FormLayout title="Create result" description="Enter the result below.">
            <Head title="Create Result" />
            <ResultForm students={students} courses={courses} action="create" submitRoute={route('result.store')} />
        </FormLayout>
    );
}
