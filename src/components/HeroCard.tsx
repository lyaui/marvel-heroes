import { Link } from 'react-router-dom';

import type { Hero } from '@/types/hero';
import { ROUTER_PATH } from '@/routes';

type HeroCardProps = { hero: Hero };

const HeroCard = ({ hero }: HeroCardProps) => {
  const { name = '--', image = '', id = '' } = hero;

  return (
    <Link to={ROUTER_PATH.HERO_PROFILE.replace(':heroId', id)}>
      <p>{name.toUpperCase()}</p>
      <img src={image} alt={name} />
    </Link>
  );
};

export default HeroCard;
