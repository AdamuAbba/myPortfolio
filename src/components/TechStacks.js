import React, { useEffect } from "react";
import * as reactLogo from "../animations/reactlogo.json";
import * as javascriptLogo from "../animations/javascript.json";
import * as firebaseLogo from "../animations/firebase.json";
import * as htmlLogo from "../animations/html5.json";
import * as cssLogo from "../animations/css3.json";
import * as reactNativeLogo from "../animations/reactNative.json";
import Lottie from "react-lottie";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

const techStacks = [
  {
    objName: htmlLogo,
    title: "HTML",
    height: 91,
    width: 91,
    id: 1,
  },
  {
    objName: cssLogo,
    title: "CSS",
    height: 91,
    width: 91,
    id: 2,
  },
  {
    objName: reactLogo,
    title: "React",
    height: 91,
    width: 91,
    id: 3,
  },
  {
    objName: javascriptLogo,
    title: "javascript",
    height: 60,
    width: 60,
    id: 4,
  },
  {
    objName: firebaseLogo,
    title: "Firebase",
    height: 91,
    width: 91,
    id: 5,
  },
  {
    objName: reactNativeLogo,
    title: "React-native",
    height: 91,
    width: 91,
    id: 6,
  },
];

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: firebaseLogo.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default function TechStacks() {
  const animation = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      animation.start("show");
    }
    if (!inView) {
      animation.start("hidden");
    }
  }, [inView, animation]);

  return (
    <div ref={ref}>
      {techStacks.map((tech, i) => (
        <motion.div
          key={tech.id}
          variants={{
            hidden: {
              y: 50,
              opacity: 0,
            },
            show: {
              y: 0,
              opacity: 1,
              transition: {
                type: "spring",
                bounce: 0.5,
                duration: 0.3,
                delay: i * 0.2,
              },
            },
          }}
          initial="hidden"
          animate={animation}
        >
          <motion.div
            whileHover={{ scale: 1.2, y: -10 }}
            transition={{
              type: "spring",
              stiffness: 150,
              damping: 7,
            }}
            className="d-flex align-items-center"
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              style={{ width: 100 }}
            >
              <Lottie
                options={{
                  ...defaultOptions,
                  animationData: tech.objName.default,
                }}
                height={tech.height}
                width={tech.width}
              />
            </motion.div>
            <motion.span className="tech-title">{tech.title}</motion.span>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
