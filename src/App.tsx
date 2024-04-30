import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Router from '@/routes';
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
      <Router />
    </QueryClientProvider>
  );
}

export default App;
