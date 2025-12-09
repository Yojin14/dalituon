import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { dummyCourses } from '@/data/dummy-data';
import { CourseGrid } from '@/components/courses/course-grid';
import { dashboard } from '@/routes';
import { BookOpen } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
    {
        title: 'My Courses',
        href: '/my-courses',
    },
];

export default function MyCourses() {
    const [courses] = useState(dummyCourses);
    const enrolledCourses = courses.filter((c) => c.enrolled);

    const handleEnroll = (courseId: string) => {
        alert(`Enrolling in course ${courseId}. This is a demo!`);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="My Courses" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-6">
                <div className="mb-2">
                    <h1 className="text-3xl font-bold text-gray-900">
                        My Courses
                    </h1>
                    <p className="mt-1 text-gray-600">
                        Continue your learning journey
                    </p>
                </div>

                {enrolledCourses.length > 0 ? (
                    <CourseGrid
                        courses={enrolledCourses}
                        onEnroll={handleEnroll}
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-12">
                        <BookOpen className="mb-4 h-16 w-16 text-gray-400" />
                        <h3 className="mb-2 text-lg font-semibold text-gray-900">
                            No enrolled courses yet
                        </h3>
                        <p className="mb-4 text-gray-600">
                            Start by enrolling in a course
                        </p>
                        <Link
                            href="/courses"
                            className="rounded-lg bg-gradient-primary px-6 py-2 text-sm font-semibold text-white transition-all hover:opacity-90"
                        >
                            Browse Courses
                        </Link>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}

