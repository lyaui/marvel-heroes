import { useParams } from 'react-router-dom';

import AbilityPanel from '@/pages/AbilityPanel';

function HeroProfilePage() {
  const { heroId = '' } = useParams();

  return (
    <>
      <AbilityPanel heroId={heroId} />
    </>
  );
}

export default HeroProfilePage;
