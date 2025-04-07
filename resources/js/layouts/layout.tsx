import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Link } from '@inertiajs/react';

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="grid h-[80dvh] grid-cols-8 gap-16 p-16">
            <div className="col-span-2 flex h-full flex-col gap-4 rounded-xl border p-8">
                <Heading title="Student Management System" description="A laravel project." />
                <Separator />
                <Button asChild variant="ghost" className="w-full justify-start">
                    <Link href={route('student.index')}>Students</Link>
                </Button>

                <Button asChild variant="ghost" className="w-full justify-start">
                    <Link href={route('course.index')}>Courses</Link>
                </Button>

                <Button asChild variant="ghost" className="w-full justify-start">
                    <Link href={route('result.index')}>Results</Link>
                </Button>
            </div>
            <div className="col-span-6">{children}</div>
        </div>
    );
}
