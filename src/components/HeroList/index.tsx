import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { SHeroList } from '@/components/HeroList/styled';
import QUERY_KEYS from '@/constants/queryKeys';
import { apiGetHeroList } from '@/api/heroes';
import Typography from '@/components/UI/Typography';
import HeroCard from '@/components/HeroCard';

const HeroList = () => {
  const navigate = useNavigate();
  const { heroId } = useParams();

  const { isLoading, data = [] } = useQuery({
    queryKey: [QUERY_KEYS.HERO_LIST],
    queryFn: apiGetHeroList,
  });

  const onClick = (id: string) => {
    if (heroId === id) return;
    navigate(`/heroes/${id}`);
  };

  if (isLoading) return 'Loading...';
  if (data.length === 0) {
    return (
      <Typography style={{ textAlign: 'center', padding: 40 }}>
        No result found
      </Typography>
    );
  }

  return (
    <SHeroList>
      {data.map((_hero) => (
        <li key={_hero.id} onClick={() => onClick(_hero.id)}>
          <HeroCard hero={_hero} isSelected={heroId === _hero.id} />
        </li>
      ))}
    </SHeroList>
  );
};

export default HeroList;
