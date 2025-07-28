import React from 'react';
import { createRoot } from 'react-dom/client';
import Application from './app/Application';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const MINS_5 = 5 * 60 * 1000;
const MINS_10 = 10 * 60 * 1000;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: MINS_5,
      gcTime: MINS_10,
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
