import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import HeroList from '@/components/HeroList';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      ... <HeroList />
    </QueryClientProvider>
  );
}

export default App;
