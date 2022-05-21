import { configureStore } from "@reduxjs/toolkit";
import timeLineSliceReducer from "./timeLineSlice";
import hamburgerReducer from "./hamburgerSlice";
import projectsDataSliceReducer from "./projectsDataSlice";
import employerProjectsSliceReducer from "./employerProjectsSlice";
const store = configureStore({
  reducer: {
    timeline: timeLineSliceReducer,
    hamburger: hamburgerReducer,
    projects: projectsDataSliceReducer,
    employerProjects: employerProjectsSliceReducer,
  },
});

export default store;
