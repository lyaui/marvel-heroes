import styled from 'styled-components';

export const SAbilityCounter = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  color: #ffffff;
  text-align: center;
  gap: 10px;
  opacity: 0.7;
  transition: all 0.3s;
  &:hover {
    opacity: 1;
  }
`;

export const SFigure = styled.span`
  color: #ffffff;
  font-size: 80px;
  font-weight: 700;
`;

export const SCounterBtn = styled.button`
  background-color: unset;
  border: none;
  color: white;
  font-size: 20px;
  cursor: pointer;
`;
