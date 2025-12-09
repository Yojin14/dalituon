import { Coins } from 'lucide-react';

interface PointsDisplayProps {
    points: number;
    size?: 'sm' | 'md' | 'lg';
    showLabel?: boolean;
}

export function PointsDisplay({
    points,
    size = 'md',
    showLabel = true,
}: PointsDisplayProps) {
    const sizeClasses = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-2xl',
    };

    const iconSizes = {
        sm: 'h-4 w-4',
        md: 'h-5 w-5',
        lg: 'h-7 w-7',
    };

    return (
        <div className="flex items-center gap-2">
            <div className="flex items-center justify-center rounded-full bg-gradient-primary p-1.5">
                <Coins className={`${iconSizes[size]} text-white`} />
            </div>
            <div className="flex flex-col">
                <span className={`font-bold text-gray-900 ${sizeClasses[size]}`}>
                    {points.toLocaleString()}
                </span>
                {showLabel && (
                    <span className="text-xs text-gray-500">Points</span>
                )}
            </div>
        </div>
    );
}

