import { type Module } from '@/types/course';
import {
    Lock,
    CheckCircle2,
    Play,
    Clock,
    Trophy,
    Gamepad2,
    Check,
} from 'lucide-react';
import { Link } from '@inertiajs/react';
import { ProgressBar } from '@/components/gamification/progress-bar';

interface ModuleCardProps {
    module: Module;
    courseId: string;
}

export function ModuleCard({ module, courseId }: ModuleCardProps) {
    const progress = module.completed ? 100 : 0;

    return (
        <div
            className={`group relative overflow-hidden rounded-2xl border-2 transition-all ${
                module.unlocked
                    ? 'border-gray-200 bg-white hover:border-primary hover:shadow-lg'
                    : 'border-gray-200 bg-gray-50 opacity-60'
            }`}
        >
            {module.completed && (
                <div className="absolute right-3 top-3 z-10">
                    <div className="flex items-center gap-1 rounded-full bg-green-100 px-3 py-1.5 text-xs font-semibold text-green-700">
                        <CheckCircle2 className="h-3 w-3" />
                        Completed
                    </div>
                </div>

            )}

            <div className="p-6">
                <div className="mb-4 flex items-start justify-between">
                    <div className="flex-1">
                        <div className="mb-2 flex items-center gap-3">
                            <div
                                className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                                    module.unlocked
                                        ? 'bg-gradient-primary text-white'
                                        : 'bg-gray-300 text-gray-500'
                                }`}
                            >
                                {module.unlocked ? (
                                    <Play className="h-5 w-5" />
                                ) : (
                                    <Lock className="h-5 w-5" />
                                )}
                            </div>
                            <div>
                                <span className="text-xs font-semibold text-gray-500">
                                Module {module.order}
                                </span>
                            </div>
                        </div>
                        <h3 className="mb-2 text-lg font-bold text-gray-900">
                            {module.title}
                        </h3>
                        <p className="mb-4 text-sm text-gray-600">
                            {module.description}
                        </p>
                    </div>
                </div>

            {/* Lessons */}
            <div className="mb-4 space-y-2">
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
                                    <Check className="h-4 w-4" />
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

                <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{module.duration}</span>
                    </div>
                    {module.hasQuiz && (
                        <div className="flex items-center gap-1">
                            <Trophy className="h-4 w-4" />
                            <span>{module.points} points</span>
                        </div>
                    )}
                </div>

                {module.unlocked && (
                    <div className="mb-4">
                        <ProgressBar
                            progress={progress}
                            size="sm"
                            showPercentage={false}
                        />
                    </div>
                )}

                <div className="flex gap-2">
                    {module.unlocked ? (
                        <Link
                            href={`/courses/${courseId}/modules/${module.id}`}
                            className="flex-1 rounded-lg bg-gradient-primary px-4 py-2.5 text-center text-sm font-semibold text-white transition-all hover:opacity-90"
                        >
                            {module.completed ? 'Review' : 'Start Learning'}
                        </Link>
                    ) : (
                        <button
                            disabled
                            className="flex-1 rounded-lg bg-gray-200 px-4 py-2.5 text-center text-sm font-semibold text-gray-400 cursor-not-allowed"
                        >
                            Locked
                        </button>
                    )}
                    {module.hasQuiz && module.unlocked && (
                        <Link
                            href={`/courses/${courseId}/modules/${module.id}/quiz`}
                            className="rounded-lg border border-gray-300 px-4 py-2.5 text-sm font-semibold text-gray-700 transition-all hover:bg-gray-50"
                        >
                            <div className="flex items-center gap-2">
                                <Gamepad2 className="h-4 w-4" />
                                Play Game
                            </div>
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

