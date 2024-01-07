import Block from "../Block/Block";
import { CSSProperties } from "react"; //типизация стилей
import { Slide as TSlide } from "../../types/types";
import classNames from "classnames";
import style from "./Slide.module.css";

type SlideProps = {
  slide: TSlide;
  className: string;
};

function Slide({ slide, className }: SlideProps) {
  const styles: CSSProperties = {
    background: slide.background,
  };

  return (
    <div
      key={slide.id}
      className={classNames(style.slide, className)}
      style={styles}
    >
      {slide.objects.map((object) => (
        <Block key={object.id} slide={slide} data={object} />
      ))}
    </div>
  );
}
export default Slide;
