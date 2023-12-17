/* eslint-disable sort-imports */
import style from "./Editor.module.css";
import Left_ToolBar from "../LeftToolBar/LeftToolBar";
import SlideBar from "../SlideBar/SlideBar";
import MainWS from "../MainWS/MainWS";
import FigureMenu from "../FigureMenu/FigureMenu";
import classNames from "classnames";
import { useState } from "react";

function Editor() {
  const [isOpen, setIsOpen] = useState(false);
  const changeIsOpen = () => {
    setIsOpen((isOpen) => !isOpen)
  }
  return (
    <div
      className={
        isOpen
          ? classNames(style.grid_block, style.extended_columns)
          : style.grid_block
      }
    >
      <Left_ToolBar props={changeIsOpen}/>
      {isOpen ? <FigureMenu /> : null}

      <section className={style.working_block_grid}>
        <MainWS />
        <SlideBar />
      </section>
    </div>
  );
}

export default Editor;
