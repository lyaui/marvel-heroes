import { useNavigate, useParams, Outlet } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { apiGetHeroList } from '@/api/heroes';
import HeroList from '@/components/HeroList';
import HeroCard from '@/components/HeroCard';

function HeroesPage() {
  const navigate = useNavigate();
  const { heroId } = useParams();

  const { isFetching, data = [] } = useQuery({
    queryKey: [],
    queryFn: apiGetHeroList,
  });

  const onClick = (id: string) => {
    if (heroId === id) return;
    navigate(`/heroes/${id}`);
  };

  if (isFetching) return 'Loading...';

  return (
    <>
      <HeroList>
        {data.map((_hero) => (
          <li key={_hero.id} onClick={() => onClick(_hero.id)}>
            <HeroCard hero={_hero} isSelected={heroId === _hero.id} />
          </li>
        ))}
      </HeroList>
      <Outlet />
    </>
  );
}

export default HeroesPage;
