/* eslint-disable sort-keys */
/* eslint-disable prettier/prettier */
/* eslint-disable sort-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  FontFamily,
  Color,
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
} from '../types';

import { v4 as uuidv4 } from "uuid";

const fontFamily: FontFamily = "Arial";

const color: Color = "#aaaaaa";

const filter: Filter = {
  color: ['grey', 'red', 'green', 'blue', 'black']
}

const size: Size = {
  height: 200,
  width: 400,
};

const position: Position = {
  x: 12,
  y: 90,
};

const char: Char = {
  value: "T",
  fontSize: 12,
  fontFamily: fontFamily,
  color: color,
  bold: false,
  id: uuidv4(),
};

// graphic

const text: Text = {
  data: {
    text: [char],
  },
  id: uuidv4(),
  position: {
    x: 0,
    y: 0,
  },
  rotation: 0,
  size: size,
  type: "text",
};

const image: Image = {
  data: {
    alt: "base",
    size: size,
    src: "https://i.pinimg.com/736x/e6/d3/61/e6d361c27b9c198cf5ddea153e88fb94.jpg",
  },
  id: uuidv4(),
  position: {
    x: 0,
    y: 20,
  },
  rotation: 0,
  size: size,
  type: "image",
};

const triangle: Primitive = {
  data: {
    form: "triangle",
    size: size,
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

const ellipse: Primitive = {
  data: {
    form: "ellipse",
    size: size,
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
    form: "rectangle",
    size: size,
  },
  id: uuidv4(),
  position: {
    x: 430,
    y: 0,
  },
  rotation: 70,
  size: size,
  type: "primitive",
};

//graphic

const slide: Slide = {
  id: uuidv4(),
  name: 'slide',
  background: color,
  // size: size,
  // filter: Filter;
  selectObjects: [image, text, triangle, rectangle, ellipse],
  objects: [image, triangle, ellipse],
};

const slide1: Slide = {
  id: uuidv4(),
  name: 'slide1',
  background: color,
  selectObjects: [image, text, triangle, rectangle, ellipse],
  objects: [image],
};

const slide2: Slide = {
  id: uuidv4(),
  name: 'slide2',
  background: color,
  selectObjects: [image, text, triangle, rectangle, ellipse],
  objects: [image],
};

const slide3: Slide = {
  id: uuidv4(),
  name: 'slide3',
  background: color,
  selectObjects: [image, text, triangle, rectangle, ellipse],
  objects: [image],
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
  name: "First",
  currentSlide: slide,
  selectSlides: [],
  slides: [slide, slide1, slide2, slide3],
  operation: operation,
  // preview: Preview,
};

export default presentation;