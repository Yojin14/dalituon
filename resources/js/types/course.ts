export interface Course {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    duration: string;
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    enrolled: boolean;
    progress: number;
    totalModules: number;
    completedModules: number;
    points: number;
    instructor: string;
    category: string;
}

export interface Module {
    id: string;
    courseId: string;
    title: string;
    description: string;
    order: number;
    unlocked: boolean;
    completed: boolean;
    videoUrl?: string;
    hasQuiz: boolean;
    points: number;
    duration: string;
    content: string;
    lessons: Lesson[];
    gameType?: 'mcq' | 'matching' | 'ordering';
    matchingPairs?: MatchingPair[];
    orderingItems?: OrderingItem[];
}

export interface Quiz {
    id: string;
    moduleId: string;
    questions: QuizQuestion[];
    totalPoints: number;
    timeLimit?: number;
}

export interface QuizQuestion {
    id: string;
    question: string;
    type: 'multiple-choice' | 'true-false' | 'short-answer';
    options?: string[];
    correctAnswer: string | number;
    points: number;
    explanation?: string;
}

export interface UserStats {
    totalPoints: number;
    level: number;
    currentLevelPoints: number;
    nextLevelPoints: number;
    badges: Badge[];
    streak: number;
    coursesCompleted: number;
    coursesEnrolled: number;
}

export interface Badge {
    id: string;
    name: string;
    description: string;
    icon: string;
    earned: boolean;
    earnedAt?: string;
}

export interface Lesson {
    id: string;
    title: string;
    duration: string;
    completed: boolean;
}

export interface MatchingPair {
    id: string;
    left: string;
    right: string;
}

export interface OrderingItem {
    id: string;
    text: string;
    order: number;
}

export interface LeaderboardEntry {
    id: string;
    name: string;
    points: number;
    rank: number;
    streak: number;
    coursesCompleted: number;
    avatarColor?: string;
}

