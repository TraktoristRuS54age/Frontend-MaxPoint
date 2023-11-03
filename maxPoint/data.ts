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

type Canvas = {
  name: string;
  background: Color;
  size: Size;
  filter: Filter;
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
  form: Figure;
};

type Operation = {
  id: string;
  prev: Operation | null;
  next: Operation | null;
}


type Preview = Workspace & {
  selected: boolean;
}

type Workspace = {
  pages: Array<Canvas>;
};

type Presentation = {
  name: string;
  workspace: Workspace;
  operation: Operation;
  preview: Preview;
}


export type {
  Color,
  Filter,
  Size,
  Position,
  Block,
  Canvas,
  Char,
  Figure,
  TextBlock,
  ImageBlock,
  GraphicBlock,
  Operation,
  Workspace,
  Preview,
  Presentation
}
