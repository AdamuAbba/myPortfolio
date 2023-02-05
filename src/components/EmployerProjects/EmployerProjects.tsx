import { IEmployerProjects } from './types';
import { useAppSelector } from 'hooks/useAppSelector';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
//@ts-ignore
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import { BsBriefcaseFill } from 'react-icons/bs';
import { GoGlobe } from 'react-icons/go';
import Tilt from 'react-parallax-tilt';
import { useDispatch } from 'react-redux';
import { HTTP_STATUS } from 'configs/constants';
import { getEmployerProjects } from 'features/Redux/employerProjectsSlice';
import { loadProjectsData } from 'features/Redux/projectsDataSlice';
import Loading from 'components/Loading';

const EmployerProjects: IEmployerProjects = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProjectsData());
    dispatch(getEmployerProjects());
  }, [dispatch]);

  const { employerProjectsResponse } = useAppSelector(
    (state) => state.employerProjects
  );

  const handleOnLiveSamplePress = (data: any): void => {
    window.open(data.liveUrl, '_blank');
  };

  return (
    <Container
      fluid
      className="text-white d-flex align-items-center justify-content-center"
    >
      <Row className="d-flex flex-column justify-content-center align-items-center">
        <div className="mb-4 d-flex justify-content-center align-items-center mt-5">
          <h1 className="styled-header project-sub-header">
            <span># {''}</span>
            <span>
              <BsBriefcaseFill /> {''}
            </span>
            Employer Projects
          </h1>
        </div>
        {employerProjectsResponse.status === HTTP_STATUS.PENDING ? (
          <Loading />
        ) : employerProjectsResponse.status === HTTP_STATUS.SUCCESS ? (
          //@ts-ignore
          employerProjectsResponse.isSuccess.map((eachProject, index) => (
            <Row key={index} className="d-flex  flex-row annie-font mb-3">
              <Col className="project-img-col">
                <motion.div
                  whileHover={{ y: -5, scale: 1.1 }}
                  initial={{ opacity: 0, y: 90 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.5,
                    type: 'spring',
                    stiffness: 150,
                    damping: 4,
                  }}
                >
                  <Tilt
                    className="d-flex   justify-content-center  content-border-solid rounded project-image box-with-shadow "
                    glareEnable={true}
                    glareColor="#fff"
                  >
                    <img
                      src={eachProject.mainImage.asset.url}
                      alt={eachProject.title}
                      className="img-fluid"
                    />
                  </Tilt>
                </motion.div>
              </Col>

              <Col className="d-flex flex-column justify-content-center">
                <motion.div
                  className=" d-flex  flex-column align-items-start justify-content-start"
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
                  <h1 className=" project-count  styled-header">
                    0{index + 1}
                  </h1>
                  <h1 className="project-name text-has-shadow">
                    {eachProject.title}
                  </h1>
                  <p className="project-description text-has-shadow">
                    {eachProject.description}
                  </p>
                  <span className="project-description text-has-shadow">
                    Technologies :
                  </span>
                  <div className="d-flex flex-row mb-2 flex-wrap">
                    {/*@ts-ignore */}
                    {eachProject.techs.map(
                      (techItem: string, index: number) => (
                        <Badge
                          key={index}
                          pill
                          className="m-1 project-technologies box-with-shadow abril-font "
                          bg="info"
                        >
                          {techItem}
                        </Badge>
                      )
                    )}
                  </div>
                  <div className="d-flex flex-row justify-content-start flex-wrap align-items-start text-has-shadow">
                    <motion.div
                      whileHover={{ y: -5, scale: 1.1 }}
                      className="m-2 abril-font box-with-shadow text-has-shadow"
                    >
                      <div>
                        <AwesomeButton
                          type="primary"
                          size="medium"
                          ripple
                          onPress={() =>
                            window.open(eachProject.official_site, '_blank')
                          }
                        >
                          <GoGlobe
                            style={{
                              fontSize: '1.5rem',
                            }}
                          />
                          official site
                        </AwesomeButton>
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -5, scale: 1.1 }}
                      className="m-2 abril-font box-with-shadow text-has-shadow"
                    >
                      <div>
                        <AwesomeButton
                          type="primary"
                          size="medium"
                          ripple
                          onPress={handleOnLiveSamplePress(eachProject)}
                        >
                          Live Sample
                        </AwesomeButton>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </Col>
            </Row>
          ))
        ) : employerProjectsResponse.status === HTTP_STATUS.REJECTED ? (
          <h1>{employerProjectsResponse.isError}</h1>
        ) : null}
      </Row>
    </Container>
  );
};

export default EmployerProjects;
