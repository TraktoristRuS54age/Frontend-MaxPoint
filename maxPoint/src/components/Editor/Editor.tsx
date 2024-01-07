import FigureMenu from "../FigureMenu/FigureMenu";
import Left_ToolBar from "../LeftToolBar/LeftToolBar";
import MainView from "../MainView/MainView";
import SlideBar from "../SlideBar/SlideBar";
import classNames from "classnames";
import style from "./Editor.module.css";
import { useState } from "react";

function Editor() {
  const [isOpen, setIsOpen] = useState(false);
  const changeIsOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div
      className={
        isOpen
          ? classNames(style.grid_block, style.extended_columns)
          : style.grid_block
      }
    >
      <Left_ToolBar props={changeIsOpen} />
      {isOpen ? <FigureMenu /> : null}

      <section className={style.working_block_grid}>
        <MainView />
        <SlideBar />
      </section>
    </div>
  );
}

export default Editor;
