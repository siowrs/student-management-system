import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Link, router } from '@inertiajs/react';
import { CSVLink } from 'react-csv';

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
    created_at: string;
    updated_at: string;
};

export default function Results({ results }: { results: ResultType[] }) {
    const keysToExport: (keyof ResultType)[] = ['student', 'course', 'score'];

    const headers = keysToExport.map((key) => ({
        label: key.charAt(0).toUpperCase() + key.slice(1),
        key,
    }));

    const data = results.map((r) => ({
        student: r.student.name,
        course: r.course.name,
        score: r.score,
    }));

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <Heading className="mb-0" title="All Results" />

                <div className="space-x-2">
                    <Button asChild variant="secondary">
                        <Link href={route('result.create')}>Create Result</Link>
                    </Button>

                    <Button asChild variant="secondary">
                        <CSVLink data={data} headers={headers}>
                            Download result CSV
                        </CSVLink>
                    </Button>
                </div>
            </div>
            <Card>
                <CardContent>
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
                </CardContent>
            </Card>
        </div>
    );
}
