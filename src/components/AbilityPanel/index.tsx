import { useState, useEffect, useCallback } from 'react';
import { useQuery } from '@tanstack/react-query';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { useParams } from 'react-router-dom';

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
import Typography from '@/components/UI/Typography';

export const SkeletonCounter = () => (
  <SkeletonTheme
    baseColor='var(--color-skeleton-dark-bg)'
    highlightColor='var(--color-skeleton-highlight-dark-bg)'
  >
    <SCounterWrapper>
      {Array.from(Array(4).keys()).map((index) => (
        <Skeleton key={index} height={160} width='100%' />
      ))}
    </SCounterWrapper>
  </SkeletonTheme>
);

function AbilityPanel() {
  const { heroId = '' } = useParams();
  const [editingAbility, setEditingAbility] = useState<HeroProfile | null>(
    null,
  );

  const { isPending, isError, data } = useQuery({
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

  if (isPending) {
    return <SkeletonCounter />;
  }

  if (isError) {
    return (
      <Typography
        size='large'
        color='light'
        style={{ marginTop: 100, textAlign: 'center' }}
      >
        Something went wrong...
      </Typography>
    );
  }

  if (!editingAbility) return null;

  return (
    <SAbilityPanel>
      {isError && (
        <Typography size='large' color='light'>
          Something went wrong
        </Typography>
      )}
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
