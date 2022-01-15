import { configureStore } from "@reduxjs/toolkit";
import timeLineSliceReducer from "./timeLineSlice";
import hamburgerReducer from "./hamburgerSlice";
import projectsDataSliceReducer from "./projectsDataSlice";
const store = configureStore({
  reducer: {
    timeline: timeLineSliceReducer,
    hamburger: hamburgerReducer,
    projects: projectsDataSliceReducer,
  },
});

export default store;
