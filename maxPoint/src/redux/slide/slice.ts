/* eslint-disable sort-imports */
/* eslint-disable sort-keys */
import { createSlice } from "@reduxjs/toolkit";
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
  reducers: {},
});

const { reducer } = slideSlice;
export default reducer;
