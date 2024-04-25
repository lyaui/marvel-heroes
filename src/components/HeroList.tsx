import type { ReactNode } from 'react';

type HeroListProps = {
  children: ReactNode;
};

const HeroList = ({ children }: HeroListProps) => {
  return <ul style={{ display: 'flex', flexWrap: 'wrap' }}>{children}</ul>;
};

export default HeroList;
