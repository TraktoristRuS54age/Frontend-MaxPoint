/* eslint-disable sort-keys */
/* eslint-disable sort-imports */
import text from "../../resources/img/text.png";
import figures from "../../resources/img/figures.png";
import style from "./LeftToolbar.module.css";
import PhotoButton from "../PhotoButton/PhotoButton";
import UploadButton from "../UploadButton/UploadButton";
import { useContext } from "react";
import { PresentationContext } from "../../context/context";
import { Text as TText } from "../../types/types";
import { v4 as uuidv4 } from "uuid";

type TFunction = {
  props: () => void;
};

function Left_ToolBar({ props }: TFunction) {
  const { presentation, setPresentation } = useContext(PresentationContext);
  const newPresentation = { ...presentation };

  const createText = () => {
    const text: TText = {
      type: "text",
      data: {
        value: "",
        fontSize: 20,
        fontFamily: "Arial",
        fontStyle: "normal",
        textDecoration: "none",
        color: "black",
        bold: true,
      },
      size: {
        height: 34,
        width: 110,
      },
      id: uuidv4(),
      position: {
        x: 0, //200
        y: 0, //100
      },
    };
    newPresentation.slides
      .find((slide) => slide.id === newPresentation.currentSlideID)
      ?.objects.push(text);
    setPresentation(newPresentation);
  };

  return (
    <div className={style.menu_block}>
      <div className={style.menu_block__list}>
        <div className={style.menu_item} onClick={createText}>
          <img className={style.menu_block__img} src={text}></img>
          <p className={style.menu_block_text}>Text</p>
        </div>

        <div className={style.menu_item}>
          <button className={style.figure__button} onClick={props}>
            <img className={style.menu_block__img} src={figures}></img>
          </button>
          <p className={style.menu_block_text}>Figure</p>
        </div>
        <PhotoButton />
        <UploadButton />
      </div>
    </div>
  );
}

export default Left_ToolBar;
