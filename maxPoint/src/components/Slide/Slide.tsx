/* eslint-disable sort-imports */
import { CSSProperties } from "react"; //типизация стилей
import { Slide as TSlide } from "../../types/types";
import "./Slide.css";
import { Block } from "../Block/Block";

type SlideProps = {
  slide: TSlide;
  slideName: number;
};

function Slide({ slide, slideName }: SlideProps) {
  const style: CSSProperties = {
    background: slide.background,
  };

  return (
    <div key={slide.id} className="slide" style={style}>
      <p> {slideName} </p>;
      {slide.objects.map((object) => (
        <Block key={object.id} {...object} />
      ))}
    </div>
  );
}
export default Slide;
