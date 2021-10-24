import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const hamburgerSlice = createSlice({
  name: "hamburger",
  initialState,
  reducers: {
    setBurgerOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  },
});
export const { setBurgerOpen } = hamburgerSlice.actions;
export default hamburgerSlice.reducer;
