import { createElement } from 'react';
import styled from 'styled-components';

import { TypographyProps } from '@/components/UI/Typography';

export const STypography = styled(
  ({ as = 'p', children, ...props }: TypographyProps) =>
    createElement(as, props, children),
)`
  color: ${(props) =>
    props.color === 'light'
      ? 'var(--color-text-light)'
      : 'var(--color-text-dark)'};
  line-height: 1.5;
  margin: ${(props) => {
    if (props.size === 'ex-large' || props.size === 'large') return '10px 0';
    return 0;
  }};
  font-size: ${(props) => {
    if (props.size === 'ex-large') return '4rem';
    if (props.size === 'large') return '2.4rem';
    if (props.size === 'small') return '1.4rem';
    return '1.6rem';
  }};
  text-transform: ${(props) => {
    if (props.size === 'ex-large' || props.size === 'large') return 'uppercase';
    return 'unset';
  }};
  letter-spacing: ${(props) => {
    if (props.size === 'ex-large') return '5px';
    if (props.size === 'large') return '1px';
    return 'unset';
  }};
  font-weight: ${(props) => {
    if (props.size === 'ex-large' || props.size === 'large') return 800;
    return 'unset';
  }};
`;

export const SSectionTitle = styled(STypography)`
  position: relative;
  height: 66px;
  line-height: 66px;
  text-transform: uppercase;

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
