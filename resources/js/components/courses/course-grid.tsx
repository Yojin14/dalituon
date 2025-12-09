import { type Course } from '@/types/course';
import { CourseCard } from './course-card';

interface CourseGridProps {
    courses: Course[];
    onEnroll?: (courseId: string) => void;
    title?: string;
}

export function CourseGrid({
    courses,
    onEnroll,
    title,
}: CourseGridProps) {
    return (
        <div>
            {title && (
                <h2 className="mb-6 text-2xl font-bold text-gray-900">
                    {title}
                </h2>
            )}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                    <CourseCard
                        key={course.id}
                        course={course}
                        onEnroll={onEnroll}
                    />
                ))}
            </div>
        </div>
    );
}

