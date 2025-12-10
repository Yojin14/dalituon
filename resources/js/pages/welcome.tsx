import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { BookOpen, Trophy, Gamepad2, Sparkles, Star, Zap, Rocket } from 'lucide-react';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Welcome - Fun Learning Awaits!" />
            <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50 p-6">
                {/* Animated Background Elements */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-[10%] top-[20%] h-32 w-32 animate-float rounded-full bg-purple-300/30 blur-3xl" />
                    <div className="absolute right-[15%] top-[30%] h-40 w-40 animate-float-delay-1 rounded-full bg-pink-300/30 blur-3xl" />
                    <div className="absolute bottom-[20%] left-[20%] h-36 w-36 animate-float-delay-2 rounded-full bg-yellow-300/30 blur-3xl" />
                    <div className="absolute bottom-[30%] right-[10%] h-44 w-44 animate-float rounded-full bg-blue-300/30 blur-3xl" />
                </div>

                {/* Main Content */}
                <div className="relative z-10 w-full max-w-6xl">
                    {/* Header Navigation */}
                    <div className="absolute right-0 top-[-80px] flex items-center gap-3">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-gray-800 shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                            >
                                <Sparkles className="h-5 w-5 text-purple-500" />
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="rounded-full bg-white/80 px-6 py-3 font-semibold text-gray-800 backdrop-blur-sm transition-all hover:scale-105 hover:bg-white hover:shadow-lg"
                                >
                                    Log in
                                </Link>
                                {canRegister && (
                                    <Link
                                        href={register()}
                                        className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                                    >
                                        <Rocket className="h-5 w-5" />
                                        Get Started
                                    </Link>
                                )}
                            </>
                        )}
                    </div>

                    {/* Hero Content */}
                    <div className="text-center">
                        {/* Floating Icons */}
                        <div className="relative mb-8 flex justify-center">
                            <div className="relative">
                                <div className="absolute left-[-120px] top-[20px] animate-bounce-slow">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-400 to-purple-600 shadow-2xl">
                                        <BookOpen className="h-10 w-10 text-white" />
                                    </div>
                                </div>
                                <div className="absolute right-[-120px] top-[20px] animate-bounce-slow animation-delay-300">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-400 to-pink-600 shadow-2xl">
                                        <Trophy className="h-10 w-10 text-white" />
                                    </div>
                                </div>
                                <div className="absolute bottom-[-40px] left-[50%] -translate-x-1/2 animate-bounce-slow animation-delay-600">
                                    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 shadow-2xl">
                                        <Gamepad2 className="h-10 w-10 text-white" />
                                    </div>
                                </div>

                                {/* Main Logo/Icon */}
                                <div className="flex h-32 w-32 items-center justify-center rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 shadow-2xl">
                                    <Sparkles className="h-16 w-16 animate-spin-slow text-white" />
                                </div>
                            </div>
                        </div>

                        {/* Main Headline */}
                        <h1 className="mb-6 text-6xl font-black leading-tight text-gray-900 md:text-7xl lg:text-8xl">
                            Learning is
                            <br />
                            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 bg-clip-text text-transparent">
                                Fun Again! 🎉
                            </span>
                            </h1>

                        {/* Subheadline */}
                        <p className="mx-auto mb-8 max-w-2xl text-xl font-medium text-gray-700 md:text-2xl">
                            Play games, earn rewards, and master new skills in the most exciting way possible!
                        </p>

                        {/* Feature Pills */}
                        <div className="mb-10 flex flex-wrap items-center justify-center gap-4">
                            <div className="flex items-center gap-2 rounded-full bg-white px-6 py-3 shadow-lg">
                                <Star className="h-5 w-5 text-yellow-500" />
                                <span className="font-semibold text-gray-800">Earn Badges</span>
                            </div>
                            <div className="flex items-center gap-2 rounded-full bg-white px-6 py-3 shadow-lg">
                                <Zap className="h-5 w-5 text-orange-500" />
                                <span className="font-semibold text-gray-800">Build Streaks</span>
                            </div>
                            <div className="flex items-center gap-2 rounded-full bg-white px-6 py-3 shadow-lg">
                                <Trophy className="h-5 w-5 text-purple-500" />
                                <span className="font-semibold text-gray-800">Compete & Win</span>
                            </div>
                            <div className="flex items-center gap-2 rounded-full bg-white px-6 py-3 shadow-lg">
                                <Gamepad2 className="h-5 w-5 text-pink-500" />
                                <span className="font-semibold text-gray-800">Play Games</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                            {auth.user ? (
                                <Link
                                    href={dashboard()}
                                    className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 px-10 py-5 text-xl font-bold text-white shadow-2xl transition-all hover:scale-110 hover:shadow-3xl"
                                >
                                    Continue Learning
                                    <Rocket className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={register()}
                                        className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-600 px-10 py-5 text-xl font-bold text-white shadow-2xl transition-all hover:scale-110 hover:shadow-3xl"
                                    >
                                        Start Learning Free
                                        <Rocket className="h-6 w-6 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                    <Link
                                        href={login()}
                                        className="flex items-center gap-3 rounded-full border-4 border-white bg-white/40 px-10 py-5 text-xl font-bold text-gray-800 backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/60"
                                    >
                                        Sign In
                                    </Link>
                                </>
                            )}
                        </div>

                        {/* Fun Stats */}
                        <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
                            <div className="text-center">
                                <div className="text-4xl font-black text-purple-600">10K+</div>
                                <div className="text-sm font-semibold text-gray-600">Happy Learners</div>
                            </div>
                            <div className="h-12 w-px bg-gray-300" />
                            <div className="text-center">
                                <div className="text-4xl font-black text-pink-600">50+</div>
                                <div className="text-sm font-semibold text-gray-600">Fun Courses</div>
                            </div>
                            <div className="h-12 w-px bg-gray-300" />
                            <div className="text-center">
                                <div className="text-4xl font-black text-yellow-600">1M+</div>
                                <div className="text-sm font-semibold text-gray-600">Points Earned</div>
                            </div>
                        </div>
                    </div>
                </div>

                <style>{`
                    @keyframes float {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-20px); }
                    }
                    @keyframes float-delay-1 {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-25px); }
                    }
                    @keyframes float-delay-2 {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-15px); }
                    }
                    @keyframes bounce-slow {
                        0%, 100% { transform: translateY(0px); }
                        50% { transform: translateY(-10px); }
                    }
                    @keyframes spin-slow {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }
                    .animate-float { animation: float 6s ease-in-out infinite; }
                    .animate-float-delay-1 { animation: float-delay-1 7s ease-in-out infinite; }
                    .animate-float-delay-2 { animation: float-delay-2 8s ease-in-out infinite; }
                    .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }
                    .animate-spin-slow { animation: spin-slow 20s linear infinite; }
                    .animation-delay-300 { animation-delay: 0.3s; }
                    .animation-delay-600 { animation-delay: 0.6s; }
                `}</style>
            </div>
        </>
    );
}
