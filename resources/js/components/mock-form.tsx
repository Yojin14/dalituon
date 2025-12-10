import { FormEvent, ReactNode, useState } from 'react';

interface MockFormProps {
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
    }) => ReactNode;
    options?: any;
    className?: string;
    onSubmit?: (e: FormEvent) => void;
}

export function MockForm({ children, className, onSubmit, ...props }: MockFormProps) {
    const [processing, setProcessing] = useState(false);
    const [wasSuccessful, setWasSuccessful] = useState(false);
    const [recentlySuccessful, setRecentlySuccessful] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

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
            })}
        </form>
    );
}

