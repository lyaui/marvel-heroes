import { useMutation, useQueryClient } from '@tanstack/react-query';

import QUERY_KEYS from '@/constants/queryKeys';
import type { HeroProfile } from '@/types/hero';
import { apiPatchHeroProfile } from '@/api/heroes';
import Button from '@/components/UI/Button';

type SaveButtonProps = {
  heroId: string;
  editingAbility: HeroProfile;
  restPoints: number;
};

function SaveButton({
  heroId,
  editingAbility,
  restPoints = 0,
}: SaveButtonProps) {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: () => apiPatchHeroProfile(heroId, editingAbility),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.HERO_PROFILE, heroId],
      });
    },
  });

  const handleUpdateClick = () => {
    // rest points must be zero upon saving
    if (restPoints !== 0) return;
    mutate();
  };

  const buttonText = restPoints === 0 ? 'save' : `rest points ${restPoints}`;

  return (
    <Button
      onClick={handleUpdateClick}
      disabled={restPoints !== 0}
      isPending={isPending}
      style={{ margin: 'auto' }}
    >
      {buttonText}
    </Button>
  );
}

export default SaveButton;
