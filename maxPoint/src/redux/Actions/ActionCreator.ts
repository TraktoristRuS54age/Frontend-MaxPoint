/* eslint-disable sort-imports */
/* eslint-disable sort-keys */
import { Slide, Text, Image, Presentation, Primitive } from "../../types/types";

export const changePresentationName = (name: string) => {
  return {
    type: "CHANGE_PRESENTATION_TITLE",
    payload: name,
  };
};

export const createNewSlide = (slide: Slide) => {
  return {
    type: "CREATE_NEW_SLIDE",
    payload: slide,
  };
};

export const setId = (id: string) => {
  return {
    type: "SET_SLIDE_ID",
    payload: id,
  };
};

export const removeSlide = (id: string) => {
  return {
    type: "REMOVE_SLIDE",
    payload: id,
  };
};

export const changeOrder = (from: number, to: number) => {
  return {
    type: "CHANGE_SLIDE_ORDER",
    payload: {
      from,
      to,
    },
  };
};

export const toggleArea = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  id: string,
) => {
  return {
    type: "TOGGLE_AREA",
    payload: {
      event,
      id,
    },
  };
};

export const setPosition = (pos: { x: number; y: number }) => {
  return {
    type: "SET_POSITION",
    payload: pos,
  };
};

export const setSize = (size: { height: number; width: number }) => {
  return {
    type: "SET_SIZE",
    payload: size,
  };
};

export const createText = (text: Text) => {
  return {
    type: "CREATE_TEXT",
    payload: text,
  };
};

export const createImage = (image: Image) => {
  return {
    type: "CREATE_IMAGE",
    payload: image,
  };
};

export const UploadPresentation = (dataParsing: Presentation) => {
  return {
    type: "UPLOAD_PRESENTATION",
    payload: dataParsing,
  };
};

export const CreatePrimitive = (data: Primitive) => {
  return {
    type: "CREATE_PRIMITIVE",
    payload: data,
  };
};

export const SetTextValue = (value: string) => {
  return {
    type: "SET_TEXT_VALUE",
    payload: value,
  };
};

export const SetTextSize = (size: number) => {
  return {
    type: "SET_TEXT_SIZE",
    payload: size,
  };
};

export const SetTextFontFamily = (data: string) => {
  return {
    type: "SET_TEXT_FONT_FAMILY",
    payload: data,
  };
};

export const SetTextBold = () => {
  return {
    type: "SET_TEXT_BOLD",
  };
};

export const SetTextFontStyle = () => {
  return {
    type: "SET_TEXT_FONT_STYLE",
  };
};

export const SetTextDecoration = () => {
  return {
    type: "SET_TEXT_DECORATION",
  };
};

export const ObjectDelete = () => {
  return {
    type: "OBJECT_DELETE",
  };
};

export const SetColor = (data: string) => {
  return {
    type: "SET_COLOR",
    payload: data,
  };
};