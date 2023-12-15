/* eslint-disable sort-imports */
import style from "./MainWS.module.css";
import Slide from "../Slide/Slide.tsx";
import { useSelector } from "react-redux";
import { currentSlide } from "../../redux/slide/selectors";

function MainWS() {
  const data = useSelector(currentSlide);
  if (data != null) {
    return (
      <div className={style.working_block}>
        <div className={style.working_block__wrapper}>
          <Slide slide={data} className={style.working_block__slide} />
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
