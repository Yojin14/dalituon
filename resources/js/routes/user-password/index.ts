/**
 * User password routes
 */
type RouteObject = {
    url: string;
    method?: string;
};

function route(url: string, method: string = 'get'): RouteObject {
    return { url, method };
}

export const edit = () => route('/settings/password');
export const update = () => route('/settings/password', 'put');

export default {
    edit,
    update,
};
