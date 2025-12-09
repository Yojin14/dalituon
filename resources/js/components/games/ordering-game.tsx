import { useMemo, useState } from 'react';
import { OrderingItem } from '@/types/course';
import { CheckCircle2, Move } from 'lucide-react';

interface OrderingGameProps {
    items: OrderingItem[];
    onComplete: () => void;
    disabled?: boolean;
}

export function OrderingGame({ items, onComplete, disabled }: OrderingGameProps) {
    const shuffled = useMemo(
        () =>
            items
                .map((item) => ({ ...item, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ sort, ...rest }) => rest),
        [items],
    );
    const [order, setOrder] = useState<OrderingItem[]>(shuffled);
    const [isComplete, setIsComplete] = useState(false);
    const [draggingId, setDraggingId] = useState<string | null>(null);

    const moveItem = (from: number, to: number) => {
        if (disabled) return;
        const next = [...order];
        const [moved] = next.splice(from, 1);
        next.splice(to, 0, moved);
        setOrder(next);
    };

    const handleDragStart = (id: string) => {
        if (disabled) return;
        setDraggingId(id);
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>, id: string) => {
        if (disabled || !draggingId || draggingId === id) return;
        e.preventDefault();
        const from = order.findIndex((i) => i.id === draggingId);
        const to = order.findIndex((i) => i.id === id);
        if (from !== -1 && to !== -1 && from !== to) {
            moveItem(from, to);
        }
    };

    const handleDragEnd = () => {
        setDraggingId(null);
    };

    const checkOrder = () => {
        const correct = order.every((item, idx) => item.order === idx + 1);
        if (correct) {
            setIsComplete(true);
            onComplete();
        } else {
            setIsComplete(false);
        }
    };

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between text-sm text-gray-600">
                <span>Arrange the steps in the right order</span>
                {isComplete && (
                    <span className="flex items-center gap-1 text-green-600">
                        <CheckCircle2 className="h-4 w-4" /> Perfect order!
                    </span>
                )}
            </div>
            <div className="space-y-2">
                {order.map((item, idx) => (
                    <div
                        key={item.id}
                        draggable={!disabled}
                        onDragStart={() => handleDragStart(item.id)}
                        onDragOver={(e) => handleDragOver(e, item.id)}
                        onDragEnd={handleDragEnd}
                        className={`flex items-center justify-between rounded-xl border-2 px-4 py-3 text-sm font-semibold text-gray-800 shadow-sm transition ${
                            draggingId === item.id
                                ? 'border-primary bg-purple-50 shadow-md'
                                : 'border-gray-200 bg-white'
                        } ${disabled ? 'cursor-not-allowed' : 'cursor-grab'}`}
                    >
                        <div className="flex items-center gap-3">
                            <Move className="h-4 w-4 text-gray-500" />
                            <span>{item.text}</span>
                        </div>
                        <div className="flex gap-2">
                            <button
                                type="button"
                                disabled={disabled || idx === 0}
                                onClick={() => moveItem(idx, idx - 1)}
                                className="rounded-md border border-gray-200 px-2 py-1 text-xs text-gray-600 hover:bg-gray-50 disabled:opacity-50"
                            >
                                ↑
                            </button>
                            <button
                                type="button"
                                disabled={disabled || idx === order.length - 1}
                                onClick={() => moveItem(idx, idx + 1)}
                                className="rounded-md border border-gray-200 px-2 py-1 text-xs text-gray-600 hover:bg-gray-50 disabled:opacity-50"
                            >
                                ↓
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex justify-end">
                <button
                    type="button"
                    disabled={disabled}
                    onClick={checkOrder}
                    className="rounded-lg bg-gradient-primary px-4 py-2 text-sm font-semibold text-white transition-all hover:opacity-90 disabled:opacity-50"
                >
                    Check Order
                </button>
            </div>
        </div>
    );
}

