import { motion } from 'framer-motion';
import { useEffect } from 'react';
// @ts-ignore
import { Grid, Stack } from '@mui/material';
import Heading from 'components/Heading';
import Loading from 'components/Loading';
import Paragraph from 'components/Paragraph';
import Pill from 'components/Pill';
import { loadProjectsData } from 'features/Redux/projectsDataSlice';
import { useAppDispatch } from 'hooks/useAppDispatch';
//@ts-ignore
import { AwesomeButton, AwesomeButtonSocial } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import Tilt from 'react-parallax-tilt';
import { useGetProjectsQuery } from 'services/endpoints/projects';
import './ProjectList.css';

const ProjectList = () => {
  const dispatch = useAppDispatch();
  const { data, isFetching, isSuccess } = useGetProjectsQuery();

  useEffect(() => {
    dispatch(loadProjectsData());
  }, [dispatch]);

  const handleOnLiveSamplePress = (someData: any) => {
    window.open(someData.liveUrl, '_blank');
  };

  if (isFetching) {
    return <Loading />;
  } else if (isSuccess) {
    return (
      <Stack
        alignSelf="center"
        sx={{
          width: '90%',
          marginTop: 4,
        }}
        spacing={5}
        direction="column"
      >
        {data.map((eachProject: any, index: number) => (
          <Grid
            columnGap={3}
            rowGap={3}
            justifyContent="center"
            container
            key={index}
          >
            <Grid item xs={10} md={3.2}>
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
                  <Stack direction="row" mb={1} flexWrap="wrap">
                    {eachProject.techs.map((techItem: any, index: number) => (
                      <Pill key={index}>{techItem}</Pill>
                    ))}
                  </Stack>
                  <div className="d-flex flex-row justify-content-start flex-wrap align-items-start text-has-shadow">
                    {typeof eachProject.youTube === 'undefined' ? null : (
                      <motion.div
                        whileHover={{ y: -5, scale: 1.1 }}
                        className="m-2 box-with-shadow text-has-shadow"
                      >
                        {/* @ts-ignore */}
                        <AwesomeButtonSocial
                          type="youtube"
                          size="medium"
                          ripple
                          onPress={() => {
                            window.open(eachProject.youTube, '_blank');
                          }}
                        >
                          Youtube
                        </AwesomeButtonSocial>
                      </motion.div>
                    )}

                    {typeof eachProject.gitUrl === 'undefined' ? null : (
                      <motion.div
                        whileHover={{ y: -5, scale: 1.1 }}
                        className="m-2 box-with-shadow text-has-shadow"
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
                    )}

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
                          Live
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
    );
  } else {
    return <h1>error</h1>;
  }
};

export default ProjectList;
