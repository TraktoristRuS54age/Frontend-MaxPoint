type FontFamily = string;

type Color = string;
type TColor = string;

type Filter = {
  color: string[];
};

type Size = {
  width: number;
  height: number;
};

type Position = {
  x: number;
  y: number;
};

type Block = {
  id: string;
  position: Position;
  rotation?: number;
};

interface Slide {
  id: string,
  name: string;
  background: Color;
  // size: Size;
  // filter: Filter;
  selectObjects: string | null;
  objects: Array<Text | Image | Primitive>;
};

type Char = {
  value: string;
  fontSize: number;
  fontFamily: string;
  color: TColor;
  bold: boolean;
  id: string;
};

interface TextData {
  data: {
    value: string;
    fontSize: number;
    fontFamily: string;
    fontStyle: string;
    textDecoration: string;
    color: TColor;
    bold: boolean;
  }
}

interface ImageData {
  data: {
    alt?: string;
    src?: string;
  };
}

interface PrimitiveData {
  data: {
    form?: "triangle" | "ellipse" | "rectangle";
  };
}

//Графика (текст, фигуры и изображения)
interface Text extends Block, TextData {
  type: "text";
  size: Size;
}

interface Image extends Block, ImageData {
  type: "image";
  size: Size;
}

interface Primitive extends Block, PrimitiveData {
  type: "primitive";
  size: Size;
};

type Operation = {
  id: string;
  data: object;
};

type History = {
  operations: Operation[];
  undidOperations: Operation[];
};

type Presentation = {
  name: string;
  currentSlideID: string | null;
  slides: Slide[];
};

interface PresentationSliceState {
  items: Presentation;
}

type Option = {
  id: string;
  value: number | string;
  label: string;
};

type MenuElement = {
  id: string;
  text: string;
  shortcut?: string;
};

type Menu = {
  menuElements: MenuElement[];
};

export type {
  FontFamily,
  Color,
  TColor,
  Filter,
  Size,
  Position,
  Block,
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
  Option,
  MenuElement,
  Menu,
  TextData,
};
