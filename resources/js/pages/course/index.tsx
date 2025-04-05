import { Button } from '@/components/ui/button';
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
        <>
            <Button asChild>
                <CSVLink data={data} headers={headers}>
                    Download result CSV
                </CSVLink>
            </Button>

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

            <Button asChild>
                <Link
                    href={route('course.create')}
                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                >
                    Create Course
                </Link>
            </Button>
        </>
    );
}
