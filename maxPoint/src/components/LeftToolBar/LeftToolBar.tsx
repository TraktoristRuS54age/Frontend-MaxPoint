/* eslint-disable sort-imports */
import { useState } from "react";
import text from "../../resources/img/text.png";
import figures from "../../resources/img/figures.png";
import photo from "../../resources/img/photo.png";
import style from "./LeftToolbar.module.css";
import UploadButton from "../UploadButton/UploadButton";
import classNames from "classnames";

function Left_ToolBar() {
  const [isOpen, setOpen] = useState(false);
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
            onClick={() => setOpen(!isOpen)}>
            <img className={style.menu_block__img} src={figures}></img>
            <p className={style.menu_block_text}>Figure</p>
          </button>
          <nav 
            className={
              isOpen ? style.figure + " " + style.active : style.figure}>
            <ul className={style.figure__menu}>
              <li className={style.figure__item}>
                <button className={style.figure__button}>
                  <p>Треугольник</p>
                </button>
              </li>
              <li className={style.figure__item}>
                <button className={style.figure__button}>
                  <p>Прямоугольник</p>
                </button>
              </li>
              <li className={style.figure__item}>
                <button className={style.figure__button}>
                  <p>Круг</p>
                </button>
              </li>
            </ul>
          </nav>
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
