import type { Hero } from '@/types/hero';
import HeroCard from '@/components/HeroCard';

type HeroListProps = {
  list: Hero[];
};

const HeroList = ({ list = [] }: HeroListProps) => {
  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
      {list.map((_hero) => (
        <li key={_hero.id}>
          <HeroCard hero={_hero} />
        </li>
      ))}
    </ul>
  );
};

export default HeroList;
