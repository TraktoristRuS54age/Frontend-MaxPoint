/* eslint-disable sort-imports */
import style from "./Editor.module.css";
import Left_ToolBar from "../LeftToolBar/LeftToolBar";
import SlideBar from "../SlideBar/SlideBar";
import MainWS from "../MainWS/MainWS";

function Editor() {
  return (
    <div className={style.grid_block}>
      <Left_ToolBar />

      <section className={style.working_block_grid}>
        <MainWS />
        <SlideBar />
      </section>
    </div>
  );
}

export default Editor;
