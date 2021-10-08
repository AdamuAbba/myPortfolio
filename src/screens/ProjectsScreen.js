import React from "react";
import { motion } from "framer-motion";

const ProjectsScreen = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      exit={{ opacity: 0 }}
    >
      <h1>ProjectsScreen</h1>;
    </motion.main>
  );
};

export default ProjectsScreen;
