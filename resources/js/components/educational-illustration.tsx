export default function EducationalIllustration() {
    return (
        <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
            {/* Background blob */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-200/40 via-blue-200/30 to-teal-200/20 blur-3xl animate-pulse" />
            </div>

            {/* Main illustration container */}
            <div className="relative z-10 flex flex-col items-center justify-center">
                {/* Book */}
                <svg
                    className="w-64 h-48 mb-8 transform transition-transform hover:scale-105"
                    viewBox="0 0 200 150"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {/* Book cover */}
                    <rect
                        x="20"
                        y="30"
                        width="160"
                        height="120"
                        rx="4"
                        fill="url(#bookGradient)"
                    />
                    <rect
                        x="20"
                        y="30"
                        width="160"
                        height="120"
                        rx="4"
                        fill="none"
                        stroke="url(#bookGradient)"
                        strokeWidth="2"
                    />
                    {/* Book spine */}
                    <rect x="20" y="30" width="8" height="120" fill="#FCD34D" />
                    {/* Book pages */}
                    <rect
                        x="28"
                        y="30"
                        width="152"
                        height="120"
                        fill="white"
                        opacity="0.9"
                    />
                    {/* Lines on pages */}
                    <line
                        x1="40"
                        y1="50"
                        x2="160"
                        y2="50"
                        stroke="#E5E7EB"
                        strokeWidth="1"
                    />
                    <line
                        x1="40"
                        y1="70"
                        x2="160"
                        y2="70"
                        stroke="#E5E7EB"
                        strokeWidth="1"
                    />
                    <line
                        x1="40"
                        y1="90"
                        x2="160"
                        y2="90"
                        stroke="#E5E7EB"
                        strokeWidth="1"
                    />
                    <line
                        x1="40"
                        y1="110"
                        x2="140"
                        y2="110"
                        stroke="#E5E7EB"
                        strokeWidth="1"
                    />
                    <line
                        x1="40"
                        y1="130"
                        x2="120"
                        y2="130"
                        stroke="#E5E7EB"
                        strokeWidth="1"
                    />
                    <defs>
                        <linearGradient
                            id="bookGradient"
                            x1="0%"
                            y1="0%"
                            x2="100%"
                            y2="100%"
                        >
                            <stop
                                offset="0%"
                                stopColor="#6366F1"
                                stopOpacity="1"
                            />
                            <stop
                                offset="100%"
                                stopColor="#8B5CF6"
                                stopOpacity="1"
                            />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Floating educational objects */}
                {/* Crayon */}
                <div className="absolute top-10 left-10 animate-float">
                    <svg
                        className="w-12 h-12"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12 2L14 8L20 10L14 12L12 18L10 12L4 10L10 8L12 2Z"
                            fill="#FCD34D"
                        />
                        <rect x="11" y="8" width="2" height="10" fill="#F59E0B" />
                    </svg>
                </div>

                {/* Ruler */}
                <div className="absolute top-20 right-16 animate-float-delayed">
                    <svg
                        className="w-16 h-4"
                        viewBox="0 0 64 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="2"
                            y="6"
                            width="60"
                            height="4"
                            fill="#EF4444"
                        />
                        <line
                            x1="8"
                            y1="4"
                            x2="8"
                            y2="16"
                            stroke="#DC2626"
                            strokeWidth="1"
                        />
                        <line
                            x1="16"
                            y1="4"
                            x2="16"
                            y2="16"
                            stroke="#DC2626"
                            strokeWidth="1"
                        />
                        <line
                            x1="24"
                            y1="4"
                            x2="24"
                            y2="16"
                            stroke="#DC2626"
                            strokeWidth="1"
                        />
                        <line
                            x1="32"
                            y1="4"
                            x2="32"
                            y2="16"
                            stroke="#DC2626"
                            strokeWidth="1"
                        />
                        <line
                            x1="40"
                            y1="4"
                            x2="40"
                            y2="16"
                            stroke="#DC2626"
                            strokeWidth="1"
                        />
                        <line
                            x1="48"
                            y1="4"
                            x2="48"
                            y2="16"
                            stroke="#DC2626"
                            strokeWidth="1"
                        />
                        <line
                            x1="56"
                            y1="4"
                            x2="56"
                            y2="16"
                            stroke="#DC2626"
                            strokeWidth="1"
                        />
                    </svg>
                </div>

                {/* Protractor */}
                <div className="absolute bottom-20 left-16 animate-float-slow">
                    <svg
                        className="w-14 h-14"
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M28 8C38.4934 8 47 16.5066 47 27C47 37.4934 38.4934 46 28 46C17.5066 46 9 37.4934 9 27C9 16.5066 17.5066 8 28 8Z"
                            fill="#10B981"
                            opacity="0.3"
                        />
                        <path
                            d="M28 8C38.4934 8 47 16.5066 47 27C47 37.4934 38.4934 46 28 46"
                            stroke="#10B981"
                            strokeWidth="2"
                        />
                        <line
                            x1="28"
                            y1="8"
                            x2="28"
                            y2="46"
                            stroke="#10B981"
                            strokeWidth="1"
                        />
                        <line
                            x1="9"
                            y1="27"
                            x2="47"
                            y2="27"
                            stroke="#10B981"
                            strokeWidth="1"
                        />
                    </svg>
                </div>

                {/* Paintbrush */}
                <div className="absolute bottom-10 right-12 animate-float-delayed-2">
                    <svg
                        className="w-10 h-16"
                        viewBox="0 0 40 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="16"
                            y="8"
                            width="8"
                            height="40"
                            fill="#EC4899"
                        />
                        <path
                            d="M12 48L20 56L28 48L20 40L12 48Z"
                            fill="#F472B6"
                        />
                        <ellipse
                            cx="20"
                            cy="52"
                            rx="8"
                            ry="4"
                            fill="#F472B6"
                        />
                    </svg>
                </div>

                {/* Atomic model */}
                <div className="absolute top-32 right-8 animate-float">
                    <svg
                        className="w-12 h-12"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="24" cy="24" r="3" fill="#3B82F6" />
                        <ellipse
                            cx="24"
                            cy="24"
                            rx="20"
                            ry="8"
                            fill="none"
                            stroke="#3B82F6"
                            strokeWidth="1.5"
                        />
                        <ellipse
                            cx="24"
                            cy="24"
                            rx="8"
                            ry="20"
                            fill="none"
                            stroke="#3B82F6"
                            strokeWidth="1.5"
                        />
                        <ellipse
                            cx="24"
                            cy="24"
                            rx="20"
                            ry="8"
                            fill="none"
                            stroke="#3B82F6"
                            strokeWidth="1.5"
                            transform="rotate(60 24 24)"
                        />
                    </svg>
                </div>

                {/* Palette */}
                <div className="absolute bottom-32 left-8 animate-float-slow">
                    <svg
                        className="w-14 h-14"
                        viewBox="0 0 56 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M28 8C35.732 8 42 14.268 42 22C42 29.732 35.732 36 28 36C20.268 36 14 29.732 14 22C14 14.268 20.268 8 28 8Z"
                            fill="white"
                        />
                        <path
                            d="M28 8C35.732 8 42 14.268 42 22C42 29.732 35.732 36 28 36"
                            stroke="#E5E7EB"
                            strokeWidth="2"
                        />
                        <circle cx="24" cy="18" r="3" fill="#EF4444" />
                        <circle cx="32" cy="18" r="3" fill="#3B82F6" />
                        <circle cx="24" cy="26" r="3" fill="#FCD34D" />
                        <circle cx="32" cy="26" r="3" fill="#10B981" />
                        <circle cx="28" cy="22" r="3" fill="#8B5CF6" />
                        <rect
                            x="26"
                            y="36"
                            width="4"
                            height="20"
                            rx="2"
                            fill="#E5E7EB"
                        />
                    </svg>
                </div>
            </div>

            {/* Decorative vertical lines */}
            <div className="absolute left-0 top-0 w-full h-full pointer-events-none">
                <div className="absolute left-[10%] top-0 w-0.5 h-32 bg-gradient-to-b from-purple-300/40 to-transparent" />
                <div className="absolute left-[15%] top-0 w-0.5 h-24 bg-gradient-to-b from-blue-300/40 to-transparent" />
                <div className="absolute left-[20%] top-0 w-0.5 h-40 bg-gradient-to-b from-teal-300/30 to-transparent" />
            </div>
        </div>
    );
}

