import { useMutation, useQueryClient } from '@tanstack/react-query';

import QUERY_KEYS from '@/constants/queryKeys';
import type { HeroProfile } from '@/types/hero';
import { apiPatchHeroProfile } from '@/api/heroes';

type SaveButtonProps = {
  heroId: string;
  editingAbility: HeroProfile;
};

function SaveButton({ heroId, editingAbility }: SaveButtonProps) {
  const queryClient = useQueryClient();

  // TODO rest points errormessage
  const { mutate, isPending } = useMutation({
    mutationFn: () => apiPatchHeroProfile(heroId, editingAbility),
    onSuccess: () => {
      // TODO toast
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.HERO_PROFILE, heroId],
      });
    },
  });

  const handleUpdateClick = () => {
    mutate();
  };

  // TODO spinner
  return (
    <button onClick={handleUpdateClick} disabled={isPending}>
      SAVE
    </button>
  );
}

export default SaveButton;
