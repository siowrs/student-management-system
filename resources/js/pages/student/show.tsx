import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Link, router } from '@inertiajs/react';
import { StudentType } from '.';
import { CourseType } from '../course';
import { ResultType } from '../result';

export default function Student({
    student,
}: {
    student: StudentType & {
        results: ResultType[] & {
            course: CourseType;
        };
    };
}) {
    const { results } = student;
    // console.log(student);

    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="">Course</TableHead>
                        <TableHead className="">Score</TableHead>
                        <TableHead className="">Date</TableHead>
                        <TableHead className="">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {results.map((r) => (
                        <TableRow key={r.id}>
                            <TableCell className="font-medium">{r.course.name}</TableCell>
                            <TableCell className="">{r.score}</TableCell>
                            <TableCell className="">{r.created_at}</TableCell>
                            <TableCell>
                                <div className="space-x-2">
                                    <Button asChild>
                                        <Link href={route('result.edit', r.id)}>Edit</Link>
                                    </Button>

                                    <Button onClick={() => router.delete(route('result.delete', r.id))}>Delete</Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </>
    );
}
