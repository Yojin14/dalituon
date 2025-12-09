import { type Course } from '@/types/course';
import { BookOpen, Clock, TrendingUp, Lock, CheckCircle2 } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { ProgressBar } from '@/components/gamification/progress-bar';

interface CourseCardProps {
    course: Course;
    onEnroll?: (courseId: string) => void;
}

export function CourseCard({ course, onEnroll }: CourseCardProps) {
    const levelColors = {
        Beginner: 'bg-green-100 text-green-700',
        Intermediate: 'bg-yellow-100 text-yellow-700',
        Advanced: 'bg-red-100 text-red-700',
    };

    return (
        <div className="group relative overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            {/* Thumbnail */}
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-100 via-blue-100 to-teal-100">
                <div className="absolute inset-0 flex items-center justify-center">
                    <BookOpen className="h-20 w-20 text-purple-300" />
                </div>
                {course.enrolled && (
                    <div className="absolute top-3 right-3">
                        <div className="flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-green-600 backdrop-blur-sm">
                            <CheckCircle2 className="h-3 w-3" />
                            Enrolled
                        </div>
                    </div>
                )}
                <div className="absolute bottom-3 left-3">
                    <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${levelColors[course.level]}`}
                    >
                        {course.level}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900 line-clamp-2">
                    {course.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600 line-clamp-2">
                    {course.description}
                </p>

                {/* Stats */}
                <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{course.totalModules} modules</span>
                    </div>
                </div>

                {/* Progress */}
                {course.enrolled && (
                    <div className="mb-4">
                        <ProgressBar
                            progress={course.progress}
                            showPercentage={true}
                            size="sm"
                        />
                    </div>
                )}

                {/* Action Button */}
                <div className="flex items-center gap-2">
                    {course.enrolled ? (
                        <Link
                            href={`/courses/${course.id}/modules`}
                            className="flex-1 rounded-lg bg-gradient-primary px-4 py-2.5 text-center text-sm font-semibold text-white transition-all hover:opacity-90"
                        >
                            Continue Learning
                        </Link>
                    ) : (
                        <button
                            onClick={() => onEnroll?.(course.id)}
                            className="flex-1 rounded-lg bg-gradient-primary px-4 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90"
                        >
                            Enroll Now
                        </button>
                    )}
                    <Link
                        href={`/courses/${course.id}`}
                        className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-50"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}

