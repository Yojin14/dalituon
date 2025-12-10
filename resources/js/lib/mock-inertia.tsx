import { createContext, useContext, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import type { SharedData } from '@/types';

const mockSharedData: SharedData = {
    auth: {
        user: {
            id: 1,
            name: 'Demo User',
            email: 'demo@dalituon.edu.ph',
            email_verified_at: new Date().toISOString(),
            two_factor_enabled: false,
        }
    },
    app: {
        name: 'Dalituon LMS',
        url: window.location.origin,
    },
    theme: 'light',
};

const PageContext = createContext<any>({
    props: mockSharedData,
});

export function PageProvider({ children, pageProps = {} }: { children: ReactNode, pageProps?: any }) {
    const location = useLocation();
    
    return (
        <PageContext.Provider value={{ 
            props: { ...mockSharedData, ...pageProps },
            url: location.pathname,
            component: '',
            version: '',
        }}>
            {children}
        </PageContext.Provider>
    );
}

export function usePage<T = any>() {
    return useContext(PageContext);
}

export function MockHead({ title }: { title: string }) {
    document.title = title ? `${title} - Dalituon LMS` : 'Dalituon LMS';
    return null;
}

export const router = {
    visit: (url: string, options?: any) => {
        window.location.href = url;
    },
    get: (url: string, data?: any, options?: any) => {
        window.location.href = url;
    },
    post: (url: string, data?: any, options?: any) => {
        console.log('Mock POST:', url, data);
    },
    put: (url: string, data?: any, options?: any) => {
        console.log('Mock PUT:', url, data);
    },
    patch: (url: string, data?: any, options?: any) => {
        console.log('Mock PATCH:', url, data);
    },
    delete: (url: string, options?: any) => {
        console.log('Mock DELETE:', url);
    },
    reload: (options?: any) => {
        window.location.reload();
    },
};

