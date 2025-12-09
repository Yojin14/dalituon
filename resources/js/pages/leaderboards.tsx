import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { dummyLeaderboard } from '@/data/dummy-data';
import { dashboard } from '@/routes';
import { Trophy, Flame } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
    {
        title: 'Leaderboards',
        href: '/leaderboards',
    },
];

export default function LeaderboardsPage() {
    const topThree = dummyLeaderboard.slice(0, 3);
    const others = dummyLeaderboard.slice(3);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Leaderboards" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">
                            Leaderboards
                        </h1>
                        <p className="mt-1 text-gray-600">
                            See who’s leading the learning journey this week
                        </p>
                    </div>
                </div>

                {/* Podium */}
                <div className="grid gap-4 sm:grid-cols-3">
                    {topThree.map((entry, idx) => (
                        <div
                            key={entry.id}
                            className="relative overflow-hidden rounded-2xl border border-purple-100 bg-white/90 p-4 shadow-lg"
                        >
                            <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-purple-100/80 to-transparent" />
                            <div className="relative flex flex-col items-center gap-2 py-4">
                                <div
                                    className={`flex h-14 w-14 items-center justify-center rounded-full text-white shadow-md ${entry.avatarColor || 'bg-gradient-to-br from-purple-500 to-blue-500'}`}
                                >
                                    <Trophy className="h-7 w-7" />
                                </div>
                                <p className="text-sm font-semibold text-gray-700">
                                    #{entry.rank}
                                </p>
                                <p className="text-lg font-bold text-gray-900">
                                    {entry.name}
                                </p>
                                <p className="text-sm text-gray-600">
                                    {entry.points.toLocaleString()} pts
                                </p>
                                <div className="flex items-center gap-2 text-xs font-semibold text-orange-600">
                                    <Flame className="h-4 w-4" />
                                    {entry.streak} day streak
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Others */}
                <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
                    <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
                        <h2 className="text-lg font-semibold text-gray-900">
                            More Learners
                        </h2>
                        <p className="text-sm text-gray-500">
                            Top performers of the week
                        </p>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {others.map((entry) => (
                            <div
                                key={entry.id}
                                className="flex items-center justify-between px-4 py-3"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-semibold text-gray-500 w-6 text-center">
                                        #{entry.rank}
                                    </span>
                                    <div
                                        className={`flex h-10 w-10 items-center justify-center rounded-full text-white ${entry.avatarColor || 'bg-gradient-to-br from-purple-500 to-blue-500'}`}
                                    >
                                        {entry.name.slice(0, 1)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900">
                                            {entry.name}
                                        </p>
                                        <p className="text-xs text-gray-600">
                                            {entry.coursesCompleted} courses •{' '}
                                            {entry.streak} day streak
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-semibold text-gray-900">
                                        {entry.points.toLocaleString()} pts
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}

