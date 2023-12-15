/* eslint-disable sort-imports */
/* eslint-disable sort-keys */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import presentation from "../../types/example/maximum";
import { PresentationSliceState, Presentation } from "../../types/types";

const initialState: PresentationSliceState = {
  items: presentation,
};

interface TSetPosition {
  pos: {
    x: number; //200
    y: number; // 150
  };
  id: string;
}

export const slideSlice = createSlice({
  name: "slide",
  initialState,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.items.name = action.payload;
    },
    setNewData(state, action: PayloadAction<Presentation>) {
      state.items = action.payload;
    },
    setPosition(state, action: PayloadAction<TSetPosition>) {
      const { pos, id } = action.payload;
      state.items.currentSlide!.objects.find(
        (obj) => obj.id === id,
      )!.position! = {
        x: pos.x,
        y: pos.y,
      };
      const currId = state.items.currentSlide?.id;
      state.items.slides
        .find((slide) => slide.id === currId)!
        .objects.find((obj) => obj.id === id)!.position! = {
        x: pos.x,
        y: pos.y,
      };
    },
  },
});

export const { changeName, setNewData, setPosition } = slideSlice.actions;

const { reducer } = slideSlice;
export default reducer;
