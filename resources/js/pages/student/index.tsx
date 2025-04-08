import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Link, router } from '@inertiajs/react';
import { CSVLink } from 'react-csv';
export type StudentType = {
    id: string;
    name: string;
    email: string;
    average_score: number;
};

export default function Students({ students }: { students: StudentType[] }) {
    const keysToExport: (keyof StudentType)[] = ['name', 'email', 'average_score'];

    const headers = keysToExport.map((key) => ({
        label: key.charAt(0).toUpperCase() + key.slice(1),
        key,
    }));

    const data = students.map((s) => Object.fromEntries(keysToExport.map((key) => [key, s[key]])));

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <Heading className="mb-0" title="All Students" />

                <div className="space-x-2">
                    <Button asChild variant="secondary">
                        <Link href={route('student.create')}>Create Student</Link>
                    </Button>

                    <Button asChild variant="secondary">
                        <CSVLink data={data} headers={headers}>
                            Download student CSV
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
                                <TableHead>Email</TableHead>
                                <TableHead className="text-right">Average Score</TableHead>
                                <TableHead className="">Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {students.map((s) => (
                                <TableRow key={s.id}>
                                    <TableCell className="font-medium">
                                        {' '}
                                        <Link href={route('student.show', s.id)} className="inline-block w-full py-1.5">
                                            {s.name}
                                        </Link>
                                    </TableCell>
                                    <TableCell>{s.email}</TableCell>
                                    <TableCell className="text-right">{s.average_score}</TableCell>
                                    <TableCell>
                                        <div className="space-x-2">
                                            <Button asChild>
                                                <Link href={route('student.edit', s.id)}>Edit</Link>
                                            </Button>

                                            <Button onClick={() => router.delete(route('student.delete', s.id))}>Delete</Button>
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
