import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ROUTER_PATH from '@/constants/routerPath';
const HomePage = React.lazy(() => import('@/pages/HomePage'));
const HeroesPage = React.lazy(() => import('@/pages/HeroesPage'));
const HeroProfilePage = React.lazy(() => import('@/pages/HeroProfilePage'));
const ErrorPage = React.lazy(() => import('@/pages/ErrorPage'));

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
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

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
