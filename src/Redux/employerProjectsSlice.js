import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import sanityClient from "../client";
import { HTTP_STATUS } from "../configs/constants";

export const getEmployerProjects = createAsyncThunk(
  "projects/getEmployerProjects",
  async (_, { rejectWithValue }) => {
    try {
      const request = await sanityClient.fetch(
        `*[_type == "employer_projects"]{title,date,description,official_site,liveUrl,mainImage{asset->{_id,url}},techs}`
      );
      return request;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const initialState = {
  employerProjectsResponse: {
    isSuccess: null,
    isError: null,
    status: null,
  },
};

const employerProjectsSlice = createSlice({
  name: "employerProjects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEmployerProjects.pending, (state) => {
      state.employerProjectsResponse.status = HTTP_STATUS.PENDING;
    });
    builder.addCase(getEmployerProjects.fulfilled, (state, { payload }) => {
      state.employerProjectsResponse.status = HTTP_STATUS.SUCCESS;
      state.employerProjectsResponse.isSuccess = payload;
      console.log("isSuccess", payload);
    });
    builder.addCase(getEmployerProjects.rejected, (state, { payload }) => {
      state.employerProjectsResponse.status = HTTP_STATUS.REJECTED;
      state.employerProjectsResponse.isError = payload;
      console.log("isError : ", payload);
    });
  },
});

export default employerProjectsSlice.reducer;
