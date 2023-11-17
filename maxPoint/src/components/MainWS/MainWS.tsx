import { Slide as PSlide } from "../../types/types.ts";
import style from "./MainWS.module.css";
// eslint-disable-next-line sort-imports
import Slide from "../Slide/Slide.tsx";

type WorkspaceProps = {
  slide: PSlide | null;
};

function MainWS({ slide }: WorkspaceProps) {
  if (slide != null) {
    return (
      <div className={style.working_block}>
        <div className={style.working_block__slide}>
          <Slide slide={slide} slideName={slide.name} />
        </div>
      </div>
    );
  }
}

export default MainWS;
