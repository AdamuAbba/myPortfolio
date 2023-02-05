import { BallLoading } from 'assets/animations';
import { ILoading } from './types';
import { Container } from 'react-bootstrap';
import Lottie from 'react-lottie';

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
      fluid
      className="d-flex justify-content-center align-item-center"
    >
      <div>
        <Lottie options={defaultOptions} />
      </div>
    </Container>
  );
};

export default Loading;
