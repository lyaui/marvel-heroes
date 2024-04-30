import { Suspense } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Router from '@/routes';
import Header from '@/components/Layout/Header';
import Spinner from '@/components/UI/Spinner';

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
      <Suspense fallback={<Spinner style={{ marginTop: 100 }} width={50} />}>
        <Router />
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
