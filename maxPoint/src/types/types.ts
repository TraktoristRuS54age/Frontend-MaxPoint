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
  id: string;
  background: Color;
  size: Size;
  filter: Filter;
  selectObjects: Graphics;
  objects: Graphics;
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
type Graphics = {
  Objects: Array<TextBlock | ImageBlock | GraphicBlock>;
}

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
type SideBar = {
  Objects: Array<SideBarElement>;
}

type SideBarElement = {
  id: string;
  data: object;
}
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


type Preview = Slide & {
  prev: Preview | null;
  next: Preview | null;
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
  SideBar,
  Presentation
}
