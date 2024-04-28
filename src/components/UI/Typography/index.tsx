import type { ReactNode } from 'react';

import { STypography, SSectionTitle } from '@/components/UI/Typography/styled';

type Size = 'ex-large' | 'large' | 'medium' | 'small';
type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
type color = 'light' | 'dark';

export type TypographyProps = {
  as?: Tag;
  size?: Size;
  color?: color;
  children: ReactNode;
};

export type SectionTitleProps = {
  as?: Tag;
  size?: Size;
  color?: 'light' | 'dark';
  children: ReactNode;
};

export const SectionTitle = ({
  color = 'dark',
  children,
}: SectionTitleProps) => {
  return (
    <SSectionTitle size='large' color={color}>
      {children}
    </SSectionTitle>
  );
};
function Typography({
  children = '',
  size = 'medium',
  color = 'dark',
  ...others
}: TypographyProps) {
  return (
    <STypography size={size} color={color} {...others}>
      {children}
    </STypography>
  );
}

export default Typography;
