import { type Course, type Module, type UserStats, type Badge } from '@/types/course';
import { type LeaderboardEntry } from '@/types/course';

export const dummyUserStats: UserStats = {
    totalPoints: 2450,
    level: 5,
    currentLevelPoints: 450,
    nextLevelPoints: 500,
    badges: [
        {
            id: '1',
            name: 'First Steps',
            description: 'Complete your first module',
            icon: '🎯',
            earned: true,
            earnedAt: '2024-01-15',
        },
        {
            id: '2',
            name: 'Quiz Master',
            description: 'Score 100% on 5 quizzes',
            icon: '🏆',
            earned: true,
            earnedAt: '2024-01-20',
        },
        {
            id: '3',
            name: 'Week Warrior',
            description: 'Maintain a 7-day streak',
            icon: '🔥',
            earned: true,
            earnedAt: '2024-01-25',
        },
        {
            id: '4',
            name: 'Course Completer',
            description: 'Complete your first course',
            icon: '🎓',
            earned: false,
        },
        {
            id: '5',
            name: 'Perfect Score',
            description: 'Get 100% on all quizzes in a course',
            icon: '⭐',
            earned: false,
        },
    ],
    streak: 12,
    coursesCompleted: 0,
    coursesEnrolled: 2,
};

export const dummyCourses: Course[] = [
    {
        id: '1',
        title: 'Science and Technology in Modern World',
        description:
            'Explore the fascinating world of modern science and technology. Learn about cutting-edge innovations, scientific principles, and their impact on society.',
        thumbnail: '/course-1.jpg',
        duration: '8 weeks',
        level: 'Beginner',
        enrolled: true,
        progress: 35,
        totalModules: 12,
        completedModules: 4,
        points: 450,
        instructor: 'Dr. Sarah Johnson',
        category: 'Science',
    },
    {
        id: '2',
        title: 'General Science',
        description:
            'A comprehensive introduction to general science covering physics, chemistry, biology, and earth sciences. Perfect for building a strong scientific foundation.',
        thumbnail: '/course-2.jpg',
        duration: '10 weeks',
        level: 'Beginner',
        enrolled: true,
        progress: 20,
        totalModules: 15,
        completedModules: 3,
        points: 300,
        instructor: 'Prof. Michael Chen',
        category: 'Science',
    },
    {
        id: '3',
        title: 'Advanced Physics',
        description:
            'Dive deep into advanced physics concepts including quantum mechanics, relativity, and particle physics.',
        thumbnail: '/course-3.jpg',
        duration: '12 weeks',
        level: 'Advanced',
        enrolled: false,
        progress: 0,
        totalModules: 18,
        completedModules: 0,
        points: 0,
        instructor: 'Dr. Emily Rodriguez',
        category: 'Physics',
    },
    {
        id: '4',
        title: 'Chemistry Fundamentals',
        description:
            'Master the fundamentals of chemistry including atomic structure, chemical bonding, and reactions.',
        thumbnail: '/course-4.jpg',
        duration: '9 weeks',
        level: 'Intermediate',
        enrolled: false,
        progress: 0,
        totalModules: 14,
        completedModules: 0,
        points: 0,
        instructor: 'Dr. James Wilson',
        category: 'Chemistry',
    },
];

