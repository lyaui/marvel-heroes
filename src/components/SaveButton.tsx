import { useMutation, useQueryClient } from '@tanstack/react-query';
import styled from 'styled-components';

import QUERY_KEYS from '@/constants/queryKeys';
import type { HeroProfile } from '@/types/hero';
import { apiPatchHeroProfile } from '@/api/heroes';

const SButton = styled.button<{ disabled: boolean }>`
  position: relative;
  height: 46px;
  min-width: 100px;
  padding: 0 10px;
  text-transform: uppercase;
  cursor: ${(props) => (props.disabled ? 'unset' : 'pointer')};
  line-height: 46px;
  background-color: ${(props) => (props.disabled ? '#cccccc' : '#e62429')};
  margin-left: 15px;
  border: none;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  transition: all 0.3s;

  &:hover:enabled {
    filter: brightness(1.25);
  }

  &:active:enabled {
    filter: brightness(0.9);
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0;
    height: 46px;
    width: 15px;
    background-color: inherit;
  }

  &:before {
    left: -14.8px;
    clip-path: polygon(0 30%, 100% 0, 100% 100%, 0 100%);
  }

  &:after {
    right: -14.8px;
    clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
  }
`;

const SSpinner = styled.div`
  margin: 0 auto;
  width: 20px;
  padding: 2px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: #e3e3e3;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;

  @keyframes l3 {
    to {
      transform: rotate(1turn);
    }
  }
`;

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
    if (isPending) return;
    mutate();
  };

  const buttonText = restPoints === 0 ? 'save' : `rest points ${restPoints}`;

  return (
    <SButton
      onClick={handleUpdateClick}
      disabled={restPoints !== 0}
      style={{ margin: 'auto' }}
    >
      {isPending ? <SSpinner /> : buttonText}
    </SButton>
  );
}

export default SaveButton;
