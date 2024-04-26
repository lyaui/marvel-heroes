import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { apiGetHeroList } from '@/api/heroes';
import HeroCard from '@/components/HeroCard';

const HeroList = () => {
  const navigate = useNavigate();
  const { heroId } = useParams();

  const { isLoading, data = [] } = useQuery({
    queryKey: [],
    queryFn: apiGetHeroList,
  });

  const onClick = (id: string) => {
    if (heroId === id) return;
    navigate(`/heroes/${id}`);
  };

  if (isLoading) return 'Loading...';
  if (data.length === 0) return 'No Results';

  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
      {data.map((_hero) => (
        <li key={_hero.id} onClick={() => onClick(_hero.id)}>
          <HeroCard hero={_hero} isSelected={heroId === _hero.id} />
        </li>
      ))}
    </ul>
  );
};

export default HeroList;
