import React, { useEffect, useState } from "react";
import { Col, Container, Row, Image, Card } from "react-bootstrap";
import logo from "../logo.png";
import Lottie from "react-lottie";
import * as confusedBee from "../animations/confusedBee.json";
import * as htmlLogo from "../animations/html5.json";
import * as cssLogo from "../animations/css3.json";
import * as arrowDown from "../animations/arrowDown.json";
import * as reactLogo from "../animations/reactlogo.json";
import * as javascriptLogo from "../animations/javascript.json";
import * as firebaseLogo from "../animations/firebase.json";
import { motion } from "framer-motion";
import { colors } from "../configs/colors";
import { Typewriter } from "react-simple-typewriter";
import sanityClient from "../client";
import { SocialIcon } from "react-social-icons";
import Tilt from "react-parallax-tilt";
import AttributesRow from "../components/AttributesRow";
import MyFooter from "../components/MyFooter";
const techStacks = [
  {
    objName: htmlLogo,
    title: "HTML",
    height: 91,
    width: 91,
  },
  {
    objName: cssLogo,
    title: "CSS",
    height: 91,
    width: 91,
  },
  {
    objName: reactLogo,
    title: "React",
    height: 91,
    width: 91,
  },
  {
    objName: javascriptLogo,
    title: "javascript",
    height: 60,
    width: 60,
  },
  {
    objName: firebaseLogo,
    title: "Firebase",
    height: 91,
    width: 91,
  },
];

const socialButtonData = [
  { link: "linkedin.com/in/abba-adamu-365a9b17a", network: "linkedin" },
  {
    link: "https://github.com/AdamuAbba/AdamuAbba",
    network: "github",
  },
  {
    link: "https://www.instagram.com/shytypes1028",
    network: "instagram",
  },
  {
    link: "https://web.facebook.com/izshytypes",
    network: "facebook",
  },
];

export default function HomeScreen() {
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "attributes"]{title,date,description,mainImage{asset->{_id,url}},cardAngle}`
      )
      .then((data) => setAttributesData(data))
      .catch((e) => console.log(e.message));
  }, []);
  const [attributeData, setAttributesData] = useState(null);
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
      className="pt-5"
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
                className="d-flex justify-content-center "
              >
                <Tilt
                  className="shadow-lg"
                  glareEnable={true}
                  glareColor="#fff"
                >
                  <Image
                    src={logo}
                    lassName="shadow-lg"
                    style={{
                      height: 200,
                      borderTopLeftRadius: 50,
                      borderBottomRightRadius: 50,
                    }}
                  />
                </Tilt>
              </motion.div>
              <div className="d-flex flex-column align-items-center">
                <div className="text-white text-has-shadow abril-font h3 text-center">
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
            <Col fluid className="content-border rounded mb-3">
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                exit={{ opacity: 0, y: 100 }}
                className="d-flex flex-column me-2 justify-content-end home-banner  align-items-end "
              >
                {/*//? div for content */}

                <motion.div
                  whileHover={{ x: 100, y: -100, scale: 0 }}
                  transition={{ duration: 1 }}
                  className=""
                >
                  <Lottie options={defaultOptions} height={98} width={98} />
                </motion.div>
                <motion.p
                  animate={{ fontSize: 200 }}
                  style={{ fontSize: 20 }}
                  className="text-has-shadow  cursive  text-white text-end"
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

                <div className="d-flex flex-wrap mb-2 align-items-end justify-content-end">
                  {socialButtonData.map((item) => (
                    <motion.div
                      initial={{ rotateX: "-180deg", x: 100 }}
                      whileHover={{ y: -10, scale: 1.3 }}
                      animate={{ rotateX: "0deg", x: 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        damping: 7,
                      }}
                      className="me-2"
                    >
                      <SocialIcon
                        network={item.network}
                        fgColor="#ffff"
                        url={item.link}
                      />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </Col>
          </Row>

          <Row className="bg-white">
            <Col
              md={3}
              lg={3}
              sm={3}
              className="bg-dark d-flex flex-column jus align-items-center "
            >
              <div className="text-white h3 abril-font text-has-shadow">
                <span>Tech Skills</span>
              </div>
              <div className="">
                {techStacks.map((tech) => (
                  <motion.div
                    whileHover={{ scale: 1.2, y: -10 }}
                    transition={{ type: "spring", stiffness: 150, damping: 7 }}
                    className="d-flex align-items-center"
                  >
                    <motion.div
                      whileHover={{ rotate: "360deg" }}
                      transition={{ duration: 0.5 }}
                      className=""
                      style={{ width: 100 }}
                    >
                      <Lottie
                        options={{
                          ...defaultOptions,
                          animationData: tech.objName.default,
                        }}
                        height={tech.height}
                        width={tech.width}
                      />
                    </motion.div>
                    <motion.span className="text-white abril-font text-has-shadow">
                      {tech.title}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </Col>

            <Col className="shadow-lg">
              <AttributesRow />
            </Col>
          </Row>
        </Col>
      </Container>
      <MyFooter />
    </motion.main>
  );
}
