/* eslint-disable sort-imports */
import { Slide as PSlide } from "../../types/types.ts";
import "./MainWS.css";
import Slide from "../Slide/Slide.tsx";

type WorkspaceProps = {
  slide: PSlide | null;
};

function MainWS({ slide }: WorkspaceProps) {
  if (slide != null) {
    return (
      <div className="working_block">
        <Slide slide={slide} className="working_block__slide"/>
      </div>
    );
  }
}

export default MainWS;
