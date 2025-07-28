import React from 'react';
import { createRoot } from 'react-dom/client';
import Application from './app/Application';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Optimized QueryClient configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById('app') as Element).render(
  <QueryClientProvider client={queryClient}>
    <Application />
  </QueryClientProvider>,
);
