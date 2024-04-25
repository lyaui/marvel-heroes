import { memo } from 'react';
import type { Hero } from '@/types/hero';
import HeroCard from '@/components/HeroCard';

type HeroListProps = {
  list: Hero[];
  onClick: (id: string) => void;
};

const HeroList = memo(({ list = [], onClick }: HeroListProps) => {
  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
      {list.map((_hero) => (
        <li key={_hero.id}>
          <HeroCard hero={_hero} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
});

export default HeroList;
