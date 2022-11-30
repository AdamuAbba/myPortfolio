import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
// @ts-ignore
import { AwesomeButton, AwesomeButtonSocial } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { BsBrush } from 'react-icons/bs';
import Lottie from 'react-lottie';
import Tilt from 'react-parallax-tilt';
import { useDispatch, useSelector } from 'react-redux';
import * as disconnected from '../../animations/disconnected.json';
import { HTTP_STATUS } from '../../configs/constants';
import { loadProjectsData } from '../../Redux/projectsDataSlice';
import Loading from '../Loading';
import './ProjectList.css';

const defaultOptions = {
  loop: true,
  autoplay: true,
  // @ts-ignore
  animationData: disconnected.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid',
  },
};

const ProjectList = () => {
  const dispatch = useDispatch();
  const [projectTitle, setProjectTitle] = useState('');
  const [show, setShow] = useState(false);
  useEffect(() => {
    dispatch(loadProjectsData());
  }, [dispatch]);

  const { projectsData, errorMessage, status } = useSelector(
    // @ts-ignore
    (state) => state.projects
  );

  const checkIfLive = (someData: any) => {
    if (someData.liveUrl === undefined) {
      setProjectTitle(someData.title);
      setShow(true);
    } else {
      setShow(false);
      window.open(someData.liveUrl, '_blank');
    }
  };

  return (
    <Container
      fluid
      className="text-white d-flex align-items-center justify-content-center"
    >
      {/*start of modal */}
      <Modal
        show={show}
        size="sm"
        onHide={() => setShow(false)}
        backdrop={true}
        keyboard={false}
        centered
        className="box-with-shadow annie-font"
      >
        <Modal.Header
          style={{
            backgroundColor: '#F8D7DA',
          }}
          closeButton
        >
          <Row className="align-items-center">
            <div className="">
              <Lottie
                options={defaultOptions}
                style={{
                  width: 80,
                }}
              />
            </div>
          </Row>
          <Modal.Title>
            <h3
              style={{
                color: '#842029',
                marginLeft: 10,
              }}
            >
              <strong>App not live</strong>
            </h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            color: '#A65234',
            fontWeight: 'bold',
          }}
          className="text-center h5"
        >
          oh shoot!, i'm afraid <span className="h2 ">"{projectTitle}"</span> is
          not live at the moment i gotta get that fixed....
        </Modal.Body>
        <Modal.Footer as="div" className="">
          <em style={{ fontSize: 19 }}>
            <q>click anywhere to dismiss</q>
          </em>
        </Modal.Footer>
      </Modal>
      {/* end of modal */}
      <Row className="d-flex flex-column justify-content-center align-items-center">
        <div className="mb-4 d-flex justify-content-center align-items-center">
          <h1 className="styled-header project-sub-header">
            <span># {''}</span>
            <span>
              <BsBrush /> {''}
            </span>
            Personal projects
          </h1>
        </div>
        {status === HTTP_STATUS.PENDING ? (
          <Loading />
        ) : status === HTTP_STATUS.SUCCESS ? (
          projectsData.map((eachProject: any, index: number) => (
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
                    className="d-flex justify-content-center rounded project-image box-with-shadow "
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
                    {eachProject.techs.map((techItem: any, index: number) => (
                      <Badge
                        key={index}
                        pill
                        className="m-1 project-technologies box-with-shadow abril-font "
                        bg="info"
                      >
                        {techItem}
                      </Badge>
                    ))}
                  </div>
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
                      className="m-2 abril-font box-with-shadow text-has-shadow"
                    >
                      <div>
                        {/* @ts-ignore */}
                        <AwesomeButton
                          type="primary"
                          size="medium"
                          ripple
                          onPress={() => checkIfLive(eachProject)}
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
        ) : status === HTTP_STATUS.REJECTED ? (
          <h1>{errorMessage}</h1>
        ) : null}
      </Row>
    </Container>
  );
};

export default ProjectList;
