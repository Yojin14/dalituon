import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { getCourseById, getModuleById } from '@/data/dummy-data';
import { dashboard } from '@/routes';
import {
    ArrowLeft,
    Trophy,
    CheckCircle2,
    XCircle,
    Gamepad2,
    Sparkles,
    Flame,
    Heart,
    Timer,
} from 'lucide-react';
import { useEffect, useState } from 'react';
import { PointsDisplay } from '@/components/gamification/points-display';
import { MatchingGame } from '@/components/games/matching-game';
import { OrderingGame } from '@/components/games/ordering-game';

interface QuizProps {
    courseId: string;
    moduleId: string;
}

interface QuizQuestion {
    id: string;
    question: string;
    options: string[];
    correctAnswer: number;
    explanation: string;
}

const dummyQuizQuestions: QuizQuestion[] = [
    {
        id: '1',
        question:
            'What is the primary purpose of the scientific method?',
        options: [
            'To prove hypotheses are correct',
            'To systematically investigate and understand natural phenomena',
            'To make scientific discoveries quickly',
            'To replace all other methods of inquiry',
        ],
        correctAnswer: 1,
        explanation:
            'The scientific method is a systematic approach to understanding natural phenomena through observation, hypothesis formation, experimentation, and analysis.',
    },
    {
        id: '2',
        question:
            'Which of the following is NOT a step in the scientific method?',
        options: [
            'Observation',
            'Hypothesis',
            'Conclusion',
            'Assumption',
        ],
        correctAnswer: 3,
        explanation:
            'Assumption is not a formal step in the scientific method. The method relies on evidence-based conclusions rather than assumptions.',
    },
    {
        id: '3',
        question:
            'What role does technology play in modern scientific research?',
        options: [
            'It replaces the need for human scientists',
            'It enhances data collection, analysis, and communication',
            'It makes research less accurate',
            'It is only used in computer science',
        ],
        correctAnswer: 1,
        explanation:
            'Technology enhances scientific research by improving data collection methods, enabling complex analysis, and facilitating communication among researchers.',
    },
];

