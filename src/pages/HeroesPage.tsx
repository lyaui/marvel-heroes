import { Outlet } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { apiGetHeroList } from '@/api/heroes';
import HeroList from '@/components/HeroList';

function HeroesPage() {
  const { isFetching, data = [] } = useQuery({
    queryKey: [],
    queryFn: apiGetHeroList,
  });

  if (isFetching) return 'Loading...';

  return (
    <>
      <HeroList list={data} />
      <Outlet />
    </>
  );
}

export default HeroesPage;
