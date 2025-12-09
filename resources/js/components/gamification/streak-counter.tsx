import { Flame } from 'lucide-react';

interface StreakCounterProps {
    streak: number;
}

export function StreakCounter({ streak }: StreakCounterProps) {
    return (
        <div className="flex items-center gap-3 rounded-xl bg-gradient-to-br from-orange-50 to-red-50 p-4 border border-orange-100">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-red-500">
                <Flame className="h-6 w-6 text-white" />
            </div>
            <div>
                <p className="text-sm text-gray-600">Learning Streak</p>
                <p className="text-2xl font-bold text-gray-900">
                    {streak} {streak === 1 ? 'day' : 'days'}
                </p>
            </div>
        </div>
    );
}

