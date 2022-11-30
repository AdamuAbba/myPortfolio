import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Props } from 'components/NavBar/types';
import { quick_bounce } from 'configs/transitionConfigs';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  const AnimatedHoverWrapper = (props: Props): JSX.Element => {
    const [activeRoute, setActiveRoute] = useState<boolean>(false);

    const handleHoverChange = (isActive: boolean) => {
      setActiveRoute(isActive);
    };
    return (
      <motion.div
        whileHover={{
          scale: 1.1,
          y: -5,
        }}
        onHoverStart={() => handleHoverChange(true)}
        onHoverEnd={() => handleHoverChange(false)}
        transition={quick_bounce}
      >
        <Typography
          className="homeLogo"
          variant={props.state === 'abba' ? 'h1' : 'h3'}
        >
          <Stack direction="row">
            <AnimatePresence>
              {activeRoute ? (
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -100, opacity: 0 }}
                  transition={quick_bounce}
                >
                  &#60;
                </motion.div>
              ) : null}
            </AnimatePresence>
            {props.children}
            <AnimatePresence>
              {activeRoute ? (
                <motion.div
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 100, opacity: 0 }}
                  transition={quick_bounce}
                >
                  /&#62;
                </motion.div>
              ) : null}
            </AnimatePresence>
          </Stack>
        </Typography>
      </motion.div>
    );
  };

  return (
    <AppBar color="secondary" position="sticky" elevation={0}>
      <Toolbar>
        <Link className="nav-link" to="/">
          <AnimatedHoverWrapper state="abba">Abba</AnimatedHoverWrapper>
        </Link>
        <Link to="/projects" className="nav-link">
          <AnimatedHoverWrapper state="projects">Projects</AnimatedHoverWrapper>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
