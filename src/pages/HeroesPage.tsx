import { Outlet } from 'react-router-dom';

import HeroList from '@/components/HeroList';

function HeroesPage() {
  return (
    <>
      <HeroList />
      <Outlet />
    </>
  );
}

export default HeroesPage;
