import { SHeader } from '@/components/Layout/Header/styled';

import Container from '@/components/Layout/Container';
import Typography from '@/components/UI/Typography';

function Header() {
  return (
    <SHeader>
      <Container>
        <Typography size='ex-large' color='light' as='h1'>
          marvel
        </Typography>
        <Typography color='light'>
          Get hooked on a hearty helping of heroes and villains from the humble
          House of Ideas!
        </Typography>
      </Container>
    </SHeader>
  );
}

export default Header;
