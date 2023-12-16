import { RootState } from "../store";

export const slideName = (state: RootState) => state.slide.items.name;
export const currentSlide = (state: RootState) =>
  state.slide.items.slides.find(
    (slide) => slide.id === state.slide.items.currentSlideID,
  );
export const allData = (state: RootState) => state.slide.items;
