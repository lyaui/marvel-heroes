import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import HeroList from '@/components/HeroList';

const SSectionTitle = styled.h3`
  height: 66px;
  line-height: 66px;
  position: relative;
  text-transform: uppercase;
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 1px;

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
      <SSectionTitle>marvel heroes</SSectionTitle>
      <HeroList />
      <Outlet />
    </>
  );
}

export default HeroesPage;
