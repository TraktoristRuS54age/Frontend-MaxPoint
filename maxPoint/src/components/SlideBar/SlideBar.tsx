/* eslint-disable sort-imports */
import "./SlideBar.css";
import Slide from "../Slide/Slide";
import { Slide as PropSlide } from "../../types/types";

type SlideBarProps = {
  slides: PropSlide[];
};

function SlideBar({ slides }: SlideBarProps) {
  return (
    <div className="slide_block">
      {slides.length > 0
        ? slides.map((slide, index) => (
            <div key={index}>
              <Slide slide={slide} slideName={index} />
            </div>
          ))
        : 
        <div>
            <h1>Нет слайдов</h1>
        </div>
            }
    </div>
  );
}

export default SlideBar;
