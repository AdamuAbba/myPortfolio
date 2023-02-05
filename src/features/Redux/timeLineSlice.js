import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

export const timeLineSlice = createSlice({
  name: "timelineState",
  initialState,
  reducers: {
    setTimeline: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setTimeline } = timeLineSlice.actions;

export default timeLineSlice.reducer;
