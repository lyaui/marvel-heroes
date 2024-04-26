import { useNavigate, useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';

import QUERY_KEYS from '@/constants/queryKeys';
import { apiGetHeroList } from '@/api/heroes';
import HeroCard from '@/components/HeroCard';

const data = [
  {
    id: '1',
    name: 'Daredevil',
    image:
      'http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg',
  },
  {
    id: '2',
    name: 'Thor',
    image:
      'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg',
  },
  {
    id: '3',
    name: 'Iron Man',
    image:
      'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg',
  },
  {
    id: '4',
    name: 'Hulk',
    image:
      'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg',
  },
  // {
  //   id: '1',
  //   name: 'Daredevil',
  //   image:
  //     'http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg',
  // },
  // {
  //   id: '2',
  //   name: 'Thor',
  //   image:
  //     'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/537bc7036ab02/standard_xlarge.jpg',
  // },
  // {
  //   id: '3',
  //   name: 'Iron Man',
  //   image:
  //     'http://i.annihil.us/u/prod/marvel/i/mg/6/a0/55b6a25e654e6/standard_xlarge.jpg',
  // },
  // {
  //   id: '4',
  //   name: 'Hulk',
  //   image:
  //     'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0/standard_xlarge.jpg',
  // },
];

const SHeroList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  & li {
    width: calc(100% / 5 - 10px);
  }
`;

const HeroList = () => {
  const navigate = useNavigate();
  const { heroId } = useParams();

  // const { isLoading, data = [] } = useQuery({
  //   queryKey: [QUERY_KEYS.HERO_LIST],
  //   queryFn: apiGetHeroList,
  // });

  const onClick = (id: string) => {
    if (heroId === id) return;
    navigate(`/heroes/${id}`);
  };

  // if (isLoading) return 'Loading...';
  // if (data.length === 0) return 'No Results';

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
