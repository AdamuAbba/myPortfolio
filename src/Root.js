import React from "react";
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import { AnimatePresence } from "framer-motion";

const Root = () => {
  const location = useLocation();
  return (
    <div className="content-border bg-dark">
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route component={HomeScreen} path="/" exact />
          <Route component={ProjectsScreen} path="/projects" />
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default Root;
