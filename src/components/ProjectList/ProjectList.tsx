import { motion } from 'framer-motion';
import { useEffect } from 'react';
// @ts-ignore
import { Grid, Stack } from '@mui/material';
import Heading from 'components/Heading';
import Loading from 'components/Loading';
import Paragraph from 'components/Paragraph';
import { HTTP_STATUS } from 'configs/constants';
import { loadProjectsData } from 'features/Redux/projectsDataSlice';
import { useAppDispatch } from 'hooks/useAppDispatch';
import { useAppSelector } from 'hooks/useAppSelector';
import Pill from 'components/Pill';
//@ts-ignore
import { AwesomeButton, AwesomeButtonSocial } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { BsBrush } from 'react-icons/bs';
import Tilt from 'react-parallax-tilt';
import './ProjectList.css';

const ProjectList = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadProjectsData());
  }, [dispatch]);

  const { projectsData, errorMessage, status } = useAppSelector(
    (state) => state.projects
  );

  const handleOnLiveSamplePress = (someData: any) => {
    window.open(someData.liveUrl, '_blank');
  };

  if (status === HTTP_STATUS.PENDING) {
    return <Loading />;
  } else if (status === HTTP_STATUS.SUCCESS) {
    return (
      <Stack
        spacing={5}
        alignSelf="center"
        sx={{
          width: '90%',
          backgroundColor: 'green',
        }}
      >
        <Heading textAlign="start">
          <span>
            <BsBrush /> {''}
          </span>
          Personal
        </Heading>
        <Stack spacing={5} direction="column">
          {projectsData.map((eachProject: any, index: number) => (
            <Grid
              columnGap={3}
              rowGap={3}
              justifyContent="center"
              sx={{
                backgroundColor: 'pink',
              }}
              container
              key={index}
            >
              <Grid sx={{ backgroundColor: 'yellow' }} item xs={10} md={3.2}>
                <motion.div
                  style={{
                    borderRadius: 18,
                  }}
                  whileHover={{ y: -5, scale: 1.1 }}
                  initial={{ opacity: 0, y: 90 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    type: 'spring',
                    stiffness: 150,
                    damping: 4,
                  }}
                >
                  <Tilt
                    style={{
                      borderRadius: 18,
                    }}
                    className="box-with-shadow "
                    glareEnable={true}
                    glareColor="#fff"
                  >
                    <img
                      src={eachProject.mainImage.asset.url}
                      alt={eachProject.title}
                      style={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: 18,
                      }}
                    />
                  </Tilt>
                </motion.div>
              </Grid>

              <Grid item xs={12} md={7}>
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.5,
                    type: 'spring',
                    stiffness: 150,
                    damping: 4,
                  }}
                >
                  <Stack
                    alignItems="flex-start"
                    sx={{
                      backgroundColor: 'red',
                      paddingLeft: {
                        xs: '8px',
                        md: '0px',
                      },
                      paddingRight: {
                        xs: '5px',
                        md: '0px',
                      },
                    }}
                    direction="column"
                  >
                    <Heading>0{index + 1}</Heading>
                    <Paragraph
                      sx={{
                        fontSize: '1.8rem',
                      }}
                      className="text-has-shadow"
                    >
                      {eachProject.title}
                    </Paragraph>
                    <Paragraph
                      sx={{
                        textAlign: {
                          xs: 'left',
                        },
                      }}
                    >
                      {eachProject.description}
                    </Paragraph>
                    <Paragraph>Technologies :</Paragraph>
                    <Stack direction="row" flexWrap="wrap">
                      {eachProject.techs.map((techItem: any, index: number) => (
                        <Pill key={index}>{techItem}</Pill>
                      ))}
                    </Stack>
                    <div className="d-flex flex-row justify-content-start flex-wrap align-items-start text-has-shadow">
                      <motion.div
                        whileHover={{ y: -5, scale: 1.1 }}
                        className="m-2 abril-font box-with-shadow text-has-shadow"
                      >
                        {/* @ts-ignore */}
                        <AwesomeButtonSocial
                          type="github"
                          size="medium"
                          ripple
                          onPress={() => {
                            window.open(eachProject.gitUrl, '_blank');
                          }}
                        >
                          GitHub
                        </AwesomeButtonSocial>
                      </motion.div>

                      <motion.div
                        whileHover={{ y: -5, scale: 1.1 }}
                        className="m-2 box-with-shadow"
                      >
                        <div>
                          {/* @ts-ignore */}
                          <AwesomeButton
                            type="primary"
                            size="medium"
                            ripple
                            onPress={() => handleOnLiveSamplePress(eachProject)}
                          >
                            Live Sample
                          </AwesomeButton>
                        </div>
                      </motion.div>
                    </div>
                  </Stack>
                </motion.div>
              </Grid>
            </Grid>
          ))}
        </Stack>
      </Stack>
    );
  } else {
    return <h1>{errorMessage}</h1>;
  }
};

export default ProjectList;
