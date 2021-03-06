import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar, Nav, Container } from "react-bootstrap";
import { colors } from "../configs/colors";
import Tilt from "react-parallax-tilt";
import { Sling as Hamburger } from "hamburger-react";
import { useSelector, useDispatch } from "react-redux";
import { setBurgerOpen } from "../Redux/hamburgerSlice";

export default function NavBar() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [navBarColor, setNavBarColor] = useState("");
  const handleScroll = () => {
    let scrollVal = window.scrollY;
    scrollVal >= 200 ? setNavBarColor("dark") : setNavBarColor("");
  };
  const dispatch = useDispatch();
  const toggleState = useSelector((state) => state.hamburger.isOpen);
  const navConfig = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    shown: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.9,
        duration: 0.3,
        type: "spring",
        stiffness: 200,
        damping: 8,
      },
    },
  };
  return (
    <Navbar
      className="container-fluid my-navbar"
      collapseOnSelect
      expand="md"
      variant="dark"
      sticky="top"
      bg={navBarColor}
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <motion.div variants={navConfig} initial="hidden" animate="shown">
            <motion.div
              whileHover={{
                scale: 1.1,
                y: -9,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 8 }}
            >
              <Tilt>
                <span className="homeLogo ">
                  <span>&#60;</span>Abba
                  <span>/&#62;</span>
                </span>
              </Tilt>
            </motion.div>
          </motion.div>
        </Navbar.Brand>
        <Navbar.Toggle className="navbar-toggler">
          <Hamburger
            onToggle={(toggled) => {
              dispatch(setBurgerOpen(toggled));
            }}
            toggle={toggleState}
            toggled={toggleState}
            label="menu button"
            rounded
            distance="md"
            size={35}
            duration={0.5}
            color={colors.shyPink}
          />
        </Navbar.Toggle>

        <Nav className="me-auto collapsible">
          <Nav.Link as={Link} to="/projects" className="annie-font h2">
            <motion.div
              whileHover={{
                scale: 1.2,
                y: -20,
                color: colors.shyGreen,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 8 }}
            >
              <Tilt>Projects</Tilt>
            </motion.div>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
