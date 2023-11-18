type FontFamily = string;

type Color = string;

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
  size: Size;
  rotation: number;
};

type Slide = {
  id: string;
  name: string;
  background: Color;
  // size: Size;
  // filter: Filter;
  selectObjects: Array<Text | Image | Primitive>;
  objects: Array<Text | Image | Primitive>;
};

type Char = {
  value: string;
  fontSize: number;
  fontFamily: string;
  color: Color;
  bold: boolean;
  id: string;
};

//Графика (текст, фигуры и изображения)
type Text = Block & {
  type: "text";
  data: {
    text: Char[];
  };
};

type Image = Block & {
  type: "image";
  data: {
    alt: string;
    src: string;
    size: Size;
  };
};

type Primitive = Block & {
  type: "primitive";
  data: {
    size: Size;
    form: "triangle" | "ellipse" | "rectangle";
  };
};

type Operation = {
  id: string;
  data: object;
};

type History = {
  operations: Operation[];
  undidOperations: Operation[];
};

// type Preview = Slide & {
//   prev: Preview | null;
//   next: Preview | null;
// };

type Presentation = {
  name: string;
  currentSlide: Slide | null;
  selectSlides: Slide[];
  slides: Slide[];
  operation: Operation;
  // preview: Preview;
};

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
  Option,
  MenuElement,
  Menu,
};

