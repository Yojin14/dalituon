import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { getCourseById, dummyCourses } from '@/data/dummy-data';
import { dashboard } from '@/routes';
import { BookOpen, Clock, User, CheckCircle2, ArrowLeft } from 'lucide-react';
import { ProgressBar } from '@/components/gamification/progress-bar';
import { useParams } from 'react-router-dom';

export default function CourseShow() {
    const { id } = useParams<{ id: string }>();
    const course = getCourseById(id || '');

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
    ];

    const levelColors = {
        Beginner: 'bg-green-100 text-green-700',
        Intermediate: 'bg-yellow-100 text-yellow-700',
        Advanced: 'bg-red-100 text-red-700',
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={course.title} />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-6">
                {/* Back Button */}
                <Link
                    href="/courses"
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Courses
                </Link>

                {/* Course Header */}
                <div className="rounded-2xl bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 p-8 border border-purple-100">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div>
                            <div className="mb-4 flex items-center gap-3">
                                <span
                                    className={`rounded-full px-4 py-1.5 text-sm font-semibold ${levelColors[course.level]}`}
                                >
                                    {course.level}
                                </span>
                                {course.enrolled && (
                                    <span className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1.5 text-sm font-semibold text-green-700">
                                        <CheckCircle2 className="h-4 w-4" />
                                        Enrolled
                                    </span>
                                )}
                            </div>
                            <h1 className="mb-4 text-4xl font-bold text-gray-900">
                                {course.title}
                            </h1>
                            <p className="mb-6 text-lg text-gray-700">
                                {course.description}
                            </p>

                            {/* Course Stats */}
                            <div className="mb-6 flex flex-wrap gap-6">
                                <div className="flex items-center gap-2">
                                    <Clock className="h-5 w-5 text-gray-500" />
                                    <span className="text-sm text-gray-600">
                                        {course.duration}
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BookOpen className="h-5 w-5 text-gray-500" />
                                    <span className="text-sm text-gray-600">
                                        {course.totalModules} Modules
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <User className="h-5 w-5 text-gray-500" />
                                    <span className="text-sm text-gray-600">
                                        {course.instructor}
                                    </span>
                                </div>
                            </div>

                            {/* Progress */}
                            {course.enrolled && (
                                <div className="mb-6">
                                    <ProgressBar
                                        progress={course.progress}
                                        label="Course Progress"
                                        showPercentage={true}
                                    />
                                </div>
                            )}

                            {/* Action Buttons */}
                            <div className="flex gap-3">
                                {course.enrolled ? (
                                    <Link
                                        href={`/courses/${course.id}/modules`}
                                        className="rounded-lg bg-gradient-primary px-6 py-3 text-base font-semibold text-white transition-all hover:opacity-90"
                                    >
                                        Continue Learning
                                    </Link>
                                ) : (
                                    <button
                                        onClick={() =>
                                            alert(
                                                'Enrolling in course. This is a demo!',
                                            )
                                        }
                                        className="rounded-lg bg-gradient-primary px-6 py-3 text-base font-semibold text-white transition-all hover:opacity-90"
                                    >
                                        Enroll Now
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Course Thumbnail */}
                        <div className="flex items-center justify-center">
                            <div className="relative h-64 w-full overflow-hidden rounded-xl bg-gradient-to-br from-purple-200 via-blue-200 to-teal-200">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <BookOpen className="h-32 w-32 text-purple-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Course Details */}
                <div className="grid gap-6 md:grid-cols-3">
                    <div className="rounded-xl bg-white p-6 border border-gray-200 shadow-sm">
                        <h3 className="mb-3 text-lg font-semibold text-gray-900">
                            What You'll Learn
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                                <span>
                                    Understand fundamental scientific
                                    principles
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                                <span>
                                    Apply scientific methods to real-world
                                    problems
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                                <span>
                                    Analyze and interpret scientific data
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-500" />
                                <span>
                                    Develop critical thinking skills
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div className="rounded-xl bg-white p-6 border border-gray-200 shadow-sm">
                        <h3 className="mb-3 text-lg font-semibold text-gray-900">
                            Course Structure
                        </h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Modules</span>
                                <span className="font-semibold text-gray-900">
                                    {course.totalModules}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Duration</span>
                                <span className="font-semibold text-gray-900">
                                    {course.duration}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Level</span>
                                <span className="font-semibold text-gray-900">
                                    {course.level}
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-gray-600">Category</span>
                                <span className="font-semibold text-gray-900">
                                    {course.category}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl bg-white p-6 border border-gray-200 shadow-sm">
                        <h3 className="mb-3 text-lg font-semibold text-gray-900">
                            Instructor
                        </h3>
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-white">
                                <User className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="font-semibold text-gray-900">
                                    {course.instructor}
                                </p>
                                <p className="text-sm text-gray-600">
                                    Expert Instructor
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

