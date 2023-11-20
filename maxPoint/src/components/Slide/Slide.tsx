/* eslint-disable sort-imports */
import { CSSProperties } from "react"; //типизация стилей
import { Slide as TSlide } from "../../types/types";
import "./Slide.css";
import Block from "../Block/Block";
import classNames from "classnames";

type SlideProps = {
  slide: TSlide;
  className: string;
};

function Slide({ slide, className }: SlideProps) {
  const style: CSSProperties = {
    background: slide.background,
  };

  return (
    <div
      key={slide.id}
      className={classNames("slide", className)}
      style={style}
    >
      {slide.objects.map((object) => (
        <Block key={object.id} {...object} />
      ))}
    </div>
  );
}
export default Slide;
