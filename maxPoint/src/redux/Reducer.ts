import { Presentation, Slide } from "../types/types";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { ActionType } from "./Actions/ActionTypes";

const initialState: Presentation = {
  currentSlideID: null,
  name: "maxPoint",
  slides: [],
};

const titleReducer = (state: string, action: ActionType) => {
  if (action.type === "CHANGE_PRESENTATION_TITLE") {
    return action.payload;
  } else {
    return state;
  }
};

const objectsReducer = (state: Presentation, action: ActionType) => {
  const slides: Slide[] = state.slides.map((slide) => ({
    ...slide,
    objects: [...slide.objects],
  }));
  const currentSlide = slides.find(
    (slide) => slide.id === state.currentSlideID,
  );
  const selectedObject = currentSlide?.objects.find(
    (object) => object.id === currentSlide.selectObjects,
  );
  let newObject;
  switch (action.type) {
    case "OBJECT_DELETE":
      newObject = currentSlide!.objects.filter(
        (object) => object.id !== selectedObject!.id,
      );
      currentSlide!.objects = newObject;
      currentSlide!.selectObjects = null;
      return {
        ...state,
        slides: slides,
      };
    case "TOGGLE_AREA":
      if (currentSlide) {
        if (action.payload.event.ctrlKey) {
          currentSlide.selectObjects = null;
          return {
            ...state,
            slides: slides,
          };
        }
        currentSlide.selectObjects = action.payload.id;
        return {
          ...state,
          slides: slides,
        };
      }
      return {
        ...state,
      };
    case "SET_POSITION":
      if (currentSlide && selectedObject) {
        const { x, y } = action.payload;
        if (
          selectedObject.position.x === x &&
          selectedObject.position.y === y
        ) {
          return state;
        }

        const updatedSlides = slides.map((slide) =>
          slide.id === currentSlide.id
            ? {
                ...slide,
                objects: slide.objects.map((obj) =>
                  obj.id === selectedObject.id
                    ? { ...obj, position: { x, y } }
                    : obj,
                ),
              }
            : slide,
        );

        return {
          ...state,
          slides: updatedSlides,
        };
      }
      return state;
    case "SET_SIZE":
      if (currentSlide && selectedObject) {
        const { width, height } = action.payload;
        if (
          selectedObject.size.width === width &&
          selectedObject.size.height === height
        ) {
          return state;
        }

        const updatedSlides = slides.map((slide) =>
          slide.id === currentSlide.id
            ? {
                ...slide,
                objects: slide.objects.map((obj) =>
                  obj.id === selectedObject.id
                    ? { ...obj, size: { height, width } }
                    : obj,
                ),
              }
            : slide,
        );

        return {
          ...state,
          slides: updatedSlides,
        };
      }
      return state;
    case "CREATE_OBJECT":
      if (currentSlide) {
        const updatedSlide = {
          ...currentSlide,
          objects: [...currentSlide.objects, action.payload],
        };

        const updatedSlides = slides.map((slide) =>
          slide.id === currentSlide.id ? updatedSlide : slide,
        );

        return {
          ...state,
          slides: updatedSlides,
        };
      }
      return state;
    case "SET_TEXT_VALUE":
      if (selectedObject?.type === "text") {
        selectedObject.data.value = action.payload;
        selectedObject.data.fontSize =
          action.payload.length != 0 ? selectedObject.data.fontSize : 20;
        selectedObject.size.height =
          action.payload.length != 0 ? selectedObject.size.height : 34;
        selectedObject.size.width =
          action.payload.length != 0 ? selectedObject.size.width : 110;
        return {
          ...state,
          slides: slides,
        };
      }
      return {
        ...state,
      };
    case "SET_TEXT_SIZE":
      if (selectedObject?.type === "text") {
        selectedObject!.data.fontSize = action.payload;
        return {
          ...state,
          slides: slides,
        };
      }
      return {
        ...state,
      };
    case "SET_TEXT_FONT_FAMILY":
      if (selectedObject?.type === "text") {
        selectedObject!.data.fontFamily = action.payload;
        return {
          ...state,
          slides: slides,
        };
      }
      return {
        ...state,
      };
    case "SET_TEXT_BOLD":
      if (selectedObject?.type === "text") {
        selectedObject.data.bold = !selectedObject.data.bold;
        return {
          ...state,
          slides: slides,
        };
      }
      return {
        ...state,
      };
    case "SET_TEXT_FONT_STYLE":
      if (selectedObject?.type === "text") {
        selectedObject.data.fontStyle =
          selectedObject.data.fontStyle === "italic" ? "normal" : "italic";
        return {
          ...state,
          slides: slides,
        };
      }
      return {
        ...state,
      };
    case "SET_TEXT_DECORATION":
      if (selectedObject?.type === "text") {
        selectedObject.data.textDecoration =
          selectedObject.data.textDecoration === "none" ? "underline" : "none";
        return {
          ...state,
          slides: slides,
        };
      }
      return {
        ...state,
      };
    case "SET_COLOR":
      if (selectedObject === undefined) {
        if (currentSlide !== undefined) {
          currentSlide.color = action.payload;
          return {
            ...state,
            slides: slides,
          };
        }
      } else {
        if (selectedObject.type === "primitive")
          selectedObject.data.fill = action.payload;
        if (selectedObject.type === "text")
          selectedObject.data.color = action.payload;
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

const slidesReducer = (state: Presentation, action: ActionType) => {
  const slides = state.slides;
  let newSlides = slides;
  switch (action.type) {
    case "CREATE_NEW_SLIDE":
      return {
        ...state,
        currentSlideID: action.payload.id,
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
        currentSlideID: newSlides.length !== 0 ? newSlides[0].id : null,
        slides: newSlides,
      };
    case "CHANGE_SLIDE_ORDER":
      newSlides = slides.splice(action.payload.from, 1);
      slides.splice(action.payload.to, 0, newSlides[0]);
      return {
        ...state,
        slides: slides,
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
      return slidesReducer(state, action);
    case "OBJECT_DELETE":
    case "TOGGLE_AREA":
    case "SET_POSITION":
    case "SET_SIZE":
    case "CREATE_OBJECT":
    case "SET_TEXT_SIZE":
    case "SET_TEXT_VALUE":
    case "SET_TEXT_FONT_FAMILY":
    case "SET_TEXT_BOLD":
    case "SET_TEXT_FONT_STYLE":
    case "SET_TEXT_DECORATION":
    case "SET_COLOR":
      return objectsReducer(state, action);
    case "UPLOAD_PRESENTATION":
      return action.payload;
    default:
      return state;
  }
};

export default presentationReducer;

type PresentationState = ReturnType<typeof presentationReducer>;

export const useAppSelector: TypedUseSelectorHook<PresentationState> =
  useSelector;
