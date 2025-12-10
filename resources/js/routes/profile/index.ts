/**
 * Profile routes
 */
type RouteObject = {
    url: string;
    method?: string;
};

function route(url: string, method: string = 'get'): RouteObject {
    return { url, method };
}

export const edit = () => route('/settings/profile');
export const update = () => route('/settings/profile', 'patch');
export const destroy = () => route('/settings/profile', 'delete');

export default {
    edit,
    update,
    destroy,
};
