/* eslint-disable sort-imports */
import "./SlideBar.css";
import Slide from "../Slide/Slide";
import Plus from "../../resources/img/plus.png"
import { Slide as PropSlide } from "../../types/types";

type SlideBarProps = {
  slides: PropSlide[];
};

function SlideBar({ slides }: SlideBarProps) {
  return (
    <div className="slide_block">
      {slides.length > 0 ? (
        slides.map((slide, index) => (
          <div key={index} className="slide_block__wrapper">
            <Slide slide={slide} className="slide_block_slide"/>
          </div>
        ))
      ) : (
        <div className="slide_block__wrapper">
          <div className="slide slide_block_new-slide">
            <img src={Plus} alt="plus" className="slide_block__img" />
          </div>
        </div>
      )}
      {slides.length > 0 ? (
        <div className="slide_block__wrapper">
          <div className="slide slide_block_new-slide">
            <img src={Plus} alt="plus" className="slide_block__img" />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default SlideBar;
