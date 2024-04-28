import styled from 'styled-components';

export const SButton = styled.button<{ disabled: boolean }>`
  position: relative;
  height: 46px;
  min-width: 100px;
  padding: 0 10px;
  text-transform: uppercase;
  cursor: ${(props) => (props.disabled ? 'unset' : 'pointer')};
  line-height: 46px;
  background-color: ${(props) => (props.disabled ? '#cccccc' : '#e62429')};
  margin-left: 15px;
  border: none;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  transition: all 0.3s;

  &:hover:enabled {
    filter: brightness(1.25);
  }

  &:active:enabled {
    filter: brightness(0.9);
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    height: 46px;
    width: 15px;
    background-color: inherit;
  }

  &:before {
    left: -14.8px;
    clip-path: polygon(0 30%, 100% 0, 100% 100%, 0 100%);
  }

  &:after {
    right: -14.8px;
    clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
  }
`;
