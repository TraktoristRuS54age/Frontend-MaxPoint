import { RootState } from "../store";

export const slideName = (state: RootState) => state.slide.name;
export const allData = (state: RootState) => state.slide;