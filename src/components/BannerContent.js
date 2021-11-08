import React from "react";
import { Row } from "react-bootstrap";
import Lottie from "react-lottie";
import { motion } from "framer-motion";
import * as confusedBee from "../animations/confusedBee.json";
import { SocialIcon } from "react-social-icons";
import { Typewriter } from "react-simple-typewriter";
import image from "../images/img1.png";
import Tilt from "react-parallax-tilt";
const socialButtonData = [
  {
    link: "linkedin.com/in/abba-adamu-365a9b17a",
    network: "linkedin",
    id: 1,
  },
  {
    link: "https://github.com/AdamuAbba/AdamuAbba",
    network: "github",
    id: 2,
  },
  {
    link: "https://www.instagram.com/shytypes1028",
    network: "instagram",
    id: 3,
  },
  {
    link: "https://web.facebook.com/izshytypes",
    network: "facebook",
    id: 4,
  },
];

const parentConfig = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delay: 0.4 },
  },
};

const childConfig = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      type: "spring",
      stiffness: 150,
      damping: 7,
    },
  },
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: confusedBee.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function BannerContent() {
  return (
    <motion.div
      variants={parentConfig}
      initial="hidden"
      animate="show"
      className="d-flex container-fluid flex-column justify-content-center align-items-center"
      style={{ position: "absolute", top: "20%" }}
    >
      <Row>
        <motion.div
          variants={childConfig}
          className="d-flex col justify-content-center align-items-center p-1"
        >
          <motion.div
            whileHover={{ y: -5 }}
            transition={{
              duration: 0.5,
              type: "spring",
              stiffness: 150,
              damping: 7,
            }}
          >
            <Tilt
              glareEnable={true}
              glareColor="#ffff"
              glareBorderRadius="50%"
              className="box-with-shadow content-border-solid rounded-circle"
            >
              <img
                src={image}
                alt="abba"
                className="img-fluid rounded-circle"
              />
            </Tilt>
          </motion.div>
        </motion.div>

        <motion.div
          variants={childConfig}
          className="d-flex col justify-content-center align-items-center p-1"
        >
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ rotate: 360, y: -100, scale: 0 }}
            transition={{
              type: "spring",
              damping: 10,
              mass: 0.75,
              stiffness: 100,
            }}
            className="busy-bee"
          >
            <motion.div
              className="d-flex justify-content-center  align-items-center"
              animate={{
                x: [0, 0, 50, 50, 0, 0, -50],
                y: [0, -50, -50, 50, -0, -50, 0],
              }}
              transition={{
                duration: 5,
                type: "spring",
                damping: 7,
                mass: 0.75,
                stiffness: 100,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2,
              }}
            >
              <Lottie options={defaultOptions} className="busy-bee" />
            </motion.div>
          </motion.div>
        </motion.div>
      </Row>
      <motion.div variants={childConfig}>
        <h1 className="glitch">
          <span aria-hidden="true">shy&#60;X/&#62;perience</span>
          shy&#60;X/&#62;perience
          <span aria-hidden="true">shy&#60;X/&#62;perience</span>
        </h1>
      </motion.div>

      <motion.p
        variants={childConfig}
        className=" d-flex flex-column bannerText text-has-shadow"
      >
        <span>"Hi, Welcome i'm Abba i'm a</span>
        <span className="text-danger">
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
        <br />
        <span>who just wants to code"</span>
      </motion.p>

      <motion.div
        variants={childConfig}
        className="d-flex flex-wrap mb-2 align-items-center justify-content-center"
      >
        {socialButtonData.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -10, scale: 1.3 }}
            transition={{ type: "spring", stiffness: 200, damping: 9 }}
            className="me-3"
          >
            <SocialIcon
              className="drop-effect"
              network={item.network}
              fgColor="#ffff"
              url={item.link}
            />
          </motion.div>
        ))}
      </motion.div>

      <motion.div />
    </motion.div>
  );
}
