import { Outlet } from 'react-router-dom';

import { SContainer } from '@/App.tsx';
import { SectionTitle } from '@/components/UI/Typography';
import HeroList from '@/components/HeroList';

function HeroesPage() {
  return (
    <>
      <SContainer>
        <SectionTitle>marvel heroes</SectionTitle>
        <HeroList />
      </SContainer>
      <Outlet />
    </>
  );
}

export default HeroesPage;
