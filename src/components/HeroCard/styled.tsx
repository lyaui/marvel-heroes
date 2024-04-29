import styled from 'styled-components';

export const SHeroCardImage = styled.div<{ isSelected: boolean }>`
  height: 200px;
  overflow: hidden;
  cursor: pointer;
  background-color: #ffffff;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    mix-blend-mode: ${(props) => (props.isSelected ? 'unset' : 'hard-light')};
    filter: ${(props) =>
      props.isSelected ? 'unset' : ' grayscale(100%) contrast(.8)'};
  }
`;

export const SHeroCardTitle = styled.p`
  width: 100%;
  position: absolute;
  padding: 16px;
  color: #ffffff;
  font-weight: 700;
  z-index: 1;
`;

export const SHeroCardContent = styled.div<{ isSelected: boolean }>`
  position: absolute;
  bottom: 0;
  height: 50px;
  width: 100%;

  &:before {
    position: absolute;
    content: '';
    height: 50px;
    width: 100%;
    bottom: 0;
    transition: all 0.3s;
    background-color: ${(props) => (props.isSelected ? '#e62429' : '#151515')};
  }
`;

export const SHeroCard = styled.ul`
  position: relative;
  height: 255px;
  background-color: #e62429;
  cursor: pointer;

  &:before {
    position: absolute;
    z-index: 1;
    content: '';
    bottom: -1px;
    right: -1px;
    border-bottom: 17px solid #ffffff;
    border-left: 17px solid transparent;
  }

  &:hover img {
    transform: scale(1.05);
    transition: all 0.3s;
  }

  &:hover ${SHeroCardContent}::before {
    height: 0%;
  }
`;
