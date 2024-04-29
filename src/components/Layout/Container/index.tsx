import type { ReactNode, CSSProperties } from 'react';

import { SContainer } from '@/components/Layout/Container/styled';

type ContainerProps = { children: ReactNode; style?: CSSProperties };
function Container({ children, style = {} }: ContainerProps) {
  return <SContainer style={style}>{children}</SContainer>;
}

export default Container;
