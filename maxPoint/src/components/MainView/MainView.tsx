import Slide from "../Slide/Slide.tsx";
import style from "./MainView.module.css";
import { useAppSelector } from "../../redux/Reducer.ts";

function MainView() {
  const slides = useAppSelector((state) => state.slides);
  const current = useAppSelector((state) => state.currentSlideID);
  const currentSlide = slides.find((slide) => slide.id === current);

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
