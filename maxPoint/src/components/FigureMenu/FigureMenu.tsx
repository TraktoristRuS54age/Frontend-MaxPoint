import {
  ellipse as newEllipse,
  rectangle as newRectangle,
  triangle as newTriangle,
} from "../../types/example/maximum.ts";
import Primitive from "../Primitive/Primitive.tsx";
import { Size } from "../../types/types";
import style from "./FigureMenu.module.css";
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
  const { CreateObject } = useAppActions();

  return (
    <div className={style.figure}>
      <div className={style.figure__menu}>
        <button
          className={style.figure__button}
          onClick={() => CreateObject(newTriangle())}
        >
          <Primitive data={triangleButton.data} size={triangleButton.size} />
        </button>
      </div>
      <div className={style.figure__menu}>
        <button
          className={style.figure__button}
          onClick={() => CreateObject(newRectangle())}
        >
          <Primitive data={rectangleButton.data} size={rectangleButton.size} />
        </button>
      </div>
      <div className={style.figure__menu}>
        <button
          className={style.figure__button}
          onClick={() => CreateObject(newEllipse())}
        >
          <Primitive data={ellipseButton.data} size={ellipseButton.size} />
        </button>
      </div>
    </div>
  );
};

export default FigureMenu;
