import { Button } from '@/components/ui/button';
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
    const keysToExport: (keyof StudentType)[] = ['name', 'email'];

    const headers = keysToExport.map((key) => ({
        label: key.charAt(0).toUpperCase() + key.slice(1),
        key,
    }));

    const data = students.map((s) => Object.fromEntries(keysToExport.map((key) => [key, s[key]])));

    return (
        <>
            <Button asChild>
                <CSVLink data={data} headers={headers}>
                    Download student CSV
                </CSVLink>
            </Button>

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
                            <TableCell className="font-medium">{s.name}</TableCell>
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
            <Button asChild>
                <Link
                    href={route('student.create')}
                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                >
                    Create Student
                </Link>
            </Button>
        </>
    );
}
