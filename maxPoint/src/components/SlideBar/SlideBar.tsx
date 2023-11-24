/* eslint-disable sort-imports */
import style from "./SlideBar.module.css";
import Slide from "../Slide/Slide";
import Plus from "../../resources/img/plus.png"
import { Slide as PropSlide } from "../../types/types";
import classNames from "classnames";

type SlideBarProps = {
  slides: PropSlide[];
};

function SlideBar({ slides }: SlideBarProps) {
  return (
    <div className={style.slide_block}>
      {slides.length > 0 ? (
        slides.map((slide, index) => (
          <div key={index} className={style.slide_block__wrapper}>
            <Slide slide={slide} className={style.slide_block_slide}/>
          </div>
        ))
      ) : (
        <div className={style.slide_block__wrapper}>
          <div className={classNames(style.slide, style.slide_block_new_slide)}>
            <img src={Plus} alt="plus" className={style.slide_block__img} />
          </div>
        </div>
      )}
      {slides.length > 0 ? (
        <div className={style.slide_block__wrapper}>
          <div className={classNames(style.slide, style.slide_block_new_slide)}>
            <img src={Plus} alt="plus" className={style.slide_block__img} />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SlideBar;
