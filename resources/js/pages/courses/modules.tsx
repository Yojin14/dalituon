import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import {
    getCourseById,
    getModulesByCourseId,
} from '@/data/dummy-data';
import { dashboard } from '@/routes';
import { ModuleCard } from '@/components/modules/module-card';
import { ArrowLeft, BookOpen } from 'lucide-react';
import { ProgressBar } from '@/components/gamification/progress-bar';

interface CourseModulesProps {
    courseId: string;
}

export default function CourseModules({ courseId }: CourseModulesProps) {
    const course = getCourseById(courseId);
    const modules = getModulesByCourseId(courseId);

    if (!course) {
        return (
            <AppLayout breadcrumbs={[]}>
                <Head title="Course Not Found" />
                <div className="flex h-full flex-1 flex-col items-center justify-center p-6">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Course not found
                    </h1>
                    <Link
                        href="/courses"
                        className="mt-4 text-primary hover:text-primary/80"
                    >
                        Back to Courses
                    </Link>
                </div>
            </AppLayout>
        );
    }

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Dashboard',
            href: dashboard().url,
        },
        {
            title: 'Courses',
            href: '/courses',
        },
        {
            title: course.title,
            href: `/courses/${course.id}`,
        },
        {
            title: 'Modules',
            href: `/courses/${course.id}/modules`,
        },
    ];

    const completedModules = modules.filter((m) => m.completed).length;
    const totalProgress =
        modules.length > 0
            ? (completedModules / modules.length) * 100
            : 0;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`${course.title} - Modules`} />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-6">
                {/* Back Button */}
                <Link
                    href={`/courses/${course.id}`}
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Course
                </Link>

                {/* Course Header */}
                <div className="rounded-2xl bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 p-6 border border-purple-100">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary">
                            <BookOpen className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                {course.title}
                            </h1>
                            <p className="text-sm text-gray-600">
                                {completedModules} of {modules.length} modules
                                completed
                            </p>
                        </div>
                    </div>
                    <ProgressBar
                        progress={totalProgress}
                        label="Overall Progress"
                        showPercentage={true}
                    />
                </div>

                {/* Modules List */}
                <div className="space-y-4">
                    <h2 className="text-xl font-bold text-gray-900">
                        Course Modules
                    </h2>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                        {modules.map((module) => (
                            <ModuleCard
                                key={module.id}
                                module={module}
                                courseId={courseId}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

