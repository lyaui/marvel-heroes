import { useNavigate } from 'react-router-dom';

import ROUTER_PATH from '@/constants/routerPath';
import Button from '@/components/UI/Button';

function HomePage() {
  const navigate = useNavigate();

  const handleGoHeroesPage = () => {
    navigate(ROUTER_PATH.HEROES);
  };
  return (
    <Button
      style={{ display: 'block', margin: '120px auto' }}
      onClick={handleGoHeroesPage}
    >
      heroooooes!
    </Button>
  );
}

export default HomePage;
