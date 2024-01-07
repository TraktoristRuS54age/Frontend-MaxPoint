import Primitive from "../Primitive/Primitive.tsx";
import { Size } from "../../types/types";
import { Primitive as TPrimitive } from "../../types/types";
import style from "./FigureMenu.module.css";
import { useAppActions } from "../../redux/Actions/Actions.ts";
import { v4 as uuidv4 } from "uuid";

type PrimitiveProps = {
  data: {
    form?: "triangle" | "ellipse" | "rectangle";
    fill: string;
  };
  size: Size;
};
const triangleButton: PrimitiveProps = {
  data: {
    fill: "black",
    form: "triangle",
  },
  size: {
    height: 100,
    width: 100,
  },
};
const rectangleButton: PrimitiveProps = {
  data: {
    fill: "black",
    form: "rectangle",
  },
  size: {
    height: 100,
    width: 100,
  },
};
const ellipseButton: PrimitiveProps = {
  data: {
    fill: "black",
    form: "ellipse",
  },
  size: {
    height: 100,
    width: 100,
  },
};
const FigureMenu = () => {
  const { CreatePrimitive } = useAppActions();

  const newTriangle = (): TPrimitive => {
    return {
      data: {
        fill: "black",
        form: "triangle",
      },
      id: uuidv4(),
      position: {
        x: 0,
        y: 0,
      },
      rotation: 0,
      size: {
        height: 100,
        width: 100,
      },
      type: "primitive",
    };
  };

  const newRectangle = (): TPrimitive => {
    return {
      data: {
        fill: "black",
        form: "rectangle",
      },
      id: uuidv4(),
      position: {
        x: 0,
        y: 0,
      },
      rotation: 0,
      size: {
        height: 100,
        width: 100,
      },
      type: "primitive",
    };
  };

  const newEllipse = (): TPrimitive => {
    return {
      data: {
        fill: "black",
        form: "ellipse",
      },
      id: uuidv4(),
      position: {
        x: 0,
        y: 0,
      },
      rotation: 0,
      size: {
        height: 100,
        width: 100,
      },
      type: "primitive",
    };
  };

  return (
    <div className={style.figure}>
      <div className={style.figure__menu}>
        <button
          className={style.figure__button}
          onClick={() => CreatePrimitive(newTriangle())}
        >
          <Primitive data={triangleButton.data} size={triangleButton.size} />
        </button>
      </div>
      <div className={style.figure__menu}>
        <button
          className={style.figure__button}
          onClick={() => CreatePrimitive(newRectangle())}
        >
          <Primitive data={rectangleButton.data} size={rectangleButton.size} />
        </button>
      </div>
      <div className={style.figure__menu}>
        <button
          className={style.figure__button}
          onClick={() => CreatePrimitive(newEllipse())}
        >
          <Primitive data={ellipseButton.data} size={ellipseButton.size} />
        </button>
      </div>
    </div>
  );
};

export default FigureMenu;
