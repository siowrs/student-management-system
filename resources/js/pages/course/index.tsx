import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Link, router } from '@inertiajs/react';
import { CSVLink } from 'react-csv';

export type CourseType = {
    id: string;
    name: string;
    average_score: string;
};

export default function Courses({ courses }: { courses: CourseType[] }) {
    const keysToExport: (keyof CourseType)[] = ['name', 'average_score'];

    const headers = keysToExport.map((key) => ({
        label: key.charAt(0).toUpperCase() + key.slice(1),
        key,
    }));

    const data = courses.map((c) => Object.fromEntries(keysToExport.map((key) => [key, c[key]])));

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <Heading className="mb-0" title="All Courses" />

                <div className="space-x-2">
                    <Button asChild variant="secondary">
                        <Link href={route('course.create')}>Create Course</Link>
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
                                <TableHead className="">Name</TableHead>
                                <TableHead className="">Average Score</TableHead>
                                <TableHead className="">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {courses.map((c) => (
                                <TableRow key={c.id}>
                                    <TableCell className="font-medium">{c.name}</TableCell>
                                    <TableCell className="">{c.average_score}</TableCell>

                                    <TableCell>
                                        <div className="space-x-2">
                                            <Button asChild>
                                                <Link href={route('course.edit', c.id)}>Edit</Link>
                                            </Button>

                                            <Button onClick={() => router.delete(route('course.delete', c.id))}>Delete</Button>
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
