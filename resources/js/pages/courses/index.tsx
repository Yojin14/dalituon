import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import { dummyCourses } from '@/data/dummy-data';
import { CourseGrid } from '@/components/courses/course-grid';
import { dashboard } from '@/routes';
import { BookOpen, Search } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
    {
        title: 'Courses',
        href: '/courses',
    },
];

export default function CoursesIndex() {
    const [courses] = useState(dummyCourses);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLevel, setSelectedLevel] = useState<string>('all');

    const filteredCourses = courses.filter((course) => {
        const matchesSearch =
            course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            course.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLevel =
            selectedLevel === 'all' || course.level === selectedLevel;
        return matchesSearch && matchesLevel;
    });

    const handleEnroll = (courseId: string) => {
        alert(`Enrolling in course ${courseId}. This is a demo!`);
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Courses" />
            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto p-6">
                {/* Header */}
                <div className="mb-4">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Browse Courses
                    </h1>
                    <p className="mt-1 text-gray-600">
                        Discover and enroll in courses to enhance your learning
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="relative flex-1 max-w-md">
                        <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search courses..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                        />
                    </div>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setSelectedLevel('all')}
                            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                                selectedLevel === 'all'
                                    ? 'bg-gradient-primary text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            All Levels
                        </button>
                        <button
                            onClick={() => setSelectedLevel('Beginner')}
                            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                                selectedLevel === 'Beginner'
                                    ? 'bg-gradient-primary text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            Beginner
                        </button>
                        <button
                            onClick={() => setSelectedLevel('Intermediate')}
                            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                                selectedLevel === 'Intermediate'
                                    ? 'bg-gradient-primary text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            Intermediate
                        </button>
                        <button
                            onClick={() => setSelectedLevel('Advanced')}
                            className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                                selectedLevel === 'Advanced'
                                    ? 'bg-gradient-primary text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            Advanced
                        </button>
                    </div>
                </div>

                {/* Results */}
                {filteredCourses.length > 0 ? (
                    <CourseGrid
                        courses={filteredCourses}
                        onEnroll={handleEnroll}
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-12">
                        <BookOpen className="mb-4 h-16 w-16 text-gray-400" />
                        <h3 className="mb-2 text-lg font-semibold text-gray-900">
                            No courses found
                        </h3>
                        <p className="text-gray-600">
                            Try adjusting your search or filters
                        </p>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}

