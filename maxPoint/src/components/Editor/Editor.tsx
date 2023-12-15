/* eslint-disable sort-imports */
import style from "./Editor.module.css";
import Left_ToolBar from "../LeftToolBar/LeftToolBar";
import SlideBar from "../SlideBar/SlideBar";
import MainWS from "../MainWS/MainWS";
import FigureMenu from "../FigureMenu/FigureMenu";
import { useSelector } from "react-redux";
import { isOpen } from "../../redux/someStuff/selectors";
import classNames from "classnames";

function Editor() {
  const data = useSelector(isOpen);
  return (
    <div
      className={
        data
          ? classNames(style.grid_block, style.extended_columns)
          : style.grid_block
      }
    >
      <Left_ToolBar />
      {data ? <FigureMenu /> : null}

      <section className={style.working_block_grid}>
        <MainWS />
        <SlideBar />
      </section>
    </div>
  );
}

export default Editor;
