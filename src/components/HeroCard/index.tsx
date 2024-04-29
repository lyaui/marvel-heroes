import { memo } from 'react';

import type { Hero } from '@/types/hero';
import {
  SHeroCardImage,
  SHeroCardTitle,
  SHeroCardContent,
  SHeroCard,
} from '@/components/HeroCard/styled';

type HeroCardProps = {
  hero: Hero;
  isSelected: boolean;
};

const HeroCard = memo(({ hero, isSelected }: HeroCardProps) => {
  const { name = '--', image = '' } = hero;

  return (
    <SHeroCard>
      <SHeroCardImage isSelected={isSelected}>
        <img src={image} alt={name} />
      </SHeroCardImage>
      <SHeroCardContent isSelected={isSelected}>
        <SHeroCardTitle>{name.toUpperCase()}</SHeroCardTitle>
      </SHeroCardContent>
    </SHeroCard>
  );
});

HeroCard.displayName = 'HeroCard';

export default HeroCard;
