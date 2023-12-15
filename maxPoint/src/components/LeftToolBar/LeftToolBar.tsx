/* eslint-disable sort-imports */
import text from "../../resources/img/text.png";
import figures from "../../resources/img/figures.png";
import photo from "../../resources/img/photo.png";
import style from "./LeftToolbar.module.css";
import UploadButton from "../UploadButton/UploadButton";
import { useAppDispatch } from "../../redux/store";
import { changeIsOpen } from "../../redux/someStuff/slice";

function Left_ToolBar() {
  const dispatch = useAppDispatch();
  return (
    <div className={style.menu_block}>
      <div className={style.menu_block__list}>
        <div className={style.menu_item}>
          <img className={style.menu_block__img} src={text}></img>
          <p className={style.menu_block_text}>Text</p>
        </div>

        <div className={style.menu_item}>
          <button
            className={style.figure__button}
            onClick={() => dispatch(changeIsOpen())}>
            <img className={style.menu_block__img} src={figures}></img>
            <p className={style.menu_block_text}>Figure</p>
          </button>
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
