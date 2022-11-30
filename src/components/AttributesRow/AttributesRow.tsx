import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import { quick_bounce } from 'configs/transitionConfigs';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { colors } from '../../configs/colors';
import './AttributesRow.css';

const attributeData = [
  {
    icon: FaLaptopCode,
    description:
      'I have built an array of great websites using HTML5, CSS3, Javascript,React, Material UI,Tailwind CSS, Bootstrap 5 and more',
    id: 1,
  },
  {
    icon: IoPhonePortraitOutline,
    description:
      'i have a track record of successfully well-received and commercially viable apps built using React Native',
    id: 2,
  },
];

const AttributesRow = () => {
  const [cardId, setCardId] = useState<number | null>(null);

  return (
    <Stack
      spacing={4}
      className="main-view"
      sx={{
        height: 'auto',
      }}
      direction="column"
    >
      <Heading>Services</Heading>
      <Stack direction="row">
        {attributeData.map((item, index) => (
          <motion.div
            key={index}
            style={{
              width: '20rem',
              height: '13.5rem',
            }}
            onHoverStart={() => setCardId(index)}
            onHoverEnd={() => setCardId(null)}
          >
            <Stack className="card-view">
              <motion.div
                animate={{
                  y: index === cardId ? -6 : 0,
                }}
                transition={quick_bounce}
              >
                <item.icon
                  size="3em"
                  color={index === cardId ? colors.shyGreen : colors.shyPink}
                />
              </motion.div>
              <AnimatePresence>
                {index === cardId ? (
                  <motion.div
                    initial={{
                      x: -100,
                      opacity: 0,
                    }}
                    animate={{
                      x: 0,
                      opacity: 1,
                    }}
                    exit={{
                      x: 100,
                      opacity: 0,
                    }}
                    transition={{ duration: 0.1 }}
                  >
                    <hr
                      style={{
                        color:
                          index === cardId ? colors.shyGreen : colors.shyPink,
                        width: '13rem',
                        height: '2px',
                      }}
                    />
                  </motion.div>
                ) : null}
              </AnimatePresence>
              <motion.div
                animate={{
                  y: index === cardId ? 2 : 0,
                }}
                transition={quick_bounce}
              >
                <Paragraph className="card-text">{item.description}</Paragraph>
              </motion.div>
            </Stack>
          </motion.div>
        ))}
      </Stack>
    </Stack>
  );
};

export default AttributesRow;
