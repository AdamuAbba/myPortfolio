import React from "react";
import { motion } from "framer-motion";
import { Container, Row } from "react-bootstrap";
import MyFooter from "../components/MyFooter";
import ProjectList from "../components/projectList";
import { transitionConfig } from "../configs/pageTransition";
import { GiPaintBucket } from "react-icons/gi";
const ProjectsScreen = () => {
  return (
    <motion.main
      variants={transitionConfig}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="bg-dark"
    >
      <Container fluid>
        <Row>
          <Container
            style={{ marginTop: 120 }}
            className="d-flex align-items-center justify-content-center annie-font mb-4 pb-2"
          >
            <h1 className="styled-header project-header ">
              <span>
                <GiPaintBucket />
              </span>
              projects List
            </h1>
          </Container>

          <ProjectList />
          <MyFooter />
        </Row>
      </Container>
    </motion.main>
  );
};

export default ProjectsScreen;
