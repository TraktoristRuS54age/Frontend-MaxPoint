import {
  Color,
  Filter,
  FontFamily,
  Image,
  Position,
  Presentation,
  PresentationSliceState,
  Primitive,
  Size,
  Slide,
  TColor,
  Text,
} from "../types";

import { v4 as uuidv4 } from "uuid";

const fontFamily: FontFamily = "Arial";

const color: Color = "#aaaaaa";

const textColor: TColor = "black";

export const filter: Filter = {
  color: ["grey", "red", "green", "blue", "black"],
};

const size: Size = {
  height: 200,
  width: 400,
};

export const workSize: Size = {
  height: 400,
  width: 800,
};

const textSize: Size = {
  height: 50,
  width: 100,
};

export const position: Position = {
  x: 12,
  y: 90,
};

const text: Text = {
  data: {
    bold: true,
    color: textColor,
    fontFamily: fontFamily,
    fontSize: 20,
    fontStyle: "normal",
    textDecoration: "none",
    value: "",
  },
  id: uuidv4(),
  position: {
    x: 0, //200
    y: 50, //100
  },
  size: textSize,
  type: "text",
};

const image: Image = {
  data: {
    alt: "base",
    src: "https://i.pinimg.com/736x/e6/d3/61/e6d361c27b9c198cf5ddea153e88fb94.jpg",
  },
  id: uuidv4(),
  position: {
    x: 0, //200
    y: 50, //100
  },
  rotation: 0,
  size: size,
  type: "image",
};

const triangle: Primitive = {
  data: {
    fill: "black",
    form: "triangle",
  },
  id: uuidv4(),
  position: {
    x: 500,
    y: -10,
  },
  rotation: 20,
  size: size,
  type: "primitive",
};

export const ellipse: Primitive = {
  data: {
    fill: "black",
    form: "ellipse",
  },
  id: uuidv4(),
  position: {
    x: 200,
    y: 100,
  },
  rotation: 0,
  size: size,
  type: "primitive",
};

const rectangle: Primitive = {
  data: {
    fill: "black",
    form: "rectangle",
  },
  id: uuidv4(),
  position: {
    x: 230,
    y: 300,
  },
  rotation: 70,
  size: size,
  type: "primitive",
};

const slide: Slide = {
  background: color,
  id: uuidv4(),
  name: "slide",
  objects: [text, image, triangle, rectangle],
  selectObjects: null,
};

const presentation: Presentation = {
  currentSlideID: slide.id,
  name: "maxPoint",
  slides: [slide],
  // operation: operation,
  // preview: Preview,
};

export const presentationSlice: PresentationSliceState = {
  items: presentation,
};

export default presentation;
