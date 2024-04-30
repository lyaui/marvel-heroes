import { useNavigate } from 'react-router-dom';

import { ROUTER_PATH } from '@/routes';
import Container from '@/components/Layout/Container';
import Typography from '@/components/UI/Typography';
import Button from '@/components/UI/Button';

function ErrorPage() {
  const navigate = useNavigate();
  const handleGoHeroesPage = () => {
    navigate(ROUTER_PATH.HEROES);
  };

  return (
    <Container style={{ marginTop: 60, textAlign: 'center' }}>
      <Typography size='large'>404 PAGE NOT FOUND</Typography>
      <Typography>
        Check that you typed the address correctly, <br />
        go back to your previous page or try using our site search to find
        something specific.
      </Typography>
      <Button style={{ marginTop: 50 }} onClick={handleGoHeroesPage}>
        heroooooes!
      </Button>
    </Container>
  );
}

export default ErrorPage;
