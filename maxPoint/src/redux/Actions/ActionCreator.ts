/* eslint-disable sort-keys */
import { Slide } from "../../types/types";

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
