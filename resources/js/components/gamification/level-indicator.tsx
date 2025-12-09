import { TrendingUp } from 'lucide-react';

interface LevelIndicatorProps {
    level: number;
    currentPoints: number;
    nextLevelPoints: number;
}

export function LevelIndicator({
    level,
    currentPoints,
    nextLevelPoints,
}: LevelIndicatorProps) {
    const progress = (currentPoints / nextLevelPoints) * 100;

    return (
        <div className="rounded-xl bg-gradient-to-br from-purple-50 to-blue-50 p-4 border border-purple-100">
            <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-primary text-white">
                        <TrendingUp className="h-6 w-6" />
                    </div>
                    <div>
                        <p className="text-sm text-gray-600">Level</p>
                        <p className="text-2xl font-bold text-gray-900">
                            {level}
                        </p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-sm text-gray-600">Progress</p>
                    <p className="text-lg font-semibold text-gray-900">
                        {currentPoints} / {nextLevelPoints}
                    </p>
                </div>
            </div>
            <div className="w-full overflow-hidden rounded-full bg-gray-200 h-2.5">
                <div
                    className="bg-gradient-primary h-full transition-all duration-500 ease-out"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                />
            </div>
        </div>
    );
}