export default function Quiz({ courseId, moduleId }: QuizProps) {
    const course = getCourseById(courseId);
    const module = getModuleById(courseId, moduleId);

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<
        Record<string, number>
    >({});
    const [showResults, setShowResults] = useState(false);
    const [earnedPoints, setEarnedPoints] = useState(0);

    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [bestStreak, setBestStreak] = useState(0);
    const [hearts, setHearts] = useState(3);
    const [timer, setTimer] = useState(20);
    const [isLocked, setIsLocked] = useState(false);

    if (!course || !module) {
        return (
            <AppLayout breadcrumbs={[]}>
                <Head title="Game Not Found" />
                <div className="flex h-full flex-1 flex-col items-center justify-center p-6">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Game not found
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
            title: 'Game',
            href: `/courses/${course.id}/modules/${module.id}/quiz`,
        },
    ];

    const gameType = module.gameType || 'mcq';
    const question = dummyQuizQuestions[currentQuestion];
    const totalQuestions = dummyQuizQuestions.length;
    const progress = ((currentQuestion + 1) / totalQuestions) * 100;

    useEffect(() => {
        if (showResults) return;
        setTimer(20);
        const interval = setInterval(() => {
            setTimer((prev) => {
                if (prev <= 1) {
                    clearInterval(interval);
                    handleTimeout();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(interval);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentQuestion, showResults, gameType]);

    const handleAnswerSelect = (answerIndex: number) => {
        if (isLocked || showResults) return;
        setIsLocked(true);

        const isCorrect = answerIndex === question.correctAnswer;
        setSelectedAnswers({
            ...selectedAnswers,
            [question.id]: answerIndex,
        });

        if (isCorrect) {
            const basePoints = 50;
            const streakBonus = streak * 10;
            const timeBonus = Math.max(timer - 5, 0) * 2;
            const gained = basePoints + streakBonus + timeBonus;
            setScore((prev) => prev + gained);
            setEarnedPoints((prev) => prev + gained);
            setStreak((prev) => {
                const next = prev + 1;
                setBestStreak((b) => Math.max(b, next));
                return next;
            });
        } else {
            setStreak(0);
            setHearts((prev) => Math.max(prev - 1, 0));
        }

        setTimeout(() => {
            if (hearts - (isCorrect ? 0 : 1) <= 0) {
                calculateResults();
            } else {
                handleNext();
            }
            setIsLocked(false);
        }, 700);
    };

    const handleNext = () => {
        if (currentQuestion < totalQuestions - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            calculateResults();
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleTimeout = () => {
        if (showResults) return;
        setHearts((prev) => Math.max(prev - 1, 0));
        setStreak(0);
        if (hearts - 1 <= 0) {
            calculateResults();
        } else if (currentQuestion < totalQuestions - 1) {
            setCurrentQuestion((q) => q + 1);
        } else {
            calculateResults();
        }
    };

    const calculateResults = () => {
        let correct = 0;
        dummyQuizQuestions.forEach((q) => {
            if (selectedAnswers[q.id] === q.correctAnswer) {
                correct++;
            }
        });
        const percentage = (correct / totalQuestions) * 100;
        const points = Math.max(
            earnedPoints,
            Math.round((percentage / 100) * module.points),
        );
        setEarnedPoints(points);
        setShowResults(true);
    };

    if (showResults) {
        const correctAnswers = dummyQuizQuestions.filter(
            (q) => selectedAnswers[q.id] === q.correctAnswer,
        ).length;
        const percentage = (correctAnswers / totalQuestions) * 100;

        return (
            <AppLayout breadcrumbs={breadcrumbs}>
                <Head title={`Game Results - ${module.title}`} />
                <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-6">
                    <div className="mx-auto w-full max-w-2xl">
                        {/* Results Card */}
                        <div className="rounded-2xl bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 p-8 border border-purple-100 text-center">
                            <div className="mb-6 flex justify-center">
                                {percentage >= 70 ? (
                                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100">
                                        <CheckCircle2 className="h-12 w-12 text-green-600" />
                                    </div>
                                ) : (
                                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-red-100">
                                        <XCircle className="h-12 w-12 text-red-600" />
                                    </div>
                                )}
                            </div>
                            <h1 className="mb-2 text-3xl font-bold text-gray-900">
                                Game Complete!
                            </h1>
                            <p className="mb-6 text-lg text-gray-600">
                                You scored {correctAnswers} out of{' '}
                                {totalQuestions} questions
                            </p>
                            <div className="mb-6 flex items-center justify-center gap-6">
                                <div className="text-center">
                                    <p className="text-4xl font-bold text-gray-900">
                                        {Math.round(percentage)}%
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Score
                                    </p>
                                </div>
                                <div className="h-12 w-px bg-gray-300" />
                                <PointsDisplay
                                    points={earnedPoints}
                                    size="lg"
                                    showLabel={true}
                                />
                                <div className="text-center">
                                    <p className="text-2xl font-bold text-gray-900">
                                        Best Streak: {bestStreak}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Longest combo
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Link
                                    href={`/courses/${courseId}/modules/${moduleId}`}
                                    className="flex-1 rounded-lg bg-gradient-primary px-6 py-3 text-base font-semibold text-white transition-all hover:opacity-90"
                                >
                                    Review Module
                                </Link>
                                <Link
                                    href={`/courses/${courseId}/modules`}
                                    className="rounded-lg border border-gray-300 px-6 py-3 text-base font-semibold text-gray-700 transition-all hover:bg-gray-50"
                                >
                                    Back to Modules
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout>
        );
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={`Game Challenge - ${module.title}`} />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-6 bg-gradient-to-b from-purple-100 via-white to-white">
                <Link
                    href={`/courses/${courseId}/modules/${moduleId}`}
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Module
                </Link>

                <div className="mx-auto w-full max-w-3xl">
                    {/* Game HUD */}
                    <div className="mb-6">
                        <div className="grid gap-3 md:grid-cols-4">
                            <div className="rounded-xl border border-purple-100 bg-gradient-to-br from-white to-purple-50/70 px-4 py-3 flex items-center gap-3 shadow-sm">
                                <Gamepad2 className="h-5 w-5 text-primary" />
                                <div>
                                    <p className="text-xs text-gray-500">
                                        Score
                                    </p>
                                    <p className="text-lg font-bold text-gray-900">
                                        {score}
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-xl border border-orange-100 bg-gradient-to-br from-white to-orange-50/60 px-4 py-3 flex items-center gap-3 shadow-sm">
                                <Flame className="h-5 w-5 text-orange-500" />
                                <div>
                                    <p className="text-xs text-gray-500">
                                        Streak
                                    </p>
                                    <p className="text-lg font-bold text-gray-900">
                                        {streak}
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-xl border border-red-100 bg-gradient-to-br from-white to-red-50/60 px-4 py-3 flex items-center gap-3 shadow-sm">
                                <div className="flex items-center gap-1">
                                    {[...Array(3)].map((_, idx) => (
                                        <Heart
                                            key={idx}
                                            className={`h-5 w-5 ${
                                                idx < hearts
                                                    ? 'text-red-500'
                                                    : 'text-gray-300'
                                            }`}
                                            fill={
                                                idx < hearts
                                                    ? 'currentColor'
                                                    : 'none'
                                            }
                                        />
                                    ))}
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500">
                                        Lives
                                    </p>
                                    <p className="text-lg font-bold text-gray-900">
                                        {hearts}
                                    </p>
                                </div>
                            </div>
                            <div className="rounded-xl border border-blue-100 bg-gradient-to-br from-white to-blue-50/60 px-4 py-3 flex items-center gap-3 shadow-sm">
                                <Timer className="h-5 w-5 text-blue-500" />
                                <div>
                                    <p className="text-xs text-gray-500">
                                        Time Left
                                    </p>
                                    <p className="text-lg font-bold text-gray-900">
                                        {timer}s
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="mb-2 flex items-center justify-between">
                                <span className="text-sm font-medium text-gray-700">
                                    Challenge {currentQuestion + 1} of{' '}
                                    {totalQuestions}
                                </span>
                                <span className="text-sm font-medium text-gray-700">
                                    {Math.round(progress)}%
                                </span>
                            </div>
                            <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                                <div
                                    className="h-full bg-gradient-primary transition-all duration-300"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Game Card */}
                    <div className="mb-6 rounded-2xl border border-purple-100 bg-white/90 p-8 shadow-xl shadow-purple-100/60">
                        <div className="mb-6 flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary shadow-md shadow-purple-200/70">
                                <Sparkles className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold text-gray-600">
                                    Game Challenge
                                </h2>
                                <p className="text-sm text-gray-500">
                                    {module.points} points available
                                </p>
                            </div>
                        </div>

                        {gameType === 'mcq' && (
                            <>
                                <h3 className="mb-6 text-xl font-bold text-gray-900">
                                    {question.question}
                                </h3>
                                <div className="space-y-3">
                                    {question.options.map((option, index) => {
                                        const isSelected =
                                            selectedAnswers[question.id] === index;
                                        return (
                                            <button
                                                key={index}
                                                onClick={() =>
                                                    handleAnswerSelect(index)
                                                }
                                                className={`w-full rounded-lg border-2 p-4 text-left transition-all ${
                                                    isSelected
                                                        ? 'border-primary bg-purple-50'
                                                        : 'border-gray-200 bg-white hover:border-primary/40 hover:shadow-md'
                                                } ${isLocked ? 'opacity-60 cursor-not-allowed' : ''}`}
                                                disabled={isLocked}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <div
                                                        className={`flex h-6 w-6 items-center justify-center rounded-full border-2 ${
                                                            isSelected
                                                                ? 'border-primary bg-primary'
                                                                : 'border-gray-300 bg-white'
                                                        }`}
                                                    >
                                                        {isSelected && (
                                                            <div className="h-2 w-2 rounded-full bg-white" />
                                                        )}
                                                    </div>
                                                    <span className="font-medium text-gray-900">
                                                        {option}
                                                    </span>
                                                </div>
                                            </button>
                                        );
                                    })}
                                </div>
                            </>
                        )}

                        {gameType === 'matching' && module.matchingPairs && (
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Match the concept to its impact
                                </h3>
                                <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm text-gray-600">
                                    Earn points for each correct pair. Complete all to win!
                                </div>
                                <MatchingGame
                                    pairs={module.matchingPairs}
                                    onComplete={calculateResults}
                                    disabled={showResults}
                                />
                            </div>
                        )}

                        {gameType === 'ordering' && module.orderingItems && (
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Arrange the steps in the correct order
                                </h3>
                                <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm text-gray-600">
                                    Drag the cards to get the right sequence.
                                </div>
                                <OrderingGame
                                    items={module.orderingItems}
                                    onComplete={calculateResults}
                                    disabled={showResults}
                                />
                            </div>
                        )}
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between">
                        <button
                            onClick={handlePrevious}
                            disabled={currentQuestion === 0 || gameType !== 'mcq'}
                            className="rounded-lg border border-gray-300 px-6 py-2.5 text-base font-semibold text-gray-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                        >
                            Previous
                        </button>
                        {gameType === 'mcq' ? (
                            <button
                                onClick={handleNext}
                                disabled={!selectedAnswers[question.id]}
                                className="rounded-lg bg-gradient-primary px-6 py-2.5 text-base font-semibold text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90"
                            >
                                {currentQuestion === totalQuestions - 1
                                    ? 'Submit Game'
                                    : 'Next Challenge'}
                            </button>
                        ) : (
                            <button
                                onClick={calculateResults}
                                className="rounded-lg bg-gradient-primary px-6 py-2.5 text-base font-semibold text-white transition-all hover:opacity-90"
                            >
                                Submit Game
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}