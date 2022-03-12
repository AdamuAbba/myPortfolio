import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { colors } from "../configs/colors";
import { FaLaptopCode } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { AiFillRead } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useInView } from "react-intersection-observer";
import { MdDesignServices } from "react-icons/md";
const attributeData = [
  {
    icon: FaLaptopCode,
    title: "Web dev",
    description: "code robustness",
    id: 1,
  },
  {
    icon: IoPhonePortraitOutline,
    title: "Mobile dev",
    description: "Experience React native developer",
    id: 2,
  },
  {
    icon: AiFillRead,
    title: "Learning",
    description: "i am constantly learning",
    id: 3,
  },
  {
    icon: MdDesignServices,
    title: "Design",
    description: "conversion of design mockups into high quality code",
    id: 4,
  },
];

export default function AttributesRow() {
  const { ref, inView } = useInView();
  const animation = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  useEffect(() => {
    if (inView) {
      animation.start("show");
    }
    if (!inView) {
      animation.start("hidden");
    }
  }, [inView, animation]);

  return (
    <Container
      ref={ref}
      fluid
      className="d-flex  flex-row flex-wrap justify-content-center align-items-center"
    >
      {attributeData.map((item, i) => (
        <motion.div
          key={item.id}
          variants={{
            hidden: {
              opacity: 0,
              x: -50,
            },
            show: {
              opacity: 1,
              x: 0,
              transition: {
                type: "spring",
                stiffness: 220,
                damping: 9,
                duration: 0.3,
                delay: i * 0.3,
              },
            },
          }}
          initial="hidden"
          animate={animation}
          className="m-2"
        >
          <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{
              scale: 1.1,
              y: -10,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 7 }}
          >
            <Tilt glareEnable={true} glareColor="#fff" glareBorderRadius="25px">
              <Card
                className="box-with-shadow bg-dark text-white "
                style={{ borderRadius: 25, width: "15rem" }}
              >
                <Card.Body className="d-flex flex-column align-items-center text-center annie-font">
                  <item.icon
                    size="3em"
                    className="mb-2"
                    color={isHovered ? colors.shyGreen : colors.shyPink}
                  />

                  <Card.Title
                    className="p-0 m-0"
                    style={{ fontSize: "2rem", fontWeight: 800 }}
                  >
                    {item.title}
                  </Card.Title>

                  <motion.div
                    animate={{
                      y: isHovered ? 0 : 100,
                      opacity: isHovered ? 1 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <hr
                      style={{
                        color: isHovered ? colors.shyGreen : colors.shyPink,
                        width: 200,
                        height: 1,
                      }}
                    />
                  </motion.div>

                  <Card.Text style={{ fontSize: "1.2rem", fontWeight: 800 }}>
                    {item.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Tilt>
          </motion.div>
        </motion.div>
      ))}
    </Container>
  );
}
