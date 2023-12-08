/* eslint-disable sort-keys */
import { configureStore } from "@reduxjs/toolkit";
import slide from "./slide/slice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: { slide },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
