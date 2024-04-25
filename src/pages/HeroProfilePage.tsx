import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import type { HeroProfile } from '@/types/hero';
import { apiGetHeroProfile } from '@/api/heroes';

function HeroProfilePage() {
  const { heroId = '' } = useParams();

  const { isPending, data = {} as HeroProfile } = useQuery({
    enabled: !!heroId,
    queryKey: [heroId],
    queryFn: () => apiGetHeroProfile(heroId),
  });

  if (isPending) return 'Loading';

  return (
    <div>
      {Object.entries(data).map(([_key, _value]) => (
        <div>{`${_key ? _key.toUpperCase() : '--'}: ${_value ?? '--'}`}</div>
      ))}
    </div>
  );
}

export default HeroProfilePage;
