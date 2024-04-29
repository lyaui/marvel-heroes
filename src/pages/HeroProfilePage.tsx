import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import sectionImg from '/public/assets/images/profile_section_bg_dsk.jpg';
import { SContainer } from '@/App.tsx';
import { SectionTitle } from '@/components/UI/Typography';
import AbilityPanel from '@/components/AbilityPanel';

const SHeroProfileSection = styled.section`
  background-color: #151515;
  padding: 20px 0;
  margin-top: 50px;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.6),
      rgba(0, 0, 0, 0.6)
    ),
    url(${sectionImg});

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: white;
`;

function HeroProfilePage() {
  const { heroId = '' } = useParams();

  return (
    <SHeroProfileSection>
      <SContainer>
        <SectionTitle color='light'>Profile</SectionTitle>
        <AbilityPanel heroId={heroId} />
      </SContainer>
    </SHeroProfileSection>
  );
}

export default HeroProfilePage;
