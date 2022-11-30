import { configureStore } from '@reduxjs/toolkit';
import timeLineSliceReducer from './timeLineSlice';
import hamburgerReducer from './hamburgerSlice';
import projectsDataSliceReducer from './projectsDataSlice';
import employerProjectsSliceReducer from './employerProjectsSlice';
import chuckNorissApi from 'services/chuckNorissApi/api';

const store = configureStore({
  reducer: {
    timeline: timeLineSliceReducer,
    hamburger: hamburgerReducer,
    projects: projectsDataSliceReducer,
    employerProjects: employerProjectsSliceReducer,
    [chuckNorissApi.reducerPath]: chuckNorissApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chuckNorissApi.middleware),
});

export default store;
