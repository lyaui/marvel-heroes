import type { CSSProperties } from 'react';

import { SSpinner } from '@/components/UI/Spinner/styled';

type SpinnerProps = {
  width?: number;
  style?: CSSProperties;
};

function Spinner({ width, style = {} }: SpinnerProps) {
  return <SSpinner width={width} style={style} />;
}

export default Spinner;
