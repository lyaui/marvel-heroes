import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import styled from 'styled-components';

import { router } from '@/routes';

const SContainer = styled.div`
  max-width: 1200px;
  height: 100vh;
  padding: 20px;
  margin: 0 auto;
`;

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
      <SContainer>
        <RouterProvider router={router} />
      </SContainer>
    </QueryClientProvider>
  );
}

export default App;
