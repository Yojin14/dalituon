import '../css/app.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { initializeTheme } from './hooks/use-appearance';
import { PageProvider } from './lib/mock-inertia';

// Import pages
import Welcome from './pages/welcome';
import Dashboard from './pages/dashboard';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import ForgotPassword from './pages/auth/forgot-password';
import CoursesIndex from './pages/courses/index';
import CourseShow from './pages/courses/show';
import Modules from './pages/courses/modules';
import ModuleContent from './pages/courses/module-content';
import Quiz from './pages/courses/quiz';
import MyCourses from './pages/courses/my-courses';
import Leaderboards from './pages/leaderboards';
import ProfileSettings from './pages/settings/profile';
import PasswordSettings from './pages/settings/password';
import AppearanceSettings from './pages/settings/appearance';
import TwoFactorSettings from './pages/settings/two-factor';

function App() {
    return (
        <BrowserRouter>
            <PageProvider>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />
                    <Route path="/courses" element={<CoursesIndex />} />
                    <Route path="/courses/:id" element={<CourseShow />} />
                    <Route path="/courses/:id/modules" element={<Modules />} />
                    <Route path="/courses/:courseId/modules/:moduleId" element={<ModuleContent />} />
                    <Route path="/courses/:courseId/modules/:moduleId/quiz" element={<Quiz />} />
                    <Route path="/my-courses" element={<MyCourses />} />
                    <Route path="/leaderboards" element={<Leaderboards />} />
                    <Route path="/settings/profile" element={<ProfileSettings mustVerifyEmail={false} />} />
                    <Route path="/settings/password" element={<PasswordSettings />} />
                    <Route path="/settings/appearance" element={<AppearanceSettings />} />
                    <Route path="/settings/two-factor" element={<TwoFactorSettings />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </PageProvider>
        </BrowserRouter>
    );
}

const root = createRoot(document.getElementById('app')!);
root.render(
    <StrictMode>
        <App />
    </StrictMode>
);

// Initialize theme
initializeTheme();

