// This file provides mock implementations of Inertia.js for static builds
import { FormEvent, ReactNode, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

export { usePage, MockHead as Head, PageProvider } from './mock-inertia';
export { router } from './mock-inertia';

// Mock Link component
export function Link({ href, children, as, method, preserveScroll, ...props }: any) {
    const navigate = useNavigate();
    const url = typeof href === 'string' ? href : href.url;
    
    // Handle button links or methods
    if (as === 'button' || method) {
        return (
            <button
                {...props}
                onClick={(e) => {
                    e.preventDefault();
                    if (props.onClick) {
                        props.onClick(e);
                    }
                }}
                type="button"
            >
                {children}
            </button>
        );
    }
    
    return (
        <RouterLink to={url} {...props}>
            {children}
        </RouterLink>
    );
}

// Mock Form component
interface FormProps {
    action?: string;
    method?: string;
    children: (formState: {
        errors: Record<string, string>;
        hasErrors: boolean;
        processing: boolean;
        wasSuccessful: boolean;
        recentlySuccessful: boolean;
        clearErrors: () => void;
        resetAndClearErrors: () => void;
        defaults: any;
        data: any;
        setData: (key: string | Record<string, any>, value?: any) => void;
    }) => ReactNode;
    options?: any;
    className?: string;
    onSubmit?: (e: FormEvent) => void;
    [key: string]: any;
}

export function Form({ children, className, onSubmit, ...props }: FormProps) {
    const [processing, setProcessing] = useState(false);
    const [wasSuccessful, setWasSuccessful] = useState(false);
    const [recentlySuccessful, setRecentlySuccessful] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [data, setDataState] = useState<Record<string, any>>({});

    const setData = (key: string | Record<string, any>, value?: any) => {
        if (typeof key === 'string') {
            setDataState(prev => ({ ...prev, [key]: value }));
        } else {
            setDataState(prev => ({ ...prev, ...key }));
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setProcessing(true);
        
        // Simulate API call
        setTimeout(() => {
            setProcessing(false);
            setWasSuccessful(true);
            setRecentlySuccessful(true);
            
            if (onSubmit) {
                onSubmit(e);
            }
            
            // Hide success message after 2 seconds
            setTimeout(() => {
                setRecentlySuccessful(false);
            }, 2000);
        }, 500);
    };

    return (
        <form {...props} className={className} onSubmit={handleSubmit}>
            {children({
                errors,
                hasErrors: Object.keys(errors).length > 0,
                processing,
                wasSuccessful,
                recentlySuccessful,
                clearErrors: () => setErrors({}),
                resetAndClearErrors: () => {
                    setErrors({});
                    setWasSuccessful(false);
                },
                defaults: {},
                data,
                setData,
            })}
        </form>
    );
}

// Mock useForm hook
export function useForm(initialData: any = {}) {
    const [data, setDataState] = useState(initialData);
    const [processing, setProcessing] = useState(false);
    const [wasSuccessful, setWasSuccessful] = useState(false);
    const [recentlySuccessful, setRecentlySuccessful] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const setData = (key: string | Record<string, any>, value?: any) => {
        if (typeof key === 'string') {
            setDataState(prev => ({ ...prev, [key]: value }));
        } else {
            setDataState(prev => ({ ...prev, ...key }));
        }
    };

    const submit = (method: string, url: string, options?: any) => {
        setProcessing(true);
        setTimeout(() => {
            setProcessing(false);
            setWasSuccessful(true);
            setRecentlySuccessful(true);
            setTimeout(() => setRecentlySuccessful(false), 2000);
        }, 500);
    };

    return {
        data,
        setData,
        errors,
        hasErrors: Object.keys(errors).length > 0,
        processing,
        wasSuccessful,
        recentlySuccessful,
        clearErrors: () => setErrors({}),
        reset: () => setDataState(initialData),
        setDefaults: () => {},
        transform: (callback: any) => {},
        submit,
        get: (url: string, options?: any) => submit('get', url, options),
        post: (url: string, options?: any) => submit('post', url, options),
        put: (url: string, options?: any) => submit('put', url, options),
        patch: (url: string, options?: any) => submit('patch', url, options),
        delete: (url: string, options?: any) => submit('delete', url, options),
    };
}

