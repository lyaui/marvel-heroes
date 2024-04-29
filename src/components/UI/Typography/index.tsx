import type { ReactNode, CSSProperties } from 'react';

import { STypography, SSectionTitle } from '@/components/UI/Typography/styled';

type Size = 'ex-large' | 'large' | 'medium' | 'small';
type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
type color = 'light' | 'dark';

export type TypographyProps = {
  as?: Tag;
  size?: Size;
  color?: color;
  style?: CSSProperties;
  children: ReactNode;
};

export type SectionTitleProps = Omit<TypographyProps, 'size'>;

export const SectionTitle = ({
  as = 'h3',
  color = 'dark',
  children,
}: TypographyProps) => {
  return (
    <SSectionTitle size='large' as={as} color={color}>
      {children}
    </SSectionTitle>
  );
};
function Typography({
  children = '',
  size = 'medium',
  color = 'dark',
  style = {},
  ...others
}: TypographyProps) {
  return (
    <STypography size={size} color={color} style={style} {...others}>
      {children}
    </STypography>
  );
}

export default Typography;
