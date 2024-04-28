import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { SContainer } from '@/App.tsx';
import HeroList from '@/components/HeroList';

export const SSectionTitle = styled.h3<{ color?: 'light' | 'dark' }>`
  position: relative;
  height: 66px;
  line-height: 66px;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1px;
  color: ${(props) => (props.color === 'light' ? '#ffffff' : '#151515')};

  &:before,
  &:after {
    content: '';
    position: absolute;
    background-color: #f5c772;
    height: 3px;
    transform: rotate(-45deg) skewX(45deg);
  }

  &:before {
    top: 10px;
    left: 40px;
    width: 20px;
  }

  &:after {
    bottom: 10px;
    left: 0px;
    width: 20px;
  }
`;

function HeroesPage() {
  return (
    <>
      <SContainer>
        <SSectionTitle>marvel heroes</SSectionTitle>
        <HeroList />
      </SContainer>
      <Outlet />
    </>
  );
}

export default HeroesPage;
