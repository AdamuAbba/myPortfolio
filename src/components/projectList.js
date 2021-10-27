import React, { useState, useEffect } from "react";
import { Col, Container, Row, Badge } from "react-bootstrap";
import { colors } from "../configs/colors";
import { AwesomeButton, AwesomeButtonSocial } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import sanityClient from "../client";
import { motion } from "framer-motion";
import Loading from "./Loading";
import Tilt from "react-parallax-tilt";
export default function ProjectList() {
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000);
    sanityClient
      .fetch(
        `*[_type == "projects"]{title,date,description,gitUrl,liveUrl,mainImage{asset->{_id,url}},techs}`
      )
      .then((data) => setProjectsData(data))
      .catch((e) => console.log(e.message));
  }, []);

  const [projectsData, setProjectsData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Container
      fluid
      className="text-white d-flex align-items-center justify-content-center"
    >
      <Row className="d-flex flex-column justify-content-center align-items-center">
        {!isLoaded ? (
          <Loading />
        ) : (
          projectsData &&
          projectsData.map((eachProject, index) => (
            <Row key={index} className="d-flex  flex-row annie-font mb-3">
              <Col className="project-img-col">
                <motion.div
                  whileHover={{ y: -5, scale: 1.1 }}
                  initial={{ opacity: 0, y: 90 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.5,
                    type: "spring",
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
                    type: "spring",
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
                    {eachProject.techs.map((techItem, index) => (
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
                      <AwesomeButtonSocial
                        type="github"
                        size="medium"
                        ripple
                        onPress={() => {
                          window.open(eachProject.gitUrl, "_blank");
                        }}
                      >
                        GitHub
                      </AwesomeButtonSocial>
                    </motion.div>

                    <motion.div
                      whileHover={{ y: -5, scale: 1.1 }}
                      className="m-2 abril-font box-with-shadow text-has-shadow"
                    >
                      <AwesomeButton
                        type="primary"
                        size="medium"
                        ripple
                        onPress={() => {
                          window.open(eachProject.liveUrl, "_blank");
                        }}
                      >
                        Live Sample
                      </AwesomeButton>
                    </motion.div>
                  </div>
                </motion.div>
              </Col>
            </Row>
          ))
        )}
      </Row>
    </Container>
  );
}