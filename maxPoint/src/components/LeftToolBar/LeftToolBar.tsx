/* eslint-disable sort-keys */
/* eslint-disable sort-imports */
import text from "../../resources/img/text.png";
import figures from "../../resources/img/figures.png";
import style from "./LeftToolbar.module.css";
import PhotoButton from "../PhotoButton/PhotoButton";
import UploadButton from "../UploadButton/UploadButton";
import { Text as TText } from "../../types/types";
import { v4 as uuidv4 } from "uuid";
import { useAppActions } from "../../redux/Actions/Actions";

type TFunction = {
  props: () => void;
};

function Left_ToolBar({ props }: TFunction) {
  const { createText } = useAppActions();

  const newText = (): TText => {
    return {
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
  };

  return (
    <div className={style.menu_block}>
      <div className={style.menu_block__list}>
        <div className={style.menu_item} onClick={() => createText(newText())}>
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
