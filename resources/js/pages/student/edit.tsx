import StudentForm from '@/components/form/student-form';
import FormLayout from '@/layouts/form-layout';
import { Head } from '@inertiajs/react';
import { StudentType } from '.';

export default function EditStudent({ student }: { student: StudentType }) {
    return (
        <FormLayout title="Edit student" description="Enter latest student name and email below.">
            <Head title="Edit Student" />
            <StudentForm action="edit" student={student} submitRoute={route('student.update', student.id)} />
        </FormLayout>
    );
}
