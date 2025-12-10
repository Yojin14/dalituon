/**
 * Simple route helpers - manual replacement for Wayfinder
 * These match the Laravel routes defined in routes/web.php and routes/settings.php
 */

type RouteObject = {
    url: string;
    method?: string;
};

// Helper to create route objects
function route(url: string, method: string = 'get'): RouteObject {
    return { url, method };
}

// Main routes
export const home = () => route('/');
export const dashboard = () => route('/dashboard');
export const login = () => route('/login');
export const register = () => route('/register');
export const logout = () => route('/logout', 'post');

// Course routes - import from courses subdirectory
import * as coursesModule from './courses';
export const courses = coursesModule;

// Leaderboards
export const leaderboards = () => route('/leaderboards');

// Settings routes
export const profile = {
    edit: () => route('/settings/profile'),
    update: () => route('/settings/profile', 'patch'),
    destroy: () => route('/settings/profile', 'delete'),
};

export const userPassword = {
    edit: () => route('/settings/password'),
    update: () => route('/settings/password', 'put'),
};

export const appearance = {
    edit: () => route('/settings/appearance'),
};

export const twoFactor = {
    show: () => route('/settings/two-factor'),
    enable: () => route('/settings/two-factor', 'post'),
    disable: () => route('/settings/two-factor', 'delete'),
    confirm: () => route('/settings/two-factor/confirm', 'post'),
    qrCode: () => route('/settings/two-factor/qr-code'),
    secretKey: () => route('/settings/two-factor/secret-key'),
    recoveryCodes: () => route('/settings/two-factor/recovery-codes'),
    regenerateRecoveryCodes: () =>
        route('/settings/two-factor/recovery-codes', 'post'),
};

// Auth routes (Fortify)
export const password = {
    email: () => route('/forgot-password', 'post'),
    reset: () => route('/reset-password', 'post'),
    update: () => route('/reset-password', 'put'),
    confirm: () => route('/password/confirm', 'post'),
    request: () => route('/forgot-password'),
};

export const verification = {
    send: () => route('/email/verification-notification', 'post'),
    notice: () => route('/email/verify'),
};

// Export all routes for convenience
export default {
    home,
    dashboard,
    login,
    register,
    logout,
    courses,
    leaderboards,
    profile,
    userPassword,
    appearance,
    twoFactor,
    password,
    verification,
};
