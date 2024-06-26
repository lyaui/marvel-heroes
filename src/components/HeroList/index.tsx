import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import ROUTER_PATH from '@/constants/routerPath';
import { SHeroList } from '@/components/HeroList/styled';
import QUERY_KEYS from '@/constants/queryKeys';
import { apiGetHeroList } from '@/api/heroes';
import Typography from '@/components/UI/Typography';
import HeroCard from '@/components/HeroCard';

export const SkeletonHeroList = () => (
  <SkeletonTheme
    baseColor='var(--color-skeleton-bg)'
    highlightColor='var(--color-skeleton-highlight-bg)'
  >
    {Array.from(Array(5).keys()).map((index) => (
      <div key={index}>
        <Skeleton style={{ marginBottom: '10px' }} height={200} width='100%' />
        <Skeleton height={50} width='100%' />
      </div>
    ))}
  </SkeletonTheme>
);

const HeroList = () => {
  const navigate = useNavigate();
  const { heroId } = useParams();

  const { isPending, data = [] } = useQuery({
    queryKey: [QUERY_KEYS.HERO_LIST],
    queryFn: apiGetHeroList,
  });

  const onClick = (id: string) => {
    if (heroId === id) return;
    navigate(ROUTER_PATH.HERO_PROFILE.replace(':heroId', id));
  };

  if (isPending) {
    return (
      <SHeroList>
        <SkeletonHeroList />
      </SHeroList>
    );
  }

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
