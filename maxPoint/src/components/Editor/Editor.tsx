/* eslint-disable sort-imports */
import "./Editor.css";
import Left_ToolBar from "../Left_ToolBar/Left_ToolBar";
import SlideBar from "../SlideBar/SlideBar";
import { Presentation } from "../../types/types";
import MainWS from "../MainWS/MainWS";

type EditorProps = {
  presentation: Presentation;
};

function Editor({ presentation }: EditorProps) {
  return (
    <div className="grid_block">
      <Left_ToolBar />

      <section className="working_block_grid">
        <MainWS slide={presentation.currentSlide} />
        <SlideBar slides={presentation.slides} />
      </section>
    </div>
  );
}

export default Editor;
