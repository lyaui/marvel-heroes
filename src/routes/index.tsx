import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

// TODO
const HeroesPage = lazy(() => import('@/pages/HeroesPage'));
const HeroProfile = lazy(() => import('@/pages/HeroProfile'));
const ErrorPage = lazy(() => import('@/pages/ErrorPage'));

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
            element: <HeroProfile />,
            path: ROUTER_PATH.HERO_PROFILE,
          },
        ],
      },
    ],
  },
]);
