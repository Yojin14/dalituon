import EducationalIllustration from '@/components/educational-illustration';
import { home } from '@/routes';
import { Link } from '@inertiajs/react';
import { BookOpen } from 'lucide-react';
import { type PropsWithChildren } from 'react';

interface AuthModernLayoutProps {
    title?: string;
    description?: string;
}

export default function AuthModernLayout({
    children,
    title,
    description,
}: PropsWithChildren<AuthModernLayoutProps>) {
    return (
        <div className="flex min-h-screen w-full bg-white">
            {/* Left side - Form */}
            <div className="flex w-full flex-col items-center justify-center p-6 md:w-1/2 md:p-12 lg:p-16">
                <div className="w-full max-w-md">
                    {/* Logo */}
                    <Link
                        href={home()}
                        className="mb-8 flex items-center gap-3 text-2xl font-bold"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary text-white shadow-lg">
                            <BookOpen className="h-6 w-6" />
                        </div>
                        <span className="text-gradient-primary">Dalituon</span>
                    </Link>

                    {/* Title and description */}
                    <div className="mb-8 space-y-2">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                            {title}
                        </h1>
                        <p className="text-gray-600">{description}</p>
                    </div>

                    {/* Form content */}
                    {children}
                </div>
            </div>

            {/* Right side - Illustration */}
            <div className="hidden w-1/2 bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50 md:flex items-center justify-center relative overflow-hidden bg-grid-pattern">
                {/* Decorative elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-10 right-10 h-32 w-32 rounded-full bg-purple-200/20 blur-2xl" />
                    <div className="absolute bottom-10 left-10 h-40 w-40 rounded-full bg-blue-200/20 blur-2xl" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-48 w-48 rounded-full bg-teal-200/15 blur-3xl" />
                </div>

                {/* Illustration */}
                <div className="relative z-10 w-full h-full">
                    <EducationalIllustration />
                </div>

                {/* Tagline */}
                <div className="absolute bottom-12 left-12 right-12 z-10">
                    <div className="rounded-2xl bg-white/80 backdrop-blur-sm p-6 shadow-lg border border-white/20">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">
                            Transforming education into{' '}
                            <span className="text-gradient-primary">
                                playful adventures
                            </span>
                        </h2>
                        <p className="text-gray-600 text-sm">
                            AI Assisted Web Book to Enhance Conceptual
                            Understanding and Learning Motivation of
                            Non-Traditional Learners.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

