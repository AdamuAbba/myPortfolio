import React, { useEffect, useState } from "react";
import { Col, Container, Row, Form } from "react-bootstrap";
import Lottie from "react-lottie";
import * as loveExplosion from "../animations/loveExplosion.json";
import { AwesomeButton } from "react-awesome-button";
import { SocialIcon } from "react-social-icons";
import "react-awesome-button/dist/styles.css";
import axios from "axios";

const chuckUrl = "https://api.chucknorris.io/jokes/random?category=dev";
export default function MyFooter() {
  const [chucksJokes, setChucksJokes] = useState(null);
  useEffect(() => {
    fetchChuckData();
  }, []);

  const fetchChuckData = async () => {
    await axios
      .get(chuckUrl)
      .then((result) => setChucksJokes(result.data.value))
      .catch((e) => console.log(e.message));
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
      <Container
        className="d-flex flex-column bg-dark justify-content-center align-items-center "
        fluid
      >
        <Row
          style={{ fontWeight: 700 }}
          className="d-flex flex-column align-items-center text-center justify-content-center h4 text-black mt-3 annie-font content-border-solid rounded-pill p-2 bg-white box-with-shadow"
        >
          <p className="mb-3">some light chuck Norris jokes ::</p>
          <p>{chucksJokes}</p>
        </Row>
        <Row>
          <Col>
            <Form className="d-flex  flex-column text-white align-items-center justify-content-center abril-font">
              <span className=" h5">Contact me...please</span>
              <Form.Group className="mb-3 pt-0" controlId="email">
                <Form.Control size="lg" type="email" placeholder="email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Control
                  size="lg"
                  as="textarea"
                  row={3}
                  placeholder="..."
                />
              </Form.Group>
              <AwesomeButton type="secondary" ripple size="medium">
                submit
              </AwesomeButton>
            </Form>
          </Col>
          <Col className="d-flex flex-row align-items-center justify-content-center text-white abril-font">
            <span className="h5">source code:</span>
            <SocialIcon
              style={{ marginLeft: 10 }}
              fgColor="#ffff"
              url="https://github.com/AdamuAbba/myPortfolio"
            />
          </Col>
          <Col className="d-flex align-items-center justify-content-center text-white abril-font h6">
            <div className="d-flex flex-row align-items-center justify-content-center">
              Built with
              <Lottie options={defaultOptions} height={80} width={80} />
              by Abba
            </div>
          </Col>
        </Row>

        <Row>
          <Container
            fluid
            className=" d-flex align-items-center justify-content-center"
          >
            <p className=" text-white abril-font h4 text-has-shadow">
              october 2021
            </p>
          </Container>
        </Row>
      </Container>
    </footer>
  );
}
