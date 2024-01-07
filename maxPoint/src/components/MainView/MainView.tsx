/* eslint-disable sort-imports */
import style from "./MainView.module.css";
import Slide from "../Slide/Slide.tsx";
import { Slide as TSlide } from "../../types/types.ts";

type TMainView = {
  slides: TSlide[];
  current: string | null;
};

function MainView(props: TMainView) {
  const { slides, current } = props;
  const currentSlide = slides.find((slide) => slide.id === current);
  console.log("Перерисовка");

  if (currentSlide != null) {
    return (
      <div className={style.working_block}>
        <div className={style.working_block__wrapper}>
          <Slide slide={currentSlide} className={style.working_block__slide} />
        </div>
      </div>
    );
  } else {
    return (
      <div className={style.working_block}>
        <div className={style.working_block__wrapper}></div>
      </div>
    );
  }
}

export default MainView;
