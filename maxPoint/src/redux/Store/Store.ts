import { createStore } from "redux";
import presentationReducer from "../Reducer";

export const store = createStore(presentationReducer);
