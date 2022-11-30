import { motion } from 'framer-motion';
import Lottie, { Options } from 'react-lottie';
import * as cssLogo from 'animations/css3.json';
import * as firebaseLogo from 'animations/firebase.json';
import * as htmlLogo from 'animations/html5.json';
import * as javascriptLogo from 'animations/javascript.json';
import * as reactLogo from 'animations/reactlogo.json';
import * as reactNativeLogo from 'animations/reactNative.json';
import { ITechStackList } from 'components/TechStacks/types';
import './TechStacks.css';
import Stack from '@mui/material/Stack';
import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import { quick_bounce } from 'configs/transitionConfigs';

const techStacks: ITechStackList = [
  {
    objName: htmlLogo,
    title: 'HTML',
    height: 80,
    width: 80,
    id: 1,
  },
  {
    objName: cssLogo,
    title: 'CSS',
    height: 80,
    width: 80,
    id: 2,
  },
  {
    objName: reactLogo,
    title: 'React',
    height: 80,
    width: 80,
    id: 3,
  },
  {
    objName: javascriptLogo,
    title: 'javascript',
    height: 80,
    width: 80,
    id: 4,
  },
  {
    objName: firebaseLogo,
    title: 'Firebase',
    height: 80,
    width: 80,
    id: 5,
  },
  {
    objName: reactNativeLogo,
    title: 'React-native',
    height: 80,
    width: 80,
    id: 6,
  },
];

const defaultOptions: Options = {
  loop: true,
  autoplay: true,
  animationData: firebaseLogo,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const TechStacks = () => {
  return (
    <Stack className="tech-view" spacing={4}>
      <Heading>skills</Heading>
      <Stack direction="row" spacing={2}>
        {techStacks.map((tech, i) => (
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
                    animationData: tech.objName.default,
                  }}
                  height={tech.height}
                  width={tech.width}
                />
              </motion.div>
              <Paragraph>{tech.title}</Paragraph>
            </Stack>
          </motion.div>
        ))}
      </Stack>
    </Stack>
  );
};

export default TechStacks;
