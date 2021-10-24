import React from "react";
import { Offcanvas, Nav, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setBurgerOpen } from "../Redux/hamburgerSlice";
import Logo from "../images/logo.png";

const parentConfig = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const childConfig = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};
export default function HamburgerComp() {
  const burgerState = useSelector((state) => state.hamburger.isOpen);
  const dispatch = useDispatch();
  const handleHide = () => {
    dispatch(setBurgerOpen(false));
  };
  return (
    <Offcanvas
      className="hamburger-container rounded"
      show={burgerState}
      onHide={handleHide}
    >
      <Offcanvas.Header className="d-flex justify-content-center align-items-center">
        <motion.div
          initial={{ scale: 0, rotateY: 180 }}
          animate={{ scale: 1, rotateY: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.5,
            type: "spring",
            stiffness: 150,
            damping: 7,
          }}
          className="my-logo box-with-shadow"
        >
          <Image className="img-fluid rounded" src={Logo} />
        </motion.div>
      </Offcanvas.Header>
      <Offcanvas.Body className="p-0 ">
        <motion.div
          variants={parentConfig}
          initial="hidden"
          animate="show"
          className="p-2"
        >
          <Nav className="d-flex flex-column align-items-center">
            <Nav.Link
              onClick={handleHide}
              as={NavLink}
              to="/"
              exact
              className="mt-2 p-0"
            >
              <motion.div variants={childConfig}>
                <h2 className="text-has-shadow text-white annie-font">Home</h2>{" "}
              </motion.div>
            </Nav.Link>
            <Nav.Link
              onClick={handleHide}
              as={NavLink}
              to="/projects"
              exact
              className="mt-2 p-0"
            >
              <motion.div variants={childConfig}>
                <h2 className="text-has-shadow text-white annie-font">
                  Projects
                </h2>
              </motion.div>
            </Nav.Link>
          </Nav>
        </motion.div>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
