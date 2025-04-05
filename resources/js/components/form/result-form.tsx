import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { CourseType } from '@/pages/course';
import { ResultType } from '@/pages/result';
import { StudentType } from '@/pages/student';
import { useForm } from '@inertiajs/react';
import { Check, ChevronsUpDown, LoaderCircle } from 'lucide-react';
import { FormEventHandler, useState } from 'react';

type ResultForm = {
    score: string | number;
    course: string;
    student: string;
};

export default function ResultForm({
    action,
    submitRoute,
    students,
    courses,
    result,
}: {
    courses: CourseType[];
    students: StudentType[];
    result?: ResultType;
    submitRoute: string;
    action: 'edit' | 'create';
}) {
    // console.log(result);
    const [courseSelectOpen, setCourseSelectOpen] = useState(false);
    const [studentSelectOpen, setStudentSelectOpen] = useState(false);

    const [courseValue, setCourseValue] = useState(result?.course.name ?? '');
    const [studentValue, setStudentValue] = useState(result?.student.name ?? '');

    const { data, transform, post, setData, patch, processing, errors, reset } = useForm<Required<ResultForm>>({
        score: result?.score ?? '',
        course: result?.course.id ?? '',
        student: result?.student.id ?? '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        // console.log(e.target);
        transform((data) => ({
            ...data,
            prevStudent: result?.student.id,
            prevCourse: result?.course.id,
        }));

        action == 'create' ? post(submitRoute) : patch(submitRoute);
    };

    return (
        <form className="flex flex-col gap-6" onSubmit={submit}>
            <div className="grid gap-6">
                <div className="grid gap-2">
                    <Label htmlFor="score">Score</Label>
                    <Input id="score" required autoFocus tabIndex={1} value={data.score} onChange={(e) => setData('score', e.target.value)} />
                    <InputError message={errors.score} />
                </div>

                <Popover open={courseSelectOpen} onOpenChange={setCourseSelectOpen}>
                    <PopoverTrigger asChild>
                        <Button variant="outline" role="combobox" aria-expanded={courseSelectOpen} className="w-full justify-between">
                            {courseValue ? courses.find((c) => c.name === courseValue)?.name : 'Select course...'}
                            <ChevronsUpDown className="opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
                        <Command>
                            <CommandInput placeholder="Search course..." />
                            <CommandList>
                                <CommandEmpty>No course found.</CommandEmpty>
                                <CommandGroup>
                                    {courses.map((c) => (
                                        <CommandItem
                                            key={c.id}
                                            value={c.name}
                                            onSelect={(currentValue) => {
                                                setCourseValue(currentValue === courseValue ? '' : currentValue);
                                                setCourseSelectOpen(false);
                                                setData('course', c.id);
                                            }}
                                        >
                                            {c.name}
                                            <Check className={cn('ml-auto', courseValue === c.name ? 'opacity-100' : 'opacity-0')} />
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
                <InputError message={errors.course} />

                <Popover open={studentSelectOpen} onOpenChange={setStudentSelectOpen}>
                    <PopoverTrigger asChild>
                        <Button variant="outline" role="combobox" aria-expanded={studentSelectOpen} className="w-full justify-between">
                            {studentValue ? students.find((s) => s.name === studentValue)?.name : 'Select student...'}
                            <ChevronsUpDown className="opacity-50" />
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
                        <Command>
                            <CommandInput placeholder="Search student..." />
                            <CommandList>
                                <CommandEmpty>No student found.</CommandEmpty>
                                <CommandGroup>
                                    {students.map((s) => (
                                        <CommandItem
                                            key={s.id}
                                            value={s.name}
                                            onSelect={(currentValue) => {
                                                setStudentValue(currentValue === studentValue ? '' : currentValue);
                                                setStudentSelectOpen(false);
                                                setData('student', s.id);
                                            }}
                                        >
                                            {s.name}
                                            <Check className={cn('ml-auto', studentValue === s.name ? 'opacity-100' : 'opacity-0')} />
                                        </CommandItem>
                                    ))}
                                </CommandGroup>
                            </CommandList>
                        </Command>
                    </PopoverContent>
                </Popover>
                <InputError message={errors.student} />

                <div className="mt-4 flex flex-col space-y-2">
                    <Button type="submit" className="flex-auto" tabIndex={4} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        {action == 'create' ? 'Create' : 'Update'} Result
                    </Button>

                    <Button variant="outline" onClick={() => window.history.back()}>
                        {/* <Link href=''></Link>
                        Back */}
                    </Button>
                </div>
            </div>
        </form>
    );
}
