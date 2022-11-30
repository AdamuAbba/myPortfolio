import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import sanityClient from '../client';
import { HTTP_STATUS } from '../configs/constants';

export const loadProjectsData = createAsyncThunk(
  'projects/loadProjectsData',
  async () => {
    return await sanityClient
      .fetch(
        `*[_type == "projects"]{title,date,description,gitUrl,liveUrl,mainImage{asset->{_id,url}},techs}`
      )
      .then((data) => {
        console.log('project data : ', data);
        return data;
      });
  }
);

const initialState = {
  projectsData: [],
  status: null,
  errorMessage: null,
};

const projectsDataSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    setProjectsData: (state, { payload }) => {
      state.projectsData = payload;
    },
  },
  extraReducers: {
    [loadProjectsData.pending]: (state) => {
      state.status = HTTP_STATUS.PENDING;
    },
    [loadProjectsData.rejected]: (state, { error }) => {
      state.status = HTTP_STATUS.REJECTED;
      state.errorMessage = error.message;
    },
    [loadProjectsData.fulfilled]: (state, { payload }) => {
      state.status = HTTP_STATUS.SUCCESS;
      state.projectsData = payload;
    },
  },
});

export const { setProjectsData } = projectsDataSlice.actions;
export default projectsDataSlice.reducer;
