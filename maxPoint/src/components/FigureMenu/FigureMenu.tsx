/* eslint-disable sort-imports */
/* eslint-disable sort-keys */
import { Primitive as TPrimitive } from "../../types/types";
import { v4 as uuidv4 } from "uuid";
import style from "./FigureMenu.module.css";
import Primitive from "../Primitive/Primitive.tsx";
import { Size } from "../../types/types";
import { useAppActions } from "../../redux/Actions/Actions.ts";

type PrimitiveProps = {
  data: {
    form?: "triangle" | "ellipse" | "rectangle";
    fill: string;
  };
  size: Size;
};
const triangleButton: PrimitiveProps = {
  data: {
    form: "triangle",
    fill: "black",
  },
  size: {
    width: 100,
    height: 100,
  },
};
const rectangleButton: PrimitiveProps = {
  data: {
    form: "rectangle",
    fill: "black",
  },
  size: {
    width: 100,
    height: 100,
  },
};
const ellipseButton: PrimitiveProps = {
  data: {
    form: "ellipse",
    fill: "black",
  },
  size: {
    width: 100,
    height: 100,
  },
};
const FigureMenu = () => {
  const { CreatePrimitive } = useAppActions();

  const newTriangle = (): TPrimitive => {
    return {
      data: {
        form: "triangle",
        fill: "black",
      },
      id: uuidv4(),
      size: {
        height: 100,
        width: 100,
      },
      position: {
        x: 0,
        y: 0,
      },
      rotation: 0,
      type: "primitive",
    };
  };

  const newRectangle = (): TPrimitive => {
    return {
      data: {
        form: "rectangle",
        fill: "black",
      },
      size: {
        height: 100,
        width: 100,
      },
      id: uuidv4(),
      position: {
        x: 0,
        y: 0,
      },
      rotation: 0,
      type: "primitive",
    };
  };

  const newEllipse = (): TPrimitive => {
    return {
      data: {
        form: "ellipse",
        fill: "black",
      },
      id: uuidv4(),
      size: {
        height: 100,
        width: 100,
      },
      position: {
        x: 0,
        y: 0,
      },
      rotation: 0,
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
