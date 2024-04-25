import { memo } from 'react';

import type { Hero } from '@/types/hero';

type HeroCardProps = {
  hero: Hero;
  isSelected: boolean;
};

const HeroCard = memo(({ hero, isSelected }: HeroCardProps) => {
  const { name = '--', image = '' } = hero;

  return (
    <div style={{ backgroundColor: isSelected ? 'pink' : 'white' }}>
      <p>{name.toUpperCase()}</p>
      <img src={image} alt={name} />
    </div>
  );
});

HeroCard.displayName = 'HeroCard';

export default HeroCard;
