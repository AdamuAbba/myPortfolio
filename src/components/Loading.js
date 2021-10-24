import React from "react";
import { Container } from "react-bootstrap";
import * as ballLoading from "../animations/ballLoading.json";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: ballLoading.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function Loading() {
  return (
    <Container
      fluid
      className="d-flex justify-content-center align-item-center"
    >
      <div>
        <Lottie options={defaultOptions} />
      </div>
    </Container>
  );
}
