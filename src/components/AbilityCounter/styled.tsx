import styled from 'styled-components';

export const SAbilityCounter = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  color: #ffffff;
  text-align: center;
  gap: 10px;
  opacity: 0.7;
  transition: all 0.3s;
  font-weight: 700;
  &:hover {
    opacity: 1;
  }
`;

export const SFigure = styled.span`
  color: #ffffff;
  font-size: 60px;

  @media (max-width: 480px) {
    font-size: 48px;
  }
`;

export const SCounterBtn = styled.button`
  background-color: unset;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;
