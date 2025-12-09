import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { useState } from 'react';
import {
    dummyUserStats,
    dummyCourses,
    dummyLeaderboard,
} from '@/data/dummy-data';
import { PointsDisplay } from '@/components/gamification/points-display';
import { LevelIndicator } from '@/components/gamification/level-indicator';
import { StreakCounter } from '@/components/gamification/streak-counter';
import { BadgeDisplay } from '@/components/gamification/badge-display';
import { CourseGrid } from '@/components/courses/course-grid';
import { BookOpen, Trophy, TrendingUp } from 'lucide-react';
import { Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

export default function Dashboard() {
    const [userStats] = useState(dummyUserStats);
    const [courses] = useState(dummyCourses);
    const enrolledCourses = courses.filter((c) => c.enrolled);
    const availableCourses = courses.filter((c) => !c.enrolled);

    const handleEnroll = (courseId: string) => {
        // In a real app, this would make an API call
        alert(`Enrolling in course ${courseId}. This is a demo!`);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-6">
                {/* Welcome Section */}
                <div className="mb-2">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Welcome back! 👋
                    </h1>
                    <p className="mt-1 text-gray-600">
                        Continue your learning journey
                    </p>
                </div>

                {/* Gamification Stats */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-xl bg-white p-4 border border-gray-200 shadow-sm">
                        <PointsDisplay
                            points={userStats.totalPoints}
                            size="lg"
                            showLabel={true}
                        />
                    </div>
                    <div className="rounded-xl bg-white p-4 border border-gray-200 shadow-sm">
                        <LevelIndicator
                            level={userStats.level}
                            currentPoints={userStats.currentLevelPoints}
                            nextLevelPoints={userStats.nextLevelPoints}
                        />
                    </div>
                    <div className="rounded-xl bg-white p-4 border border-gray-200 shadow-sm">
                        <StreakCounter streak={userStats.streak} />
                    </div>
                    <div className="rounded-xl bg-white p-4 border border-gray-200 shadow-sm">
                        <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-500">
                                <Trophy className="h-6 w-6 text-white" />
                            </div>
                            <div>
                                <p className="text-sm text-gray-600">
                                    Courses Completed
                                </p>
                                <p className="text-2xl font-bold text-gray-900">
                                    {userStats.coursesCompleted}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Recent Badges */}
                <div className="rounded-xl bg-white p-6 border border-gray-200 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                        <h2 className="text-xl font-bold text-gray-900">
                            Your Badges
                        </h2>
                        <Link
                            href="/badges"
                            className="text-sm font-medium text-primary hover:text-primary/80"
                        >
                            View All
                        </Link>
                    </div>
                    <div className="flex gap-4 overflow-x-auto pb-2">
                        {userStats.badges.map((badge) => (
                            <BadgeDisplay
                                key={badge.id}
                                badge={badge}
                                size="md"
                            />
                        ))}
                    </div>
                </div>

                {/* Leaderboard Preview */}
                <div className="rounded-2xl bg-white p-6 border border-gray-200 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">
                                Leaderboards
                            </h2>
                            <p className="text-sm text-gray-600">
                                Top learners this week
                            </p>
                        </div>
                        <Link
                            href="/leaderboards"
                            className="text-sm font-medium text-primary hover:text-primary/80"
                        >
                            View All
                        </Link>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {dummyLeaderboard.slice(0, 5).map((entry) => (
                            <div
                                key={entry.id}
                                className="flex items-center justify-between py-3"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-semibold text-gray-500 w-6 text-center">
                                        #{entry.rank}
                                    </span>
                                    <div
                                        className={`flex h-9 w-9 items-center justify-center rounded-full text-white text-sm font-semibold ${entry.avatarColor || 'bg-gradient-to-br from-purple-500 to-blue-500'}`}
                                    >
                                        {entry.name.slice(0, 1)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">
                                            {entry.name}
                                        </p>
                                        <p className="text-xs text-gray-600">
                                            {entry.streak} day streak •{' '}
                                            {entry.points.toLocaleString()} pts
                                        </p>
                                    </div>
                                </div>
                                <span className="text-xs font-semibold text-gray-500">
                                    {entry.coursesCompleted} courses
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Enrolled Courses */}
                {enrolledCourses.length > 0 && (
                    <div>
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Continue Learning
                            </h2>
                            <Link
                                href="/my-courses"
                                className="text-sm font-medium text-primary hover:text-primary/80"
                            >
                                View All Courses
                            </Link>
                        </div>
                        <CourseGrid
                            courses={enrolledCourses}
                            onEnroll={handleEnroll}
                        />
                    </div>
                )}

                {/* Available Courses */}
                {availableCourses.length > 0 && (
                    <div>
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-2xl font-bold text-gray-900">
                                Available Courses
                            </h2>
                            <Link
                                href="/courses"
                                className="text-sm font-medium text-primary hover:text-primary/80"
                            >
                                Browse All
                            </Link>
                        </div>
                        <CourseGrid
                            courses={availableCourses}
                            onEnroll={handleEnroll}
                        />
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
