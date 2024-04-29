import styled from 'styled-components';

export const SHeroCardImage = styled.div<{ isSelected: boolean }>`
  height: 200px;
  overflow: hidden;
  cursor: pointer;
  background-color: var(--color-white);

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
  color: var(--color-white);
  font-weight: var(--font-bold);
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
    transition: var(--transition);
    background-color: var(
      ${(props) => (props.isSelected ? '--color-primary' : '--color-text-dark')}
    );
  }
`;

export const SHeroCard = styled.ul`
  position: relative;
  height: 255px;
  background-color: var(--color-primary);
  cursor: pointer;

  &:before {
    position: absolute;
    z-index: 1;
    content: '';
    bottom: -1px;
    right: -1px;
    border-bottom: 17px solid var(--color-bg);
    border-left: 17px solid transparent;
  }

  &:hover img {
    transform: scale(1.05);
    transition: var(--transition);
  }

  &:hover ${SHeroCardContent}::before {
    height: 0%;
  }
`;
