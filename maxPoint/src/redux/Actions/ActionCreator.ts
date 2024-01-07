import { Image, Presentation, Primitive, Slide, Text } from "../../types/types";

export const changePresentationName = (name: string) => {
  return {
    payload: name,
    type: "CHANGE_PRESENTATION_TITLE",
  };
};

export const createNewSlide = (slide: Slide) => {
  return {
    payload: slide,
    type: "CREATE_NEW_SLIDE",
  };
};

export const setId = (id: string) => {
  return {
    payload: id,
    type: "SET_SLIDE_ID",
  };
};

export const removeSlide = (id: string) => {
  return {
    payload: id,
    type: "REMOVE_SLIDE",
  };
};

export const changeOrder = (from: number, to: number) => {
  return {
    payload: {
      from,
      to,
    },
    type: "CHANGE_SLIDE_ORDER",
  };
};

export const toggleArea = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  id: string,
) => {
  return {
    payload: {
      event,
      id,
    },
    type: "TOGGLE_AREA",
  };
};

export const setPosition = (pos: { x: number; y: number }) => {
  return {
    payload: pos,
    type: "SET_POSITION",
  };
};

export const setSize = (size: { height: number; width: number }) => {
  return {
    payload: size,
    type: "SET_SIZE",
  };
};

export const createText = (text: Text) => {
  return {
    payload: text,
    type: "CREATE_TEXT",
  };
};

export const createImage = (image: Image) => {
  return {
    payload: image,
    type: "CREATE_IMAGE",
  };
};

export const UploadPresentation = (dataParsing: Presentation) => {
  return {
    payload: dataParsing,
    type: "UPLOAD_PRESENTATION",
  };
};

export const CreatePrimitive = (data: Primitive) => {
  return {
    payload: data,
    type: "CREATE_PRIMITIVE",
  };
};

export const SetTextValue = (value: string) => {
  return {
    payload: value,
    type: "SET_TEXT_VALUE",
  };
};

export const SetTextSize = (size: number) => {
  return {
    payload: size,
    type: "SET_TEXT_SIZE",
  };
};

export const SetTextFontFamily = (data: string) => {
  return {
    payload: data,
    type: "SET_TEXT_FONT_FAMILY",
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
    payload: data,
    type: "SET_COLOR",
  };
};
