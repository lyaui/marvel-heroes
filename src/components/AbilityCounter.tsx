import { memo } from 'react';
import styled from 'styled-components';

import type { HeroProfile } from '@/types/hero';

export const SAbilityCounter = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  text-align: center;
  gap: 10px;
  opacity: 0.7;
  transition: all 0.3s;
  &:hover {
    opacity: 1;
  }
`;

const SFigure = styled.span`
  color: #ffffff;
  font-size: 80px;
  font-weight: 700;
`;

const SCounterBtn = styled.button`
  background-color: unset;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;

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
          <i className='fa-solid fa-caret-up'></i>
        </SCounterBtn>
        <SFigure>{value}</SFigure>
        <SCounterBtn onClick={handleDecrementClick}>
          <i className='fa-solid fa-caret-down'></i>
        </SCounterBtn>
        <span>{`${name ? name.toUpperCase() : '--'}`}</span>
      </SAbilityCounter>
    );
  },
);

AbilityCounter.displayName = 'AbilityCounter';

export default AbilityCounter;
