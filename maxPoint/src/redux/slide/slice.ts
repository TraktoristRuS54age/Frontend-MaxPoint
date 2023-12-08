/* eslint-disable sort-imports */
/* eslint-disable sort-keys */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import presentation from "../../types/example/maximum";
import { PresentationSliceState, Presentation } from "../../types/types";

const initialState: PresentationSliceState = {
  items: presentation,
};

export const slideSlice = createSlice({
  name: "slide",
  initialState,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.items.name = action.payload;
    },
    setNewData(state, action: PayloadAction<Presentation>) {
      state.items = action.payload;
    }
  },
});

export const { changeName, setNewData } = slideSlice.actions;

const { reducer } = slideSlice;
export default reducer;
