import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CourseType } from '@/pages/course';
import { useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

type CourseForm = {
    name: string;
};

export default function CourseForm({ action, submitRoute, course }: { course?: CourseType; submitRoute: string; action: 'edit' | 'create' }) {
    const { data, post, setData, patch, processing, errors, reset } = useForm<Required<CourseForm>>({
        name: course?.name ?? '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        action == 'create' ? post(submitRoute) : patch(submitRoute);
    };

    return (
        <form className="flex flex-col gap-6" onSubmit={submit}>
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" required autoFocus tabIndex={1} value={data.name} onChange={(e) => setData('name', e.target.value)} />
                    <InputError message={errors.name} />
                </div>

                <Button type="submit" className="mt-4 w-full" tabIndex={4} disabled={processing}>
                    {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                    {action == 'create' ? 'Create' : 'Update'} Course
                </Button>
            </div>
        </form>
    );
}
