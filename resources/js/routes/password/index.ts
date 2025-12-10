/**
 * Password routes
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

export const request = route('/forgot-password');
export const email = route('/forgot-password', 'post');
export const reset = (token: string | number) =>
    route(`/reset-password/${token}`);
export const update = route('/reset-password', 'post');

export default {
    request,
    email,
    reset,
    update,
};
