import React, { useState } from "react";
import { Card, Container } from "react-bootstrap";
import { colors } from "../configs/colors";
import { FaLaptopCode } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { AiFillRead } from "react-icons/ai";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { MdDesignServices } from "react-icons/md";

const attributeData = [
  {
    icon: FaLaptopCode,
    title: "Web dev",
    description: "creative mind in web",
  },
  {
    icon: IoPhonePortraitOutline,
    title: "Mobile dev",
    description:
      "i love front-end mobile development using React-native mobile dev",
  },
  {
    icon: AiFillRead,
    title: "Learning",
    description: "i am constantly learning",
  },
  {
    icon: MdDesignServices,
    title: "Design",
    description: "the art of front-end design intrigues me ",
  },
];

export default function AttributesRow() {
  const [cardBackgroundColour, setCardBackgroundColour] = useState("#ffff");

  return (
    <Container
      fluid
      className="d-flex mt-2  flex-wrap justify-content-center align-items-center"
    >
      {attributeData.map((item) => (
        <motion.div
          onClick={() => setCardBackgroundColour(colors.shyPink)}
          whileHover={{
            scale: 1.1,
            y: -10,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 7 }}
          className="m-2"
        >
          <Tilt>
            <Card className="border-0 shadow-lg" style={{ width: "18rem" }}>
              <Card.Body className="d-flex flex-column align-items-center text-center  abril-font">
                <item.icon size="3em" className="mb-2" color={colors.shyPink} />
                <Card.Title className="p-0 m-0">{item.title}</Card.Title>
                <hr style={{ color: colors.shyPink, width: 200, height: 2 }} />
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Tilt>
        </motion.div>
      ))}
    </Container>
  );
}
