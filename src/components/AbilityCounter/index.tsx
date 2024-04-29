import { memo } from 'react';
import {
  SAbilityCounter,
  SFigure,
  SCounterBtn,
} from '@/components/AbilityCounter/styled';
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
      <SAbilityCounter>
        <SCounterBtn onClick={handleIncrementClick}>
          <i className='fa-solid fa-caret-up' />
        </SCounterBtn>
        <SFigure>{value}</SFigure>
        <SCounterBtn onClick={handleDecrementClick}>
          <i className='fa-solid fa-caret-down' />
        </SCounterBtn>
        <span>{`${name ? name.toUpperCase() : '--'}`}</span>
      </SAbilityCounter>
    );
  },
);

AbilityCounter.displayName = 'AbilityCounter';

export default AbilityCounter;
