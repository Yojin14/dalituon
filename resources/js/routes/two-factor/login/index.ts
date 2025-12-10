/**
 * Two-factor login routes
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

export const store = route('/two-factor-challenge', 'post');

export default {
    store,
};
