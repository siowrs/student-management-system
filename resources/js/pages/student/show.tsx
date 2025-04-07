import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Link, router } from '@inertiajs/react';
import { CSVLink } from 'react-csv';
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

    const headers = [
        {
            label: 'Course',
            key: 'course',
        },
        {
            label: 'Score',
            key: 'score',
        },
        {
            label: 'Date',
            key: 'date',
        },
    ];

    const data = results.map((r) => ({
        course: r.course.name,
        score: r.score,
        date: r.created_at,
    }));

    return (
        <>
            <Heading title={student.name} />
            <div className="grid grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardDescription>Email</CardDescription>
                        <CardTitle>{student.email}</CardTitle>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader>
                        <CardDescription>Average Score</CardDescription>
                        <CardTitle>{student.average_score}</CardTitle>
                    </CardHeader>
                </Card>
                <Card className="col-span-2">
                    <CardHeader className="flex-row items-center justify-between">
                        <CardDescription>Results</CardDescription>

                        <Button asChild variant="secondary" className="">
                            <CSVLink data={data} headers={headers}>
                                Download student result
                            </CSVLink>
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <Table className="">
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
                    </CardContent>
                </Card>
            </div>
        </>
    );
}
