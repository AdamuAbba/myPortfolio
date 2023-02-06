import { configureStore } from '@reduxjs/toolkit';
import api from 'services/api';
import employerProjectsSliceReducer from '../Redux/employerProjectsSlice';
import projectsDataSliceReducer from '../Redux/projectsDataSlice';
import timeLineSliceReducer from '../Redux/timeLineSlice';

const store = configureStore({
  reducer: {
    timeline: timeLineSliceReducer,
    projects: projectsDataSliceReducer,
    employerProjects: employerProjectsSliceReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
