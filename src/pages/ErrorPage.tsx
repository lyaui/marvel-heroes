import { useNavigate } from 'react-router-dom';

import { ROUTER_PATH } from '@/routes';
import { SContainer } from '@/App.tsx';
import Typography from '@/components/UI/Typography';
import Button from '@/components/UI/Button';
function ErrorPage() {
  const navigate = useNavigate();
  const handleGoHeroesPage = () => {
    navigate(ROUTER_PATH.HEROES);
  };

  return (
    <SContainer>
      <Typography size='large'>404 PAGE NOT FOUND</Typography>
      <Typography>
        Check that you typed the address correctly, <br />
        go back to your previous page or try using our site search to find
        something specific.
      </Typography>
      <Button style={{ marginTop: 50 }} onClick={handleGoHeroesPage}>
        go heroes
      </Button>
    </SContainer>
  );
}

export default ErrorPage;
