import React from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import Lottie from "react-lottie";
import * as loveExplosion from "../animations/loveExplosion.json";
import { AwesomeButton } from "react-awesome-button";
import { colors } from "../configs/colors";
import { SocialIcon } from "react-social-icons";

export default function MyFooter() {
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
      <Container className="pt-5" fluid>
        <Row>
          <Col>
            <Form className="d-flex  flex-column text-white align-items-center text-has-shadow justify-content-center abril-font">
              <span className=" h4">Contact me</span>
              <Form.Group className="mb-1 pt-0" controlId="email">
                <Form.Label size="md" className="text-white">
                  Email address
                </Form.Label>
                <Form.Control
                  size="lg"
                  type="email"
                  placeholder="email@domain.com"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label size="md">message</Form.Label>
                <Form.Control
                  size="lg"
                  as="textarea"
                  row={3}
                  placeholder="..."
                />
              </Form.Group>
              <AwesomeButton ripple size="large">
                submit
              </AwesomeButton>
            </Form>
          </Col>
          <Col className="d-flex align-items-center justify-content-center">
            <div className="text-has-shadow text-white abril-font h5">
              <span className="d-flex flex-row align-items-center">
                Designed and Built with
                <Lottie options={defaultOptions} height={80} width={80} />
                by Abba
              </span>
              <span className="d-flex flex-row align-items-center">
                source code:
                <SocialIcon
                  style={{ marginLeft: 10 }}
                  fgColor="#ffff"
                  url="https://github.com/AdamuAbba/myPortfolio"
                />
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <Container
            fluid
            className=" d-flex align-items-center justify-content-center"
          >
            <p
              style={{ color: colors.shyPink }}
              className=" cursive h4  text-has-shadow"
            >
              october 2020
            </p>
          </Container>
        </Row>
      </Container>
    </footer>
  );
}
