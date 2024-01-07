/* eslint-disable sort-imports */
import style from "./Editor.module.css";
import Left_ToolBar from "../LeftToolBar/LeftToolBar";
import SlideBar from "../SlideBar/SlideBar";
import MainView from "../MainView/MainView";
import FigureMenu from "../FigureMenu/FigureMenu";
import classNames from "classnames";
import { useState } from "react";
import { useAppSelector } from "../../redux/Reducer";

function Editor() {
  const slides = useAppSelector((state) => state.slides);
  const currentSlideID = useAppSelector((state) => state.currentSlideID);
  console.log("Перерисовка");
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
        <MainView slides={slides} current={currentSlideID} />
        <SlideBar slides={slides} current={currentSlideID} />
      </section>
    </div>
  );
}

export default Editor;
