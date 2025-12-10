import { Link as RouterLink } from 'react-router-dom';
import { ReactNode, MouseEvent } from 'react';

interface MockLinkProps {
    href: string | { url: string };
    children: ReactNode;
    className?: string;
    as?: string;
    method?: string;
    preserveScroll?: boolean;
    [key: string]: any;
}

export function MockLink({ href, children, as, method, preserveScroll, ...props }: MockLinkProps) {
    const url = typeof href === 'string' ? href : href.url;
    
    // Handle button links
    if (as === 'button' || method) {
        return (
            <button
                {...props}
                onClick={(e: MouseEvent) => {
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

