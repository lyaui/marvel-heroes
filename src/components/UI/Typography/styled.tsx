import { createElement } from 'react';
import styled from 'styled-components';

import { TypographyProps } from '@/components/UI/Typography';

export const STypography = styled(
  ({ as = 'p', children, ...props }: TypographyProps) =>
    createElement(as, props, children),
)`
  color: ${(props) => (props.color === 'light' ? '#ffffff' : '#151515')};
  margin: ${(props) => {
    if (props.size === 'ex-large') return '30px 0';
    if (props.size === 'large') return '20px 0';
    return 0;
  }};
  font-size: ${(props) => {
    if (props.size === 'ex-large') return '40px';
    if (props.size === 'large') return '24px';
    return '16px';
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
