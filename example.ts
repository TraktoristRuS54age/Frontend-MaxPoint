import {
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
  HistoryOperations,
  Docum,
} from './data';


const textBlock: TextBlock = {
  id: 'id1',
  position: {
        x: 10,
        y: 12, 
  },
  size: {
      width: 200,
      height: 300,  
  },
  type: 'text',
  chars: [{
     value: 'G',
     fontSize: 14,
     fontFamily: 'Times New Roman',
     color: '#FCFCFC',
     bold: true,
  }],
};

const imageBlock: ImageBlock = {
  id: 'id2',
  position: {
        x: 2,
        y: 2,  
  },
  size: {
    width: 50,
    height: 50,
  },
  type: 'image',
  data: 'https://',
};
 
const graphicBlock: GraphicBlock = {
  id: 'id3',
  position: {
        x: 67,
        y: 45,  
  },
  size: {
    width: 100,
    height: 100,
  },
  type: 'graphic',
  color: '#SSSSSS',
  form: 'ellipse',
};

const canvas: Canvas = {
  name: 'first',
  background: '#FFFFFF',
  size: {
    width: 500,
    height: 300,
  },
  filter: {
     color: 'grey',
  },
  objects: [textBlock, imageBlock, graphicBlock],
};

const doc: Docum = {
   pages: canvas,
}; 
 