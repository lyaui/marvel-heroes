import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import styled from 'styled-components';

import { router } from '@/routes';
import img_dsk from '/public/assets/images/header_bg_dsk.jpg';

const SHeader = styled.header`
  height: 240px;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      rgba(230, 36, 41, 0.2)
    ),
    url(${img_dsk});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: white;
  text-align: center;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & h2 {
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 800;
    letter-spacing: 5px;
  }
`;

export const SContainer = styled.div`
  max-width: 1200px;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
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
      <SHeader>
        <SContainer>
          <h2>marvel</h2>
          <p>
            Get hooked on a hearty helping of heroes and villains from the
            humble House of Ideas!
          </p>
        </SContainer>
      </SHeader>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
