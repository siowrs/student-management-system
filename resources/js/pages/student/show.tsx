// import { Button } from '@/components/ui/button';
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
// import { Link, router } from '@inertiajs/react';
// import { StudentType } from '.';

// export default function Student({ student }: { student: StudentType }) {
//     console.log(student);
//     const { results } = student;
//     // console.log(results)
//     return (
//         <>
//             <Table>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead className="">Course</TableHead>
//                         <TableHead className="">Score</TableHead>
//                         <TableHead className="">Date</TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {results.map((r) => (
//                         <TableRow key={r.id}>
//                             <TableCell className="font-medium">{c.name}</TableCell>
//                             <TableCell>
//                                 <div className="space-x-2">
//                                     <Button asChild>
//                                         <Link href={route('course.edit', c.id)}>Edit</Link>
//                                     </Button>

//                                     <Button onClick={() => router.delete(route('course.delete', c.id))}>Delete</Button>
//                                 </div>
//                             </TableCell>
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>

//             <Button asChild>
//                 <Link
//                     href={route('course.create')}
//                     className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
//                 >
//                     Create Course
//                 </Link>
//             </Button>
//         </>
//     );
// }
