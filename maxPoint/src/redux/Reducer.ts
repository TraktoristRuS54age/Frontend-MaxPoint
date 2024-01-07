/* eslint-disable sort-imports */
import { Presentation } from "../types/types";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { ActionType } from "./Actions/ActionTypes";
import { presentationSlice as data } from "../types/example/maximum.ts";

const initialState: Presentation = {
  currentSlideID: null,
  name: "maxPoint",
  slides: data.items.slides,
};

const titleReducer = (state: string, action: ActionType) => {
  if (action.type === "CHANGE_PRESENTATION_TITLE") {
    return action.payload;
  } else {
    return state;
  }
};

const slidesReducer = (state: Presentation, action: ActionType) => {
  const slides = state.slides;
  const currentSlide = slides.find(
    (slide) => slide.id === state.currentSlideID,
  );
  const selectedObject = currentSlide?.objects.find(
    (object) => object.id === currentSlide.selectObjects,
  );
  let newSlides = slides;
  switch (action.type) {
    case "CREATE_NEW_SLIDE":
      return {
        ...state,
        slides: [...state.slides, action.payload],
      };
    case "SET_SLIDE_ID":
      newSlides = slides.map((slide) =>
        slide.id === state.currentSlideID
          ? { ...slide, selectObjects: null }
          : slide,
      );
      return {
        ...state,
        currentSlideID: action.payload,
        slides: newSlides,
      };
    case "REMOVE_SLIDE":
      newSlides = slides.filter((slide) => slide.id !== action.payload);
      return {
        ...state,
        currentSlideID:
          state.currentSlideID === action.payload ? null : state.currentSlideID,
        slides: newSlides,
      };
    case "CHANGE_SLIDE_ORDER":
      newSlides = slides.splice(action.payload.from, 1);
      slides.splice(action.payload.to, 0, newSlides[0]);
      return {
        ...state,
        slides: slides,
      };
    case "TOGGLE_AREA":
      if (currentSlide) {
        console.log("toggle");
        if (action.payload.event.ctrlKey) {
          const newSlides = slides.map((slide) =>
            slide.id === currentSlide.id
              ? { ...slide, selectObjects: null }
              : slide,
          );

          return {
            ...state,
            slides: newSlides,
          };
        }
        currentSlide.selectObjects = action.payload.id;
        const newSlides = slides.map((slide) =>
          slide.id === currentSlide.id
            ? { ...slide, selectObjects: action.payload.id }
            : slide,
        );
        return {
          ...state,
          slides: newSlides,
        };
      }
      return {
        ...state,
      };
    case "SET_POSITION":
      if (currentSlide && selectedObject) {
        const updatedObjects = currentSlide.objects.map((obj) =>
          obj.id === currentSlide.selectObjects
            ? { ...obj, position: { x: action.payload.x, y: action.payload.y } }
            : obj,
        );

        const updatedSlide = { ...currentSlide, objects: updatedObjects };

        const updatedSlides = newPresentation.slides.map((slide) =>
          slide.id === newPresentation.currentSlideID ? updatedSlide : slide,
        );
        
        selectedObject.position = {
          x: action.payload.x,
          y: action.payload.y,
        };
        return {
          ...state,
          slides: slides,
        };
      }
      return {
        ...state,
      };
    case "SET_SIZE":
      if (currentSlide && selectedObject) {
        selectedObject.size = {
          height: action.payload.size.height,
          width: action.payload.size.width,
        };
        return {
          ...state,
          slides: slides,
        };
      }
      return {
        ...state,
      };
    default:
      return state;
  }
};

const presentationReducer = (
  state: Presentation = initialState,
  action: ActionType,
) => {
  switch (action.type) {
    case "CHANGE_PRESENTATION_TITLE":
      return {
        ...state,
        name: titleReducer(state.name, action),
      };
    case "CREATE_NEW_SLIDE":
    case "SET_SLIDE_ID":
    case "REMOVE_SLIDE":
    case "CHANGE_SLIDE_ORDER":
    case "TOGGLE_AREA":
    case "SET_POSITION":
    case "SET_SIZE":
      return slidesReducer(state, action);
    default:
      return state;
  }
};

export default presentationReducer;

type PresentationState = ReturnType<typeof presentationReducer>;

export const useAppSelector: TypedUseSelectorHook<PresentationState> =
  useSelector;
