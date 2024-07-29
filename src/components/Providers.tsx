'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export default function Providers({ children, isDev }: { children: React.ReactNode; isDev: boolean }) {
    return (
        <QueryClientProvider client={queryClient}>
            {children} {isDev && <ReactQueryDevtools />}
        </QueryClientProvider>
    );
}
