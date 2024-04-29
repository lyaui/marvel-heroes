import { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import styled from 'styled-components';

import { router } from '@/routes';
import img_dsk from '/public/assets/images/header_bg_dsk.jpg';
import Typography from '@/components/UI/Typography';

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
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 600px) {
    height: 200px;
  }
`;

export const SContainer = styled.div`
  max-width: 1200px;
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
  useEffect(() => {}, []);
  return (
    <QueryClientProvider client={queryClient}>
      <SHeader>
        <SContainer>
          <Typography size='ex-large' color='light' as='h1'>
            marvel
          </Typography>
          <Typography color='light'>
            Get hooked on a hearty helping of heroes and villains from the
            humble House of Ideas!
          </Typography>
        </SContainer>
      </SHeader>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
