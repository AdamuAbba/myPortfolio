import React from "react";
import { Col, Container, Row, Image, Card, Button } from "react-bootstrap";
import { AwesomeButtonSocial } from "react-awesome-button";
import image from "../socialImg.jpg";
import logo from "../logo.png";
import Lottie from "react-lottie";
import * as confusedBee from "../animations/confusedBee.json";
import * as arrowDown from "../animations/arrowDown.json";
import { motion } from "framer-motion";
import Typical from "react-typical";
import { colors } from "../configs/colors";
import { Typewriter } from "react-simple-typewriter";
const techStacks = [
  {
    url: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white",
    id: 1,
  },
  {
    url: "https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white",
    id: 2,
  },
];

const socialButtonData = [
  { type: "github", text: "GitHub" },
  { type: "instagram", text: "instagram", delay: 1 },
  { type: "twitter", text: "twitter", delay: 2 },
  { type: "facebook", text: "facebook", delay: 3 },
];

export default function HomeScreen() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: confusedBee.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <motion.main
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      exit={{ opacity: 0, y: 100, delay: 1 }}
    >
      <Container className="bg-dark " fluid>
        <Col>
          <Row className="pt-2 ">
            <Col md={4} lg={4} sm={4}>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                exit={{ opacity: 0, y: 100, delay: 0.4 }}
                className="d-flex justify-content-center"
              >
                <Image
                  src={logo}
                  style={{
                    height: 200,
                    borderTopLeftRadius: 50,
                    borderBottomRightRadius: 50,
                  }}
                />
              </motion.div>
              <div className="">
                <div className="text-white text-has-shadow annie-font h1 text-center">
                  <Typewriter
                    words={[
                      "Software and cathedrals are much the same first we build them then we pray.",
                    ]}
                    cursor
                    cursorStyle="_"
                    typeSpeed={100}
                  />
                </div>

                <Lottie
                  options={{
                    ...defaultOptions,
                    animationData: arrowDown.default,
                  }}
                  height={100}
                  width={100}
                />
              </div>
            </Col>
            <Col className="content-border rounded mb-3">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                exit={{ opacity: 0, y: 100 }}
                className="d-flex justify-content-end align-items-end "
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  position: "relative",
                  height: 500,
                }}
              >
                {/*//? div for content */}
                <section>
                  <div className="d-flex flex-column align-items-end justify-content-end cursive  me-2">
                    <motion.div
                      whileHover={{ x: 100, y: -100, scale: 0 }}
                      transition={{ duration: 1 }}
                      className=""
                    >
                      <Lottie options={defaultOptions} height={98} width={98} />
                    </motion.div>
                    <motion.p
                      animate={{ fontSize: 200 }}
                      className="text-has-shadow text-white h4 text-end"
                    >
                      "Hi, Welcome i'm
                      <span className="text-danger"> Abba</span>
                      <br /> i'm a
                      <span className="text-danger">
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                          words={[" simple Guy", " busy bee"]}
                          loop={true}
                          cursor
                          cursorStyle="_"
                          typeSpeed={300}
                          deleteSpeed={70}
                          delaySpeed={1000}
                        />
                      </span>
                      who just wants to code"
                    </motion.p>
                  </div>
                  <div className="d-flex mb-2 align-items-end justify-content-end">
                    {socialButtonData.map((item) => (
                      <motion.div
                        initial={{ rotateX: "-180deg", x: 100 }}
                        animate={{ rotateX: "0deg", x: 0 }}
                        transition={{ duration: 1, delay: item.delay }}
                        className="me-2"
                      >
                        <AwesomeButtonSocial type={item.type} size="medium">
                          {item.text}
                        </AwesomeButtonSocial>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </motion.div>
            </Col>
          </Row>

          <Row>
            <Container className="bg-white" fluid>
              <Col>
                <div className="d-flex flex-row">
                  {techStacks.map((tech) => (
                    <Image src={tech.url} height={40} className="m-1 rounded" />
                  ))}
                </div>
              </Col>
              <Col className="d-flex justify-content-center align-items-center  ">
                <motion.div
                  initial={{ rotate: "-20deg" }}
                  whileHover={{ rotate: "0deg" }}
                  transition={{ type: "spring", stiffness: 150, damping: 7 }}
                  className=""
                >
                  <Card
                    className="m-5 text-black text-center cursive shadow-lg rounded "
                    style={{
                      width: "18rem",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src="https://images.unsplash.com/photo-1632984082009-7c56fc68c04e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGFzc2lvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    />
                    <Card.Body>
                      <Card.Title
                        style={{ fontSize: "2.4rem", color: colors.shyPink }}
                      >
                        Card Title
                      </Card.Title>
                      <Card.Text style={{ fontSize: "1.5rem" }}>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </motion.div>
              </Col>
            </Container>
          </Row>
        </Col>
      </Container>
    </motion.main>
  );
}
