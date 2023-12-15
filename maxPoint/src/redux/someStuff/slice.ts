/* eslint-disable sort-imports */
/* eslint-disable sort-keys */
import { createSlice } from "@reduxjs/toolkit";

type initialStateType = {
  isOpen: boolean;
};

const initialState: initialStateType = {
  isOpen: false,
};

export const slideSlice = createSlice({
  name: "stuff",
  initialState,
  reducers: {
    changeIsOpen(state) {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { changeIsOpen } = slideSlice.actions;

const { reducer } = slideSlice;
export default reducer;
