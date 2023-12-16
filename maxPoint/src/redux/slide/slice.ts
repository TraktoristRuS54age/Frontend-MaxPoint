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
      state.items.slides
        .find((slide) => slide.id === state.items.currentSlideID)!
        .objects.find((obj) => obj.id === id)!.position! = {
        x: pos.x,
        y: pos.y,
      };
    },
    setNewCurentSlideID(state, action: PayloadAction<string>) {
      state.items.currentSlideID = action.payload;
    }
  },
});

export const { changeName, setNewData, setPosition, setNewCurentSlideID } = slideSlice.actions;

const { reducer } = slideSlice;
export default reducer;
