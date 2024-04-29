import { useState, useEffect, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';

import QUERY_KEYS from '@/constants/queryKeys';
import type { HeroProfile } from '@/types/hero';
import { apiGetHeroProfile } from '@/api/heroes';
import {
  SAbilityPanel,
  SCounterWrapper,
} from '@/components/AbilityPanel/styled';
import calcTotalPoints from '@/utils/calcTotalPoints';
import AbilityCounter from '@/components/AbilityCounter';
import SaveButton from '@/components/SaveButton';

type AbilityPanelProps = {
  heroId: string;
};

function AbilityPanel({ heroId }: AbilityPanelProps) {
  const [editingAbility, setEditingAbility] = useState<HeroProfile | null>(
    null,
  );

  const { isPending, data } = useQuery({
    enabled: !!heroId,
    queryKey: [QUERY_KEYS.HERO_PROFILE, heroId],
    queryFn: () => apiGetHeroProfile(heroId),
  });

  const totalPoints = data ? calcTotalPoints(data) : 0;
  const restPoints = totalPoints - calcTotalPoints(editingAbility);

  const handleUpdateAbility = useCallback(
    (name: keyof HeroProfile, value: number) => {
      setEditingAbility((_preState) => {
        if (!_preState) return _preState;

        const updateVal = { ..._preState, [name]: value };
        const updateTotal = calcTotalPoints(updateVal);

        if (updateTotal > totalPoints) return _preState;

        return updateVal;
      });
    },
    [totalPoints],
  );

  useEffect(() => {
    if (!data) return;
    setEditingAbility(data);
  }, [data]);

  if (isPending) return 'Loading';
  if (!editingAbility) return null;

  return (
    <SAbilityPanel>
      <SCounterWrapper>
        {Object.entries(editingAbility).map(([_key, _value]) => (
          <AbilityCounter
            key={_key}
            name={_key as keyof HeroProfile}
            value={_value}
            onUpdate={handleUpdateAbility}
          />
        ))}
      </SCounterWrapper>

      <SaveButton
        editingAbility={editingAbility}
        heroId={heroId}
        restPoints={restPoints}
      />
    </SAbilityPanel>
  );
}

export default AbilityPanel;
