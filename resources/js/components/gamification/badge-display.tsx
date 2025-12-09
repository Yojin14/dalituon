import { Award, Lock } from 'lucide-react';
import { type Badge } from '@/types/course';

interface BadgeDisplayProps {
    badge: Badge;
    size?: 'sm' | 'md' | 'lg';
}

export function BadgeDisplay({ badge, size = 'md' }: BadgeDisplayProps) {
    const sizeClasses = {
        sm: 'h-12 w-12',
        md: 'h-16 w-16',
        lg: 'h-24 w-24',
    };

    const iconSizes = {
        sm: 'h-6 w-6',
        md: 'h-8 w-8',
        lg: 'h-12 w-12',
    };

    return (
        <div className="relative flex flex-col items-center">
            <div
                className={`${sizeClasses[size]} flex items-center justify-center rounded-full border-2 transition-all ${
                    badge.earned
                        ? 'bg-gradient-primary border-purple-300 shadow-lg'
                        : 'bg-gray-100 border-gray-300 opacity-50'
                }`}
            >
                {badge.earned ? (
                    <Award className={`${iconSizes[size]} text-white`} />
                ) : (
                    <Lock className={`${iconSizes[size]} text-gray-400`} />
                )}
            </div>
            <div className="mt-2 text-center">
                <p
                    className={`font-semibold ${
                        badge.earned ? 'text-gray-900' : 'text-gray-400'
                    } ${size === 'sm' ? 'text-xs' : 'text-sm'}`}
                >
                    {badge.name}
                </p>
            </div>
        </div>
    );
}

