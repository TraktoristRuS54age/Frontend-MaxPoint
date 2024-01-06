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
  Text,
  Image,
  Primitive,
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
  height: 50,
  width: 100,
};

const position: Position = {
  x: 12,
  y: 90,
};

// graphic
const text: Text = {
  type: "text",
  data: {
    value: "",
    fontSize: 20,
    fontFamily: fontFamily,
    fontStyle: 'normal',
    textDecoration: 'none',
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
    fill: 'black',
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
    fill: 'black',
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
    fill: 'black',
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


const presentation: Presentation = {
  name: "maxPoint",
  currentSlideID: slide.id,
  slides: [slide],
  // operation: operation,
  // preview: Preview,
};

export const presentationSlice: PresentationSliceState = {
  items: presentation,
};

export default presentation;

