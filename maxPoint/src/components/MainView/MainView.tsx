import Slide from "../Slide/Slide.tsx";
import { slide as newSlide } from "../../types/example/maximum";
import style from "./MainView.module.css";
import { useAppActions } from "../../redux/Actions/Actions.ts";
import { useAppSelector } from "../../redux/Reducer.ts";

function MainView() {
  const slides = useAppSelector((state) => state.slides);
  const current = useAppSelector((state) => state.currentSlideID);
  const currentSlide = slides.find((slide) => slide.id === current);
  const { createNewSlide } = useAppActions();

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
        <div
          className={style.working_block__wrapper}
          onClick={() => createNewSlide(newSlide())}
        ></div>
      </div>
    );
  }
}

export default MainView;
