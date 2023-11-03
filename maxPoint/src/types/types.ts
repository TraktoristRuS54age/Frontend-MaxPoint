type Color = string;

type Filter = {
  color: 'grey' | 'red' | 'green' | 'blue' | 'black';
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
};

type Slide = {
  name: string;
  background: Color;
  size: Size;
  filter: Filter;
  selectObjects: Array<Text | ImageBlock | GraphicBlock>;
  objects: Array<TextBlock | ImageBlock | GraphicBlock>;
};

type Char = {
  value: string;
  fontSize: number;
  fontFamily: string;
  color: Color;
  bold: boolean;
  filter: Filter;
};

//Графика (текст, фигуры и изображения)

type Figure = 'rectangle' | 'triangle' | 'circle';

type TextBlock = Block & {
  type: 'text';
  chars: Array<Char>;
};

type ImageBlock = Block & {
  type: 'image';
  data: string;
};

type GraphicBlock = Block & {
  type: 'graphic'; 
  color: Color;
  size: Size;
  form: Figure;
};


// Сайд бар операций

type Operation = {
  id: string;
  data: object;
  prev: Operation | null;
  next: Operation | null;
};

type History = {
  operations: Operation[];
  undidOperations: Operation[];
};


type Preview = Presentation & {
  selected: boolean;
};


type Presentation = {
  name: string;
  currentSlide: Slide | null;
  selectSlides: Slide[];
  slides: Slide[];
  operation: Operation;
  preview: Preview;
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
  Color,
  Menu,
  History,
  Filter,
  Size,
  Position,
  Block,
  Slide,
  Char,
  Figure,
  TextBlock,
  ImageBlock,
  GraphicBlock,
  Operation,
  Preview,
  Presentation
}
