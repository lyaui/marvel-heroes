import styled from 'styled-components';

export const SAbilityCounter = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--color-white);
  text-align: center;
  gap: 10px;
  opacity: 0.7;
  transition: var(--transition);
  font-weight: var(--font-bold);
  &:hover {
    opacity: 1;
  }
`;

export const SFigure = styled.span`
  color: var(--color-white);
  font-size: var(--text-xl);

  @media (max-width: 480px) {
    font-size: var(--text-gl);
  }
`;

export const SCounterBtn = styled.button`
  background-color: unset;
  border: none;
  color: white;
  font-size: var(--text-md);
  cursor: pointer;
`;
