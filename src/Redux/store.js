import { configureStore } from "@reduxjs/toolkit";
import timeLineSliceReducer from "./timeLineSlice";
import hamburgerReducer from "./hamburgerSlice";
const store = configureStore({
  reducer: {
    timeline: timeLineSliceReducer,
    hamburger: hamburgerReducer,
  },
});

export default store;
