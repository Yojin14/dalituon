import { useState } from 'react';
import { Bot, Send, X } from 'lucide-react';

interface AIChatWidgetProps {
    moduleId: string;
}

export function AIChatWidget({ moduleId }: AIChatWidgetProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            id: '1',
            type: 'bot' as const,
            content:
                "Hi! I'm your AI learning assistant. I can help you understand concepts, answer questions, and provide explanations. How can I assist you today?",
        },
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) {
            return;
        }

        const userMessage = {
            id: Date.now().toString(),
            type: 'user' as const,
            content: input,
        };

        setMessages((prev) => [...prev, userMessage]);
        setInput('');

        // Simulate AI response
        setTimeout(() => {
            const botResponse = {
                id: (Date.now() + 1).toString(),
                type: 'bot' as const,
                content:
                    "That's a great question! Let me help you understand this concept better. Based on the module content, here's a detailed explanation...",
            };
            setMessages((prev) => [...prev, botResponse]);
        }, 1000);
    };

    return (
        <div className="sticky top-6">
            {!isOpen ? (
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-full rounded-xl bg-gradient-primary p-6 text-left text-white shadow-lg transition-all hover:shadow-xl"
                >
                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                            <Bot className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="font-bold">AI Assistant</h3>
                            <p className="text-sm text-white/80">
                                Get help with this module
                            </p>
                        </div>
                    </div>
                </button>
            ) : (
                <div className="flex h-[600px] flex-col rounded-xl border border-gray-200 bg-white shadow-lg">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-gray-200 bg-gradient-primary p-4">
                        <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20">
                                <Bot className="h-5 w-5 text-white" />
                            </div>
                            <div>
                                <h3 className="font-bold text-white">
                                    AI Assistant
                                </h3>
                                <p className="text-xs text-white/80">
                                    Always here to help
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white/80 hover:text-white"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 space-y-4 overflow-y-auto p-4">
                        {messages.map((message) => (
                            <div
                                key={message.id}
                                className={`flex ${
                                    message.type === 'user'
                                        ? 'justify-end'
                                        : 'justify-start'
                                }`}
                            >
                                <div
                                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                                        message.type === 'user'
                                            ? 'bg-gradient-primary text-white'
                                            : 'bg-gray-100 text-gray-900'
                                    }`}
                                >
                                    <p className="text-sm">{message.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    <div className="border-t border-gray-200 p-4">
                        <div className="flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) =>
                                    e.key === 'Enter' && handleSend()
                                }
                                placeholder="Ask a question..."
                                className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                            />
                            <button
                                onClick={handleSend}
                                className="rounded-lg bg-gradient-primary p-2 text-white transition-all hover:opacity-90"
                            >
                                <Send className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

