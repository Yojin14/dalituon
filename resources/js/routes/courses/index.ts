/**
 * Course routes
 */
type RouteObject = {
    url: string;
    method?: string;
};

function route(url: string, method: string = 'get'): RouteObject {
    return { url, method };
}

export const index = () => route('/courses');
export const show = (id: string | number) => route(`/courses/${id}`);
export const myCourses = () => route('/my-courses');
export const modules = (id: string | number) => route(`/courses/${id}/modules`);
export const moduleContent = (id: string | number, moduleId: string | number) =>
    route(`/courses/${id}/modules/${moduleId}`);
export const quiz = (id: string | number, moduleId: string | number) =>
    route(`/courses/${id}/modules/${moduleId}/quiz`);

export default {
    index,
    show,
    myCourses,
    modules,
    moduleContent,
    quiz,
};
