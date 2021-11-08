export const transitionConfig = {
  hidden: {
    transform: "scale(0) rotateX(-100deg)",
    opacity: 0,
  },
  homeHidden: {
    scale: 0,
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: "scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  homeVisible: {
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.3,
      duration: 0.3,
    },
  },
  exit: {
    scaleX: 0,
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};
