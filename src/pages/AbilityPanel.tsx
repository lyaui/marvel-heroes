import { useQuery } from '@tanstack/react-query';

import type { HeroProfile } from '@/types/hero';
import { apiGetHeroProfile } from '@/api/heroes';

import AbilityCounter from '@/pages/AbilityCounter';
import SaveButton from '@/pages/SaveButton';

type AbilityPanelProps = {
  heroId: string;
};

function AbilityPanel({ heroId }: AbilityPanelProps) {
  const { isPending, data = {} as HeroProfile } = useQuery({
    enabled: !!heroId,
    queryKey: [heroId],
    queryFn: () => apiGetHeroProfile(heroId),
  });

  const totalPoints = Object.values(data).reduce(
    (_acc, _cur = 0) => _acc + _cur,
    0,
  );

  if (isPending) return 'Loading';

  return (
    <>
      {Object.entries(data).map(([_key, _value]) => (
        <AbilityCounter key={_key} label={_key} value={_value} />
      ))}
      <SaveButton />
    </>
  );
}

export default AbilityPanel;
