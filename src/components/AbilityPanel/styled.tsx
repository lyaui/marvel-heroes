import styled from 'styled-components';

export const SAbilityPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const SCounterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  & > * {
    text-align: center;
  }
`;
