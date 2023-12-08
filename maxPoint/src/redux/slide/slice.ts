/* eslint-disable sort-imports */
/* eslint-disable sort-keys */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import presentation from "../../types/example/maximum";
import { Presentation } from "../../types/types";

const initialState: Presentation = {
  name: presentation.name,
  currentSlide: presentation.currentSlide,
  selectSlides: presentation.selectSlides,
  slides: presentation.slides,
  operation: presentation.operation,
};

export const slideSlice = createSlice({
  name: "slide",
  initialState,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setNewData(state, action: PayloadAction<Presentation>) {
      state.name = action.payload.name;
      state.currentSlide = action.payload.currentSlide;
      state.selectSlides = action.payload.selectSlides;
      state.slides = action.payload.slides;
      state.operation = action.payload.operation;
    }
  },
});

export const { changeName, setNewData } = slideSlice.actions;

const { reducer } = slideSlice;
export default reducer;
