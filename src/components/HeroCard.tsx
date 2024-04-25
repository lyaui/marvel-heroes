import type { Hero } from '@/types/hero';

type HeroCardProps = {
  hero: Hero;
  onClick: (id: string) => void;
};

const HeroCard = ({ hero, onClick }: HeroCardProps) => {
  const { name = '--', image = '', id = '' } = hero;

  return (
    <div onClick={() => onClick(id)}>
      <p>{name.toUpperCase()}</p>
      <img src={image} alt={name} />
    </div>
  );
};

export default HeroCard;
