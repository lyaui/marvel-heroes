import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { SContainer } from '@/App.tsx';
import { SSectionTitle } from '@/pages/HeroesPage';
import AbilityPanel from '@/components/AbilityPanel';

const SHeroProfileSection = styled.section`
  background-color: #151515;
  padding: 20px 0;
  margin-top: 50px;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url(http://i.annihil.us/u/prod/marvel/i/mg/6/90/537ba6d49472b/standard_xlarge.jpg);

  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  color: white;
`;

function HeroProfilePage() {
  const { heroId = '' } = useParams();

  return (
    <SHeroProfileSection>
      <SContainer>
        <SSectionTitle color='light'>Profile</SSectionTitle>
        <AbilityPanel heroId={heroId} />
      </SContainer>
    </SHeroProfileSection>
  );
}

export default HeroProfilePage;
