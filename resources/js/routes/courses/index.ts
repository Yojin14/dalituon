import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
 * @see routes/web.php:18
 * @route '/courses'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/courses',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:18
 * @route '/courses'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:18
 * @route '/courses'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:18
 * @route '/courses'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
 * @see routes/web.php:22
 * @route '/courses/{id}'
 */
export const show = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/courses/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:22
 * @route '/courses/{id}'
 */
show.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return show.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see routes/web.php:22
 * @route '/courses/{id}'
 */
show.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
 * @see routes/web.php:22
 * @route '/courses/{id}'
 */
show.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
 * @see routes/web.php:26
 * @route '/my-courses'
 */
export const myCourses = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: myCourses.url(options),
    method: 'get',
})

myCourses.definition = {
    methods: ["get","head"],
    url: '/my-courses',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:26
 * @route '/my-courses'
 */
myCourses.url = (options?: RouteQueryOptions) => {
    return myCourses.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:26
 * @route '/my-courses'
 */
myCourses.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: myCourses.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:26
 * @route '/my-courses'
 */
myCourses.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: myCourses.url(options),
    method: 'head',
})

/**
 * @see routes/web.php:30
 * @route '/courses/{id}/modules'
 */
export const modules = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: modules.url(args, options),
    method: 'get',
})

modules.definition = {
    methods: ["get","head"],
    url: '/courses/{id}/modules',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:30
 * @route '/courses/{id}/modules'
 */
modules.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                }

    return modules.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see routes/web.php:30
 * @route '/courses/{id}/modules'
 */
modules.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: modules.url(args, options),
    method: 'get',
})
/**
 * @see routes/web.php:30
 * @route '/courses/{id}/modules'
 */
modules.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: modules.url(args, options),
    method: 'head',
})

/**
 * @see routes/web.php:34
 * @route '/courses/{id}/modules/{moduleId}'
 */
export const moduleContent = (args: { id: string | number, moduleId: string | number } | [id: string | number, moduleId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: moduleContent.url(args, options),
    method: 'get',
})

moduleContent.definition = {
    methods: ["get","head"],
    url: '/courses/{id}/modules/{moduleId}',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:34
 * @route '/courses/{id}/modules/{moduleId}'
 */
moduleContent.url = (args: { id: string | number, moduleId: string | number } | [id: string | number, moduleId: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                    moduleId: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                                moduleId: args.moduleId,
                }

    return moduleContent.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{moduleId}', parsedArgs.moduleId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see routes/web.php:34
 * @route '/courses/{id}/modules/{moduleId}'
 */
moduleContent.get = (args: { id: string | number, moduleId: string | number } | [id: string | number, moduleId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: moduleContent.url(args, options),
    method: 'get',
})
/**
 * @see routes/web.php:34
 * @route '/courses/{id}/modules/{moduleId}'
 */
moduleContent.head = (args: { id: string | number, moduleId: string | number } | [id: string | number, moduleId: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: moduleContent.url(args, options),
    method: 'head',
})

/**
 * @see routes/web.php:44
 * @route '/courses/{id}/modules/{moduleId}/quiz'
 */
export const quiz = (args: { id: string | number, moduleId: string | number } | [id: string | number, moduleId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: quiz.url(args, options),
    method: 'get',
})

quiz.definition = {
    methods: ["get","head"],
    url: '/courses/{id}/modules/{moduleId}/quiz',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:44
 * @route '/courses/{id}/modules/{moduleId}/quiz'
 */
quiz.url = (args: { id: string | number, moduleId: string | number } | [id: string | number, moduleId: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    id: args[0],
                    moduleId: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        id: args.id,
                                moduleId: args.moduleId,
                }

    return quiz.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace('{moduleId}', parsedArgs.moduleId.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
 * @see routes/web.php:44
 * @route '/courses/{id}/modules/{moduleId}/quiz'
 */
quiz.get = (args: { id: string | number, moduleId: string | number } | [id: string | number, moduleId: string | number ], options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: quiz.url(args, options),
    method: 'get',
})
/**
 * @see routes/web.php:44
 * @route '/courses/{id}/modules/{moduleId}/quiz'
 */
quiz.head = (args: { id: string | number, moduleId: string | number } | [id: string | number, moduleId: string | number ], options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: quiz.url(args, options),
    method: 'head',
})
const courses = {
    index: Object.assign(index, index),
show: Object.assign(show, show),
myCourses: Object.assign(myCourses, myCourses),
modules: Object.assign(modules, modules),
moduleContent: Object.assign(moduleContent, moduleContent),
quiz: Object.assign(quiz, quiz),
}

export default courses