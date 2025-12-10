/**
 * Two-factor authentication routes
 */
type RouteObject = {
    url: string;
    method?: string;
    form?: () => { action: string; method: string };
};

type RouteFunction = (() => RouteObject) & {
    form: () => { action: string; method: string };
};

function route(url: string, method: string = 'get'): RouteFunction {
    const routeFn = (): RouteObject => ({ url, method });
    
    // Add form() method directly to the function for Inertia Form component
    routeFn.form = () => ({
        action: url,
        method: method.toUpperCase(),
    });
    
    return routeFn;
}

export const show = route('/settings/two-factor');
export const enable = route('/user/two-factor-authentication', 'post');
export const disable = route('/user/two-factor-authentication', 'delete');
export const confirm = route('/user/confirmed-two-factor-authentication', 'post');
export const qrCode = route('/user/two-factor-qr-code');
export const secretKey = route('/user/two-factor-secret-key');
export const recoveryCodes = route('/user/two-factor-recovery-codes');
export const regenerateRecoveryCodes = route('/user/two-factor-recovery-codes', 'post');

export default {
    show,
    enable,
    disable,
    confirm,
    qrCode,
    secretKey,
    recoveryCodes,
    regenerateRecoveryCodes,
};
