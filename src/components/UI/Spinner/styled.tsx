import styled from 'styled-components';

export const SSpinner = styled.div<{ width?: number }>`
  margin: 0 auto;
  width: ${(props) => (props.width ? `${props.width}px` : '30px')};
  padding: 3px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--color-gray-300);
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;

  @keyframes l3 {
    to {
      transform: rotate(1turn);
    }
  }
`;
