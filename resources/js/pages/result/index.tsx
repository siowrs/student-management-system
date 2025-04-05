import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Link, router } from '@inertiajs/react';

export type ResultType = {
    id: string;
    score: number;
    course: {
        name: string;
        id: string;
    };
    student: {
        name: string;
        id: string;
    };
};

export default function Results({ results }: { results: ResultType[] }) {
    return (
        <>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="">Student</TableHead>
                        <TableHead className="">Course</TableHead>
                        <TableHead className="">Score</TableHead>
                        <TableHead className="">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {results.map((r) => (
                        <TableRow key={r.id}>
                            <TableCell className="">
                                <Link href={route('student.show', r.student.id)} className="inline-block w-full px-5 py-1.5">
                                    {r.student.name}
                                </Link>
                            </TableCell>
                            <TableCell className="">{r.course.name}</TableCell>
                            <TableCell className="font">{r.score}</TableCell>
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

            <Button asChild>
                <Link
                    href={route('result.create')}
                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                >
                    Create Result
                </Link>
            </Button>
        </>
    );
}
