/* eslint-disable sort-imports */
import text from "../../resources/img/text.png";
import figures from "../../resources/img/figures.png";
import photo from "../../resources/img/photo.png";
import style from "./Left_ToolBar.module.css";

function Left_ToolBar() {
  return (
    <div className={style.menu_block}>
      <div className={style.menu_block__list}>
        <div className={style.menu_item}>
          <img className={style.menu_block__img} src={text}></img>
          <p className={style.menu_block_text}>Text</p>
        </div>

        <div className={style.menu_item}>
          <img className={style.menu_block__img} src={figures}></img>
          <p className={style.menu_block_text}>Figure</p>
        </div>

        <div className={style.menu_item}>
          <img className={style.menu_block__img} src={photo}></img>
          <p className={style.menu_block_text}>Photos</p>
        </div>
      </div>
    </div>
  );
}

export default Left_ToolBar;
