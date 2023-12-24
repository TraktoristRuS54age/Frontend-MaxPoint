/* eslint-disable sort-imports */
import text from "../../resources/img/text.png";
import figures from "../../resources/img/figures.png";
import photo from "../../resources/img/photo.png";
import style from "./LeftToolbar.module.css";
import UploadButton from "../UploadButton/UploadButton";

type TFunction = {
  props: () => void;
}

function Left_ToolBar({props}: TFunction) {
  return (
    <div className={style.menu_block}>
      <div className={style.menu_block__list}>
        <div className={style.menu_item}>
          <img className={style.menu_block__img} src={text}></img>
          <p className={style.menu_block_text}>Text</p>
        </div>

        <div className={style.menu_item}>
          <button className={style.figure__button} onClick={props}>
            <img className={style.menu_block__img} src={figures}></img>
          </button>
          <p className={style.menu_block_text}>Figure</p>
        </div>

        <div className={style.menu_item}>
          <img className={style.menu_block__img} src={photo}></img>
          <p className={style.menu_block_text}>Photos</p>
        </div>
        <UploadButton />
      </div>
    </div>
  );
}

export default Left_ToolBar;
