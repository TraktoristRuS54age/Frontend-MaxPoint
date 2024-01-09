type FontFamily = string;

type Color = string;
type TColor = string;

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
  zIndex?: number;
};

type MainObjects = Text | Image | Primitive;

interface Slide {
  id: string;
  name: string;
  color: Color;
  selectObjects: string | null;
  objects: Array<MainObjects>;
}

interface TextData {
  data: {
    value: string;
    fontSize: number;
    fontFamily: string;
    fontStyle: string;
    textDecoration: string;
    color: TColor;
    bold: boolean;
  };
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
    fill: string;
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
}

type Presentation = {
  name: string;
  currentSlideID: string | null;
  slides: Slide[];
};


export type {
  FontFamily,
  Color,
  TColor,
  Size,
  Position,
  Block,
  Slide,
  Text,
  Image,
  Primitive,
  MainObjects,
  Presentation,
  TextData,
  PrimitiveData,
};
