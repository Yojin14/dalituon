import { createContext, useContext, ReactNode } from 'react';
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

const MockInertiaContext = createContext<any>({
    props: mockSharedData,
});

export function MockInertiaProvider({ children, pageProps = {} }: { children: ReactNode, pageProps?: any }) {
    return (
        <MockInertiaContext.Provider value={{ 
            props: { ...mockSharedData, ...pageProps },
            url: window.location.pathname,
            component: '',
            version: '',
        }}>
            {children}
        </MockInertiaContext.Provider>
    );
}

export function useMockPage<T = any>() {
    return useContext(MockInertiaContext);
}

