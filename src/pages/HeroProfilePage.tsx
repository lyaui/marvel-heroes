import { useParams } from 'react-router-dom';

import AbilityPanel from '@/components/AbilityPanel';

function HeroProfilePage() {
  const { heroId = '' } = useParams();

  return (
    <>
      <AbilityPanel heroId={heroId} />
    </>
  );
}

export default HeroProfilePage;
