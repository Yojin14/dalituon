import { useMemo, useState } from 'react';
import { MatchingPair } from '@/types/course';
import { CheckCircle2, Shuffle, Timer } from 'lucide-react';

interface MatchingGameProps {
    pairs: MatchingPair[];
    onComplete: () => void;
    disabled?: boolean;
}

type Card = { id: string; label: string; side: 'left' | 'right' };

export function MatchingGame({ pairs, onComplete, disabled }: MatchingGameProps) {
    const [selectedLeft, setSelectedLeft] = useState<string | null>(null);
    const [matched, setMatched] = useState<Record<string, string>>({});

    const cards = useMemo<Card[]>(() => {
        const left = pairs.map((p) => ({ id: `L-${p.id}`, label: p.left, side: 'left' as const }));
        const right = pairs.map((p) => ({ id: `R-${p.id}`, label: p.right, side: 'right' as const }));
        const shuffle = <T,>(arr: T[]): T[] =>
            arr
                .map((value) => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value);
        return [...shuffle(left), ...shuffle(right)];
    }, [pairs]);

    const handleSelect = (card: Card) => {
        if (disabled) return;
        if (card.side === 'left') {
            setSelectedLeft(card.id === selectedLeft ? null : card.id);
            return;
        }
        // right side
        if (!selectedLeft) return;
        const leftId = selectedLeft.replace('L-', '');
        const rightId = card.id.replace('R-', '');
        if (leftId === rightId) {
            setMatched((prev) => {
                const next = { ...prev, [leftId]: rightId };
                if (Object.keys(next).length === pairs.length) {
                    setTimeout(onComplete, 300);
                }
                return next;
            });
            setSelectedLeft(null);
        } else {
            setSelectedLeft(null);
        }
    };

    const isMatched = (card: Card) => {
        const key = card.id.replace('L-', '').replace('R-', '');
        return matched[key] !== undefined;
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Timer className="h-4 w-4" />
                    Complete all matches to win
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Shuffle className="h-4 w-4" />
                    {Object.keys(matched).length}/{pairs.length} matched
                </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                {cards.map((card) => {
                    const matchedNow = isMatched(card);
                    const isSelected = card.id === selectedLeft;
                    return (
                        <button
                            key={card.id}
                            onClick={() => handleSelect(card)}
                            disabled={disabled || matchedNow}
                            className={`flex items-center justify-between rounded-xl border-2 px-4 py-3 text-left transition-all ${
                                matchedNow
                                    ? 'border-green-200 bg-gradient-to-br from-green-50 to-white text-green-700 shadow-sm'
                                    : isSelected
                                      ? 'border-primary bg-gradient-to-br from-purple-50 to-white shadow-md'
                                      : 'border-gray-200 bg-white hover:border-primary/30 hover:shadow'
                            } ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
                        >
                            <span className="text-sm font-semibold">{card.label}</span>
                            {matchedNow && <CheckCircle2 className="h-4 w-4 text-green-500" />}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