export const dummyModules: Module[] = [
    {
        id: '1',
        courseId: '1',
        title: 'Introduction to Modern Science',
        description:
            'Get started with understanding what modern science is and how it shapes our world.',
        order: 1,
        unlocked: true,
        completed: true,
        videoUrl: 'https://example.com/video1.mp4',
        hasQuiz: true,
        points: 100,
        duration: '15 min',
        content: 'This module introduces the fundamental concepts of modern science...',
        lessons: [
            { id: '1', title: 'What is Science?', duration: '4 min', completed: true },
            { id: '2', title: 'Scientific Method Basics', duration: '5 min', completed: true },
            { id: '3', title: 'Observations & Hypotheses', duration: '6 min', completed: true },
        ],
        gameType: 'mcq',
    },
    {
        id: '2',
        courseId: '1',
        title: 'Technology and Innovation',
        description:
            'Explore how technology drives innovation and changes our daily lives.',
        order: 2,
        unlocked: true,
        completed: true,
        videoUrl: 'https://example.com/video2.mp4',
        hasQuiz: true,
        points: 100,
        duration: '20 min',
        content: 'Technology has revolutionized every aspect of human life...',
        lessons: [
            { id: '1', title: 'History of Innovation', duration: '5 min', completed: true },
            { id: '2', title: 'Tech in Daily Life', duration: '6 min', completed: true },
            { id: '3', title: 'Impact on Society', duration: '7 min', completed: true },
        ],
        gameType: 'matching',
        matchingPairs: [
            { id: 'p1', left: 'AI & Automation', right: 'Efficiency boost' },
            { id: 'p2', left: 'Space Tech', right: 'Satellite imaging' },
            { id: 'p3', left: 'Biotech', right: 'Health innovation' },
            { id: 'p4', left: 'Green Energy', right: 'Sustainability' },
        ],
    },
    {
        id: '3',
        courseId: '1',
        title: 'Scientific Method and Research',
        description:
            'Learn the scientific method and how to conduct proper research.',
        order: 3,
        unlocked: true,
        completed: true,
        videoUrl: 'https://example.com/video3.mp4',
        hasQuiz: true,
        points: 100,
        duration: '18 min',
        content: 'The scientific method is a systematic approach to understanding...',
        lessons: [
            { id: '1', title: 'Steps of the Method', duration: '6 min', completed: true },
            { id: '2', title: 'Designing Experiments', duration: '6 min', completed: true },
            { id: '3', title: 'Analyzing Results', duration: '6 min', completed: true },
        ],
        gameType: 'ordering',
        orderingItems: [
            { id: 'o1', text: 'Ask a question', order: 1 },
            { id: 'o2', text: 'Form a hypothesis', order: 2 },
            { id: 'o3', text: 'Design experiment', order: 3 },
            { id: 'o4', text: 'Collect data', order: 4 },
            { id: 'o5', text: 'Analyze & conclude', order: 5 },
        ],
    },
    {
        id: '4',
        courseId: '1',
        title: 'Current Scientific Breakthroughs',
        description:
            'Discover the latest scientific breakthroughs and their implications.',
        order: 4,
        unlocked: true,
        completed: false,
        videoUrl: 'https://example.com/video4.mp4',
        hasQuiz: true,
        points: 150,
        duration: '25 min',
        content: 'Recent scientific breakthroughs have opened new frontiers...',
        lessons: [
            { id: '1', title: 'AI & Robotics', duration: '7 min', completed: false },
            { id: '2', title: 'Space Exploration', duration: '8 min', completed: false },
            { id: '3', title: 'Biotech Advances', duration: '7 min', completed: false },
        ],
        gameType: 'mcq',
    },
    {
        id: '5',
        courseId: '1',
        title: 'Ethics in Science and Technology',
        description:
            'Explore ethical considerations in scientific research and technological development.',
        order: 5,
        unlocked: true,
        completed: false,
        videoUrl: 'https://example.com/video5.mp4',
        hasQuiz: true,
        points: 150,
        duration: '22 min',
        content: 'Ethics play a crucial role in scientific research...',
        lessons: [
            { id: '1', title: 'Ethical Frameworks', duration: '6 min', completed: false },
            { id: '2', title: 'Case Studies', duration: '7 min', completed: false },
            { id: '3', title: 'Responsible Innovation', duration: '7 min', completed: false },
        ],
        gameType: 'mcq',
    },
    {
        id: '6',
        courseId: '1',
        title: 'Future of Science',
        description:
            'Look ahead to the future of science and emerging technologies.',
        order: 6,
        unlocked: false,
        completed: false,
        videoUrl: 'https://example.com/video6.mp4',
        hasQuiz: true,
        points: 200,
        duration: '30 min',
        content: 'The future of science holds exciting possibilities...',
        lessons: [
            { id: '1', title: 'Emerging Fields', duration: '8 min', completed: false },
            { id: '2', title: 'Futuristic Tech', duration: '8 min', completed: false },
            { id: '3', title: 'Preparing for Change', duration: '8 min', completed: false },
            { id: '4', title: 'Ethics of the Future', duration: '6 min', completed: false },
        ],
        gameType: 'mcq',
    },
];

export const getCourseById = (id: string): Course | undefined => {
    return dummyCourses.find((course) => course.id === id);
};

export const getModulesByCourseId = (courseId: string): Module[] => {
    return dummyModules.filter((module) => module.courseId === courseId);
};

export const getModuleById = (
    courseId: string,
    moduleId: string,
): Module | undefined => {
    return dummyModules.find(
        (module) =>
            module.courseId === courseId && module.id === moduleId,
    );
};

export const dummyLeaderboard: LeaderboardEntry[] = [
    {
        id: 'lb1',
        name: 'Ava Santos',
        points: 3820,
        rank: 1,
        streak: 15,
        coursesCompleted: 4,
        avatarColor: 'bg-gradient-to-br from-purple-500 to-blue-500',
    },
    {
        id: 'lb2',
        name: 'Liam Reyes',
        points: 3410,
        rank: 2,
        streak: 12,
        coursesCompleted: 3,
        avatarColor: 'bg-gradient-to-br from-amber-500 to-orange-500',
    },
    {
        id: 'lb3',
        name: 'Mia Cruz',
        points: 3290,
        rank: 3,
        streak: 9,
        coursesCompleted: 3,
        avatarColor: 'bg-gradient-to-br from-teal-500 to-emerald-500',
    },
    {
        id: 'lb4',
        name: 'Noah Lim',
        points: 2980,
        rank: 4,
        streak: 7,
        coursesCompleted: 2,
        avatarColor: 'bg-gradient-to-br from-indigo-500 to-cyan-500',
    },
    {
        id: 'lb5',
        name: 'Sophia Tan',
        points: 2760,
        rank: 5,
        streak: 6,
        coursesCompleted: 2,
        avatarColor: 'bg-gradient-to-br from-pink-500 to-rose-500',
    },
    {
        id: 'lb6',
        name: 'Ethan Go',
        points: 2510,
        rank: 6,
        streak: 5,
        coursesCompleted: 1,
        avatarColor: 'bg-gradient-to-br from-sky-500 to-blue-500',
    },
];

