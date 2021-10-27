import React, { useEffect, useState, useRef } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import Lottie from "react-lottie";
import * as loveExplosion from "../animations/loveExplosion.json";
import { SocialIcon } from "react-social-icons";
import "react-awesome-button/dist/styles.css";
import axios from "axios";
import { motion } from "framer-motion";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import emailjs from "emailjs-com";

const chuckUrl = "https://api.chucknorris.io/jokes/random?category=dev";
export default function MyFooter() {
  const [chucksJokes, setChucksJokes] = useState(null);
  useEffect(() => {
    const fetchChuckData = async () => {
      await axios
        .get(chuckUrl)
        .then((result) => setChucksJokes(result.data.value))
        .catch((e) => console.log(e.message));
    };
    fetchChuckData();
  }, []);

  const myForm = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch((err) => {
        console.log(err.message);
      });
    e.target.reset();
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loveExplosion.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <footer>
      <Container className="annie-font" fluid>
        <Row>
          <Container className="chuck-row  mt-3 rounded content-border-solid box-with-shadow">
            <p className="mb-3">some light chuck Norris jokes ::</p>
            <p className="">{chucksJokes}</p>
          </Container>
        </Row>

        <Row className=" footer-globals text-has-shadow ">
          <Col className="">
            <Form onSubmit={sendEmail} ref={myForm} className="text-white p-3">
              <div className="d-flex justify-content-center align-items-center">
                <h1>Contact me</h1>
              </div>
              <Form.Group as={Row} className="mb-3" controlId="email">
                <Form.Label lg="1" column className="me-2">
                  Email
                </Form.Label>
                <Col>
                  <Form.Control
                    required
                    name="email"
                    className="box-with-shadow"
                    size="lg"
                    type="email"
                    placeholder="email"
                  />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="message">
                <Form.Label lg="1" column className="me-6">
                  message
                </Form.Label>
                <Col>
                  <Form.Control
                    required
                    name="message"
                    className="box-with-shadow"
                    size="lg"
                    as="textarea"
                    row={3}
                    placeholder="..."
                  />
                </Col>
              </Form.Group>
              <div className="d-flex align-items-center justify-content-center">
                <motion.div
                  whileHover={{ y: -5, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 9 }}
                >
                  <AwesomeButton
                    className="box-with-shadow text-has-shadow"
                    style={{ width: 250, fontSize: 26 }}
                    type="primary"
                    size="large"
                    ripple
                  >
                    submit
                  </AwesomeButton>
                </motion.div>
              </div>
            </Form>
          </Col>

          <Col className=" d-flex justify-content-center align-items-center">
            <div className="d-flex text-white flex-row align-items-center justify-content-center">
              Built with
              <Lottie options={defaultOptions} height={80} width={80} />
              by Abba
            </div>
          </Col>
        </Row>
        <Row className="d-flex footer-globals p-2 align-items-center justify-content-center">
          <div className="d-flex flex-row justify-content-center align-items-center p-2">
            <span className="text-white">Portfolio source code:</span>
            <motion.div
              whileHover={{ y: -10, scale: 1.3 }}
              transition={{ type: "spring", stiffness: 200, damping: 9 }}
            >
              <SocialIcon
                className="drop-effect"
                style={{ marginLeft: 10 }}
                fgColor="#ffff"
                url="https://github.com/AdamuAbba/myPortfolio"
              />
            </motion.div>
          </div>
        </Row>
        <Row>
          <Container
            fluid
            className=" d-flex align-items-center footer-globals justify-content-center"
          >
            <p className=" text-white text-has-shadow">october 2021</p>
          </Container>
        </Row>
      </Container>
    </footer>
  );
}
