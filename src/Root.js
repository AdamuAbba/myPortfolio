import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import { AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar";
import HamburgerComp from "./components/HamburgerComp";
import AnimatedCursor from "react-animated-cursor";
const Root = () => {
  const location = useLocation();

  return (
    <div className="bg-dark" style={{ position: "relative" }}>
      <NavBar />
      <HamburgerComp />
      <AnimatedCursor
        trailingSpeed={4}
        innerSize={20}
        outerSize={35}
        outerScale={3}
        innerScale={1}
      />

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route component={HomeScreen} path="/" exact />
          <Route component={ProjectsScreen} path="/projects" exact />
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default Root;
