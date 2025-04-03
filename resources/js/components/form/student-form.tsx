import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { StudentType } from '@/pages/student';
import { useForm } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';
import { FormEventHandler } from 'react';

type StudentForm = {
    name: string;
    email: string;
};

export default function StudentForm({ action, submitRoute, student }: { student?: StudentType; submitRoute: string; action: 'edit' | 'create' }) {
    const { data, post, setData, patch, processing, errors, reset } = useForm<Required<StudentForm>>({
        name: student?.name ?? '',
        email: student?.email ?? '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        action == 'create' ? post(submitRoute) : patch(submitRoute);
    };

    console.log(submit);

    return (
        <form className="flex flex-col gap-6" onSubmit={submit}>
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="email">Name</Label>
                    <Input id="name" required autoFocus tabIndex={1} value={data.name} onChange={(e) => setData('name', e.target.value)} />
                    <InputError message={errors.name} />
                </div>

                <div className="grid gap-2">
                    <Label htmlFor="email">Email address</Label>
                    <Input
                        id="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        placeholder="email@example.com"
                    />
                    <InputError message={errors.email} />
                </div>

                <Button type="submit" className="mt-4 w-full" tabIndex={4} disabled={processing}>
                    {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                    {action == 'create' ? 'Create' : 'Update'} Student
                </Button>
            </div>
        </form>
    );
}
