import { Stack, Typography } from '@mui/material';
import { quick_bounce } from 'configs/transitionConfigs';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import './AnimatedHoverWrapper.css';
import { IAnimatedHoverWrapper } from './types';
import { useMatch } from 'react-router';

const AnimatedHoverWrapper: IAnimatedHoverWrapper = (props) => {
  const [activeRoute, setActiveRoute] = useState<boolean>(false);
  const navigate = useNavigate();
  const match = useMatch({ path: props.route, caseSensitive: true });

  const handleOnMouseEnter = () => {
    setActiveRoute(true);
  };

  const handleOnMouseLeave = () => {
    setActiveRoute(false);
  };

  const handleOnClick = () => {
    navigate(props.route);
  };
  const parent: Variants = {
    initial: {},
    animate: {
      scale: 1.1,
      y: -5,
      transition: {
        ...quick_bounce,
      },
    },
  };

  const leftArrow: Variants = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        ...quick_bounce,
      },
    },
  };

  const rightArrow: Variants = {
    initial: {
      x: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        ...quick_bounce,
      },
    },
  };

  return (
    <motion.div
      whileHover="animate"
      variants={parent}
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      onClick={handleOnClick}
      className="parent"
    >
      <Typography
        className={`homeLogo ${match ? 'active' : null} `}
        variant={props.route === '/' ? 'h1' : 'h3'}
      >
        <Stack direction="row">
          {activeRoute && (
            <motion.div
              initial="initial"
              animate="animate"
              variants={leftArrow}
            >
              &#60;
            </motion.div>
          )}
          {props.children}
          {activeRoute && (
            <motion.div
              initial="initial"
              animate="animate"
              variants={rightArrow}
            >
              /&#62;
            </motion.div>
          )}
        </Stack>
      </Typography>
    </motion.div>
  );
};

export default AnimatedHoverWrapper;
