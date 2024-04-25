import { useCallback } from 'react';
import { useNavigate, Outlet } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { apiGetHeroList } from '@/api/heroes';
import HeroList from '@/components/HeroList';

function HeroesPage() {
  const navigate = useNavigate();

  const { isFetching, data = [] } = useQuery({
    queryKey: [],
    queryFn: apiGetHeroList,
  });

  const onClick = useCallback(
    (id: string) => {
      navigate(`/heroes/${id}`);
    },
    [navigate],
  );

  if (isFetching) return 'Loading...';

  return (
    <>
      <HeroList list={data} onClick={onClick} />
      <Outlet />
    </>
  );
}

export default HeroesPage;
