import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import {
    getCourseById,
    getModuleById,
} from '@/data/dummy-data';
import { dashboard } from '@/routes';
import { ArrowLeft, Play, CheckCircle2, Trophy, Gamepad2 } from 'lucide-react';
import { AIChatWidget } from '@/components/ai-assistant/ai-chat-widget';

interface ModuleContentProps {
    courseId: string;
    moduleId: string;
}

export default function ModuleContent({
    courseId,
    moduleId,
}: ModuleContentProps) {
    const course = getCourseById(courseId);
    const module = getModuleById(courseId, moduleId);

    if (!course || !module) {
        return (
            <AppLayout breadcrumbs={[]}>
                <Head title="Module Not Found" />
                <div className="flex h-full flex-1 flex-col items-center justify-center p-6">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Module not found
                    </h1>
                    <Link
                        href={`/courses/${courseId}/modules`}
                        className="mt-4 text-primary hover:text-primary/80"
                    >
                        Back to Modules
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
        {
            title: module.title,
            href: `/courses/${course.id}/modules/${module.id}`,
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`${module.title} - ${course.title}`} />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-6">
                {/* Back Button */}
                <Link
                    href={`/courses/${courseId}/modules`}
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Modules
                </Link>

                <div className="grid gap-6 lg:grid-cols-3">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Module Header */}
                        <div className="rounded-xl bg-white p-6 border border-gray-200 shadow-sm">
                            <div className="mb-4 flex items-center justify-between">
                                <div>
                                    <span className="text-sm font-semibold text-gray-500">
                                        Module {module.order}
                                    </span>
                                    <h1 className="mt-1 text-2xl font-bold text-gray-900">
                                        {module.title}
                                    </h1>
                                </div>
                                {module.completed && (
                                    <div className="flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                                        <CheckCircle2 className="h-4 w-4" />
                                        Completed
                                    </div>
                                )}
                            </div>
                            <p className="text-gray-600">{module.description}</p>
                        </div>

                        {/* Video Player */}
                        {module.videoUrl && (
                            <div className="rounded-xl bg-gray-900 aspect-video overflow-hidden">
                                <div className="flex h-full items-center justify-center">
                                    <div className="text-center">
                                        <div className="mb-4 flex justify-center">
                                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                                                <Play className="h-10 w-10 text-white" />
                                            </div>
                                        </div>
                                        <p className="text-white/80">
                                            Video Player Placeholder
                                        </p>
                                        <p className="mt-2 text-sm text-white/60">
                                            {module.videoUrl}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Lessons List */}
                        <div className="rounded-xl bg-white p-6 border border-gray-200 shadow-sm">
                            <h2 className="mb-4 text-xl font-bold text-gray-900">
                                Lessons
                            </h2>
                            <div className="space-y-2">
                                {module.lessons.map((lesson) => (
                                    <div
                                        key={lesson.id}
                                        className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2"
                                    >
                                        <div className="flex items-center gap-2">
                                            <div
                                                className={`flex h-6 w-6 items-center justify-center rounded-full ${
                                                    lesson.completed
                                                        ? 'bg-green-100 text-green-600'
                                                        : 'bg-gray-100 text-gray-500'
                                                }`}
                                            >
                                                {lesson.completed ? (
                                                    <CheckCircle2 className="h-4 w-4" />
                                                ) : (
                                                    <Play className="h-4 w-4" />
                                                )}
                                            </div>
                                            <div className="text-sm font-semibold text-gray-800">
                                                {lesson.title}
                                            </div>
                                        </div>
                                        <span className="text-xs font-semibold text-gray-500">
                                            {lesson.duration}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Module Content */}
                        <div className="rounded-xl bg-white p-6 border border-gray-200 shadow-sm">
                            <h2 className="mb-4 text-xl font-bold text-gray-900">
                                Learning Content
                            </h2>
                            <div className="prose max-w-none text-gray-700">
                                <p>{module.content}</p>
                                <p className="mt-4">
                                    This is a comprehensive module covering all
                                    aspects of the topic. You'll learn through
                                    interactive content, videos, and hands-on
                                    exercises.
                                </p>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                            {module.hasQuiz && (
                                <Link
                                    href={`/courses/${courseId}/modules/${moduleId}/quiz`}
                                    className="flex-1 rounded-lg bg-gradient-primary px-6 py-3 text-center text-base font-semibold text-white transition-all hover:opacity-90"
                                >
                                    <div className="flex items-center justify-center gap-2">
                                        <Gamepad2 className="h-5 w-5" />
                                        Play Game ({module.points} points)
                                    </div>
                                </Link>
                            )}
                            <Link
                                href={`/courses/${courseId}/modules`}
                                className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 transition-all hover:bg-gray-50"
                            >
                                Back to Modules
                            </Link>
                        </div>
                    </div>

                    {/* Sidebar - AI Assistant */}
                    <div className="lg:col-span-1">
                        <AIChatWidget moduleId={moduleId} />
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

