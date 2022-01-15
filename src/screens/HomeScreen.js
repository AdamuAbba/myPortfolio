import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import AttributesRow from "../components/AttributesRow";
import MyFooter from "../components/MyFooter";
import TechStacks from "../components/TechStacks";
import Qualities from "../components/Qualities";
import BannerContent from "../components/BannerContent";
import { transitionConfig } from "../configs/pageTransition";
export default function HomeScreen() {
  useEffect(() => {}, []);

  return (
    <motion.main
      variants={transitionConfig}
      initial="homeHidden"
      animate="homeVisible"
      exit="exit"
      className="bg-dark"
    >
      <Container fluid>
        <Row style={{ position: "relative" }}>
          <div className="home-banner">
            <BannerContent />
          </div>
        </Row>

        <Row className="pt-5">
          <Col
            md={3}
            lg={3}
            sm={3}
            className="bg-dark d-flex flex-column align-items-center "
          >
            <div>
              <h1
                style={{ color: "#e86971" }}
                className="styled-header tech-heading"
              >
                <u>Tech Skills</u>
              </h1>
            </div>
            <TechStacks />
          </Col>

          <Col>
            <Container fluid className="rounded bg-white">
              <Row>
                <AttributesRow />
              </Row>
              <Row>
                <Qualities />
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
      <MyFooter />
    </motion.main>
  );
}
