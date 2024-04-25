import { memo } from 'react';
import type { HeroProfile } from '@/types/hero';

type AbilityCounterProps = {
  name: keyof HeroProfile;
  value: number;
  onUpdate: (name: keyof HeroProfile, value: number) => void;
};

const AbilityCounter = memo(
  ({ name, value, onUpdate }: AbilityCounterProps) => {
    const handleDecrementClick = () => {
      const updateVal = value - 1;
      if (updateVal < 0) return;
      onUpdate(name, updateVal);
    };

    const handleIncrementClick = () => {
      const updateVal = value + 1;
      onUpdate(name, updateVal);
    };

    return (
      <div>
        <span>{`${name ? name.toUpperCase() : '--'}:`}</span>
        <button onClick={handleDecrementClick}>-</button>
        <span>{value}</span>
        <button onClick={handleIncrementClick}>+</button>
      </div>
    );
  },
);

export default AbilityCounter;
