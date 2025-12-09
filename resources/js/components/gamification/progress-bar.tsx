interface ProgressBarProps {
    progress: number;
    label?: string;
    showPercentage?: boolean;
    size?: 'sm' | 'md' | 'lg';
    color?: 'primary' | 'success' | 'warning';
}

export function ProgressBar({
    progress,
    label,
    showPercentage = true,
    size = 'md',
    color = 'primary',
}: ProgressBarProps) {
    const heightClasses = {
        sm: 'h-1.5',
        md: 'h-2.5',
        lg: 'h-4',
    };

    const colorClasses = {
        primary: 'bg-gradient-primary',
        success: 'bg-gradient-to-r from-green-500 to-emerald-500',
        warning: 'bg-gradient-to-r from-yellow-500 to-orange-500',
    };

    const clampedProgress = Math.min(Math.max(progress, 0), 100);

    return (
        <div className="w-full">
            {label && (
                <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-700">
                        {label}
                    </span>
                    {showPercentage && (
                        <span className="text-sm font-semibold text-gray-600">
                            {Math.round(clampedProgress)}%
                        </span>
                    )}
                </div>
            )}
            <div
                className={`w-full overflow-hidden rounded-full bg-gray-200 ${heightClasses[size]}`}
            >
                <div
                    className={`${colorClasses[color]} h-full transition-all duration-500 ease-out`}
                    style={{ width: `${clampedProgress}%` }}
                />
            </div>
        </div>
    );
}

