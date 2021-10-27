export const transitionConfig = {
  hidden: {
    transform: "scale(0) rotateX(-100deg)",
    opacity: 0,
    transition: {
      delay: 0.7,
    },
  },
  HomeVisible: {
    transform: " scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.7,
      delay: 1,
    },
  },
  visible: {
    transform: " scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
  exit: {
    transform: "scale(0) rotateX(100deg)",
    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
};
