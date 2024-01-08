import {
  Image,
  Position,
  Presentation,
  Primitive,
  Size,
  Slide,
  Text,
} from "../types";

import { v4 as uuidv4 } from "uuid";

export const workSize: Size = {
  height: 400,
  width: 800,
};

export const position: Position = {
  x: 12,
  y: 90,
};

export const text = (): Text => {
  return {
    data: {
      bold: true,
      color: "black",
      fontFamily: "Arial",
      fontSize: 20,
      fontStyle: "normal",
      textDecoration: "none",
      value: "",
    },
    id: uuidv4(),
    position: {
      x: 0, //200
      y: 0, //100
    },
    size: {
      height: 34,
      width: 110,
    },
    type: "text",
  };
};

export const image = (imageUrl: string): Image => {
  return {
    data: {
      alt: "не найдено",
      src: imageUrl,
    },
    id: uuidv4(),
    position: {
      x: 0,
      y: 0,
    },
    size: {
      height: 100,
      width: 100,
    },
    type: "image",
  };
};

export const triangle = (): Primitive => {
  return {
    data: {
      fill: "black",
      form: "triangle",
    },
    id: uuidv4(),
    position: {
      x: 0,
      y: 0,
    },
    rotation: 0,
    size: {
      height: 100,
      width: 100,
    },
    type: "primitive",
  };
};

export const ellipse = (): Primitive => {
  return {
    data: {
      fill: "black",
      form: "ellipse",
    },
    id: uuidv4(),
    position: {
      x: 0,
      y: 0,
    },
    rotation: 0,
    size: {
      height: 100,
      width: 100,
    },
    type: "primitive",
  };
};

export const rectangle = (): Primitive => {
  return {
    data: {
      fill: "black",
      form: "rectangle",
    },
    id: uuidv4(),
    position: {
      x: 0,
      y: 0,
    },
    rotation: 0,
    size: {
      height: 100,
      width: 100,
    },
    type: "primitive",
  };
};

export const slide = (): Slide => {
  return {
    background: "#aaaaaa",
    id: uuidv4(),
    name: `${uuidv4()}`,
    objects: [],
    selectObjects: null,
  }
};

const presentation: Presentation = {
  currentSlideID: slide().id,
  name: "maxPoint",
  slides: [slide()],
};

export default presentation;
