import { IAttributesRow } from './types';
import Stack from '@mui/material/Stack';
import { attributeData } from 'utils/attributes';
import Heading from 'components/Heading';
import Paragraph from 'components/Paragraph';
import { quick_bounce } from 'configs/transitionConfigs';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { colors } from 'configs/colors';
import './AttributesRow.css';
import { Grid } from '@mui/material';

const AttributesRow: IAttributesRow = () => {
  const [cardId, setCardId] = useState<number | null>(null);

  return (
    <Stack
      spacing={4}
      sx={{
        height: 'auto',
        paddingTop: {
          xs: 3,
          sm: 15,
          md: 0,
        },
      }}
      justifyContent="center"
      alignItems="center"
      direction="column"
    >
      <Heading>services</Heading>
      <Grid
        container
        justifyContent="center"
        alignItems="flex-start"
        columnGap={1}
        rowGap={3}
      >
        {attributeData.map((item, index) => (
          <Grid md={3.4} xs={12} item>
            <motion.div
              key={index}
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
                    size="3rem"
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
                  style={{
                    alignSelf: 'center',
                  }}
                  animate={{
                    y: index === cardId ? 2 : 0,
                  }}
                  transition={quick_bounce}
                >
                  <Paragraph
                    sx={{
                      textAlign: 'center',
                      alignSelf: 'center',
                    }}
                  >
                    {item.description}
                  </Paragraph>
                </motion.div>
              </Stack>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default AttributesRow;
