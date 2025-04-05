import StudentForm from '@/components/form/student-form';
import FormLayout from '@/layouts/form-layout';
import { Head } from '@inertiajs/react';

export default function CreateStudent() {
    return (
        <FormLayout title="Create student" description="Enter student name and email below.">
            <Head title="Create Student" />
            <StudentForm action="create" submitRoute={route('student.store')} />
        </FormLayout>
    );
}
