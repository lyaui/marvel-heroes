import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';

import { router } from '@/routes';
import Header from '@/components/Layout/Header';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 600000, // 10 mins
      gcTime: 900000, // 15 mins
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
