import { BallLoading } from 'assets/animations';
import { ILoading } from './types';
import Lottie from 'react-lottie';
import { Container } from '@mui/material';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: BallLoading,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const Loading: ILoading = () => {
  return (
    <Container
      sx={{
        width: {
          md: '30rem',
          xs: '26rem',
          sm: '30rem',
        },
        alignSelf: 'center',
      }}
    >
      <Lottie options={defaultOptions} />
    </Container>
  );
};

export default Loading;
