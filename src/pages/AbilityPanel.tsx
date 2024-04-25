import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';

import type { HeroProfile } from '@/types/hero';
import { apiGetHeroProfile } from '@/api/heroes';
import calcTotalPoints from '@/utils/calcTotalPoints';
import AbilityCounter from '@/pages/AbilityCounter';
import SaveButton from '@/pages/SaveButton';

type AbilityPanelProps = {
  heroId: string;
};

function AbilityPanel({ heroId }: AbilityPanelProps) {
  const [editingAbility, setEditingAbility] = useState<HeroProfile | null>(
    null,
  );
  const [errorMsg, setErrorMsg] = useState('');

  const { isPending, data } = useQuery({
    enabled: !!heroId,
    queryKey: [heroId],
    queryFn: () => apiGetHeroProfile(heroId),
  });

  const totalPoints = data ? calcTotalPoints(data) : 0;
  const restPoints = totalPoints - calcTotalPoints(editingAbility);

  const handleUpdateAbility = (name: keyof HeroProfile, value: number) => {
    setErrorMsg('');

    if (!editingAbility) return;

    const updateVal = { ...editingAbility, [name]: value };
    const updateTotal = calcTotalPoints(updateVal);

    if (updateTotal > totalPoints) {
      setErrorMsg('No point available');
      return;
    }

    setEditingAbility(updateVal);
  };

  useEffect(() => {
    if (!data) return;
    setEditingAbility(data);
  }, [data]);

  if (isPending) return 'Loading';

  return (
    <>
      {`totalPoints: ${totalPoints}`}
      {`restPoints: ${restPoints}`}
      {editingAbility &&
        Object.entries(editingAbility).map(([_key, _value]) => (
          <AbilityCounter
            key={_key}
            name={_key as keyof HeroProfile}
            value={_value}
            onUpdate={handleUpdateAbility}
          />
        ))}
      <SaveButton />
      {errorMsg}
    </>
  );
}

export default AbilityPanel;
