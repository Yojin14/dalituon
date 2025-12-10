/**
 * Appearance routes
 */
type RouteObject = {
    url: string;
    method?: string;
};

function route(url: string, method: string = 'get'): RouteObject {
    return { url, method };
}

export const edit = () => route('/settings/appearance');

export default {
    edit,
};
