import "./Slide.css";
import {Slide as PropsSlide} from "../types/types";
import { CSSProp } from "react";
import {Block} from "../components/Block/Block.ts";
import classNames from "classnames";

type SlideProps = {
    slide: PropsSlide;
    isSelectedSlide: boolean;
    className?: string;
  };

function Slide({slide, isSelectedSlide, className }: SlideProps){
    const style: CSSProp = {
        background: slide.background,
      };
    let SlideSelected = "";
    if  (isSelectedSlide) {
        SlideSelected = "slide__selected"   
    }
    return
    (<div className={classNames("slide", className, SlideSelected)} style={style}>
        {slide.objects.map((object) => (
        <Block key={object.id} {...object} />
      ))}
    </div>)
}

export default Slide;