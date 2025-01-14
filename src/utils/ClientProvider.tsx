'use client'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

export default function ClientProvider({children}: {children: React.ReactNode}) {
    const queryClient = new QueryClient();

    return(
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
    )
}