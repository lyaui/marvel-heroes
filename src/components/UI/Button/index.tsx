import type {
  ReactNode,
  CSSProperties,
  ComponentPropsWithRef,
  MouseEvent,
  MouseEventHandler,
} from 'react';

import { SButton } from '@/components/UI/Button/styled';
import Spinner from '@/components/UI/Spinner';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  style?: CSSProperties;
  disabled?: boolean;
  isPending?: boolean;
}

function Button({
  children,
  onClick,
  style = {},
  disabled = false,
  isPending = false,
  ...others
}: ButtonProps) {
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    if (isPending) return;
    onClick && onClick(event);
  };

  return (
    <SButton
      onClick={handleClick}
      style={style}
      disabled={disabled}
      {...others}
    >
      {isPending ? <Spinner /> : children}
    </SButton>
  );
}

export default Button;
