import { Firebase } from 'assets/animations';
import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import type { ITechStacks } from './types';
import Stack from '@mui/material/Stack';
import { techStacks } from 'utils/tech-stacks';
import { quick_bounce } from 'configs/transitionConfigs';
import { motion } from 'framer-motion';
import Lottie, { Options } from 'react-lottie';
import './TechStacks.css';
import { Grid } from '@mui/material';

const defaultOptions: Options = {
  loop: true,
  autoplay: true,
  animationData: Firebase,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const TechStacks: ITechStacks = () => {
  return (
    <Stack
      sx={{
        paddingTop: {
          md: 10,
          sm: 5,
          xs: 7,
        },
      }}
      spacing={2}
    >
      <Heading>skills</Heading>
      <Grid
        rowGap={3}
        sx={{
          paddingTop: {
            md: 4,
            xs: 0,
          },
        }}
        container
        justifyContent="center"
        alignItems="center"
      >
        {techStacks.map((tech, i) => (
          <Grid sm={3} md={1.5} item>
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, y: -6 }}
              transition={quick_bounce}
            >
              <Stack
                sx={{
                  alignItems: 'center',
                }}
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.3 }}
                  style={{ width: 100 }}
                >
                  <Lottie
                    options={{
                      ...defaultOptions,
                      animationData: tech.objName,
                    }}
                    height={tech.height}
                    width={tech.width}
                  />
                </motion.div>
                <Paragraph>{tech.title}</Paragraph>
              </Stack>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default TechStacks;
