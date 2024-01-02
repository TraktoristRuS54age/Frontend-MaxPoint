/* eslint-disable sort-imports */
import style from "./MainWS.module.css";
import Slide from "../Slide/Slide.tsx";
import { useContext } from "react";
import { PresentationContext } from "../../context/context.tsx";

function MainWS() {
  const { presentation } = useContext(PresentationContext);
  const currentSlide = presentation.slides.find(
    (slide) => slide.id === presentation.currentSlideID,
  );

  if (currentSlide != null) {
    return (
      <div className={style.working_block} >
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

export default MainWS;
