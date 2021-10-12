import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "react-awesome-button/dist/styles.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { colors } from "../configs/colors";
import Tilt from "react-parallax-tilt";
export default function NavBar() {
  return (
    <Navbar
      style={{ height: 140 }}
      className="shadow-lg"
      collapseOnSelect
      expand="md"
      bg="dark"
      variant="dark"
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <motion.div
            whileHover={{
              scale: 1.2,
              y: -20,
              color: colors.shyGreen,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 7 }}
            className=""
          >
            <Tilt>
              <span className="homeLogo ">
                <span>&#60;</span>Abba
                <span>/&#62;</span>
              </span>
            </Tilt>
          </motion.div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={NavLink}
              activeClassName="text-white rounded bg-danger"
              to="/projects"
              className="annie-font h2"
            >
              <motion.div
                whileHover={{
                  scale: 1.5,
                  y: -20,
                  color: colors.shyGreen,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 7 }}
              >
                <Tilt>Projects</Tilt>
              </motion.div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
