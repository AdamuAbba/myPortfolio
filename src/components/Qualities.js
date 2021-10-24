import React from "react";
import { Container, Row } from "react-bootstrap";
import { BsPatchCheckFill } from "react-icons/bs";
import TimeLine from "./TimeLine";
export default function Qualities() {
  return (
    <Container fluid>
      <Row>
        <section className="annie-font ">
          <h1 className="styled-header about-header">
            <span>
              <BsPatchCheckFill size={40} />
            </span>{" "}
            About me
          </h1>
          <p className="about-subtext">some really short info...</p>
        </section>
      </Row>
      <Row>
        <Container fluid>
          <TimeLine />
        </Container>
      </Row>
    </Container>
  );
}
