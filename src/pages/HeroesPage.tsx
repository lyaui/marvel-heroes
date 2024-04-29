import { Outlet } from 'react-router-dom';

import { SectionTitle } from '@/components/UI/Typography';
import Container from '@/components/Layout/Container';
import HeroList from '@/components/HeroList';

function HeroesPage() {
  return (
    <>
      <Container>
        <SectionTitle>marvel heroes</SectionTitle>
        <HeroList />
      </Container>
      <Outlet />
    </>
  );
}

export default HeroesPage;
