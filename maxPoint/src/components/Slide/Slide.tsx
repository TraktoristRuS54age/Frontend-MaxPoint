/* eslint-disable sort-imports */
import { CSSProperties } from "react"; //типизация стилей
import { Slide as PropSlide } from "../../types/types";
import "./Slide.css";

type SlideProps = {
  slide: PropSlide;
  slideName: number;
};

function Slide({ slide, slideName }: SlideProps) {
  const style: CSSProperties = {
    background: slide.background,
  };

  return (
    <div key={slide.id} className="slide" style={style}>
      <h2>{slideName}</h2>
    </div>
  );
}

export default Slide;
