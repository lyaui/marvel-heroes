import styled from 'styled-components';

import img_dsk from '/public/assets/images/header_bg_dsk.jpg';

export const SHeader = styled.header`
  height: 240px;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      rgba(230, 36, 41, 0.2)
    ),
    url(${img_dsk});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 600px) {
    height: 200px;
  }
`;
