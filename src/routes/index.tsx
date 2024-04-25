import { createBrowserRouter } from 'react-router-dom';

// TODO
import HeroesPage from '@/pages/HeroesPage';
import HeroProfilePage from '@/pages/HeroProfilePage';
import ErrorPage from '@/pages/ErrorPage';

export const ROUTER_PATH = {
  HEROES: '/heroes',
  HERO_PROFILE: '/heroes/:heroId',
};

export const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      {
        element: <HeroesPage />,
        path: ROUTER_PATH.HEROES,
        children: [
          {
            element: <HeroProfilePage />,
            path: ROUTER_PATH.HERO_PROFILE,
          },
        ],
      },
    ],
  },
]);
