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

//Графика (текст, фигуры и изображения)
interface Text extends Block {
  type: "text";
  data: {
    value: string;
    fontSize: number;
    fontFamily: string;
    color: TColor;
    bold: boolean;
  }
  size: Size;
}
// type Text = Block & {
//   type: "text";
//   data: {
//     text: Char[];
//   };
// };

interface Image extends Block {
  type: "image";
  data: {
    alt?: string;
    src?: string;
  };
  size: Size;
}

type Primitive = Block & {
  type: "primitive";
  data: {
    form?: "triangle" | "ellipse" | "rectangle";
  };
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

// type Preview = Slide & {
//   prev: Preview | null;
//   next: Preview | null;
// };

type Presentation = {
  name: string;
  currentSlideID: string | null;
  slides: Slide[];
  // operation: Operation;
  // preview: Preview;
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
};
