/* eslint-disable sort-keys */
/* eslint-disable sort-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  FontFamily,
  Color,
  TColor,
  Filter,
  Size,
  Position,
  Slide,
  Char,
  Text,
  Image,
  Primitive,
  Operation,
  History,
  // Preview,
  Presentation,
  PresentationSliceState,
} from "../types";

import { v4 as uuidv4 } from "uuid";

const fontFamily: FontFamily = "Arial";

const color: Color = "#aaaaaa";

const textColor: TColor = "black";

const filter: Filter = {
  color: ["grey", "red", "green", "blue", "black"],
};

const size: Size = {
  height: 200,
  width: 400,
};

const workSize: Size = {
  height: 400,
  width: 800,
}

const textSize: Size = {
  height: 60,
  width: 250,
};

const position: Position = {
  x: 12,
  y: 90,
};

// graphic
const text: Text = {
  type: "text",
  data: {
    value: "maxPoint",
    fontSize: 50,
    fontFamily: fontFamily,
    color: textColor,
    bold: true,
  },
  size: textSize,
  id: uuidv4(),
  position: {
    x: 0, //200
    y: 50, //100
  },

};

const image: Image = {
  data: {
    alt: "base",
    src: "https://i.pinimg.com/736x/e6/d3/61/e6d361c27b9c198cf5ddea153e88fb94.jpg",
  },
  id: uuidv4(),
  size: size,
  position: {
    x: 0, //200
    y: 50, //100
  },
  rotation: 0,
  type: "image",
};

const triangle: Primitive = {
  data: {
    form: "triangle",
  },
  id: uuidv4(),
  size: size,
  position: {
    x: 500,
    y: -10,
  },
  rotation: 20,
  type: "primitive",
};

const ellipse: Primitive = {
  data: {
    form: "ellipse",
  },
  id: uuidv4(),
  size: size,
  position: {
    x: 200,
    y: 100,
  },
  rotation: 0,
  type: "primitive",
};

const rectangle: Primitive = {
  data: {
    form: "rectangle",
  },
  size: size,
  id: uuidv4(),
  position: {
    x: 230,
    y: 300,
  },
  rotation: 70,
  type: "primitive",
};

//graphic

const slide: Slide = {
  id: uuidv4(),
  name: "slide",
  background: color,
  selectObjects: null,
  objects: [text, image, triangle, rectangle],
};

const slide1: Slide = {
  id: uuidv4(),
  name: "slide1",
  background: color,
  selectObjects: null,
  objects: [image, triangle],
};

const slide2: Slide = {
  id: uuidv4(),
  name: "slide2",
  background: color,
  selectObjects: null,
  objects: [image, rectangle, text],
};

const slide3: Slide = {
  id: uuidv4(),
  name: "slide3",
  background: color,
  selectObjects: null,
  objects: [image, triangle],
};

const operation: Operation = {
  id: uuidv4(),
  data: {},
};

const history: History = {
  operations: [operation],
  undidOperations: [],
};

const presentation: Presentation = {
  name: "maxPoint",
  currentSlideID: slide.id,
  slides: [slide, slide1, slide2, slide3],
  // operation: operation,
  // preview: Preview,
};

export const presentationSlice: PresentationSliceState = {
  items: presentation,
};

export default presentation;
