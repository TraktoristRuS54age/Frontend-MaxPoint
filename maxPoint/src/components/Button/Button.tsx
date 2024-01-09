import { useRef, useState } from "react";
import bold from "../../resources/headerButton/bold_48.png";
import delet from "../../resources/headerButton/delete_48.png";
import italic from "../../resources/headerButton/italic_48.png";
import style from "./Button.module.css";
import underline from "../../resources/headerButton/underline_48.png";
import { useAppActions } from "../../redux/Actions/Actions";
import { useAppSelector } from "../../redux/Reducer";
import zalivka from "../../resources/headerButton/zalivka_48.png";
import zindex from "../../resources/img/zindex.png";

function Button() {
  const {
    SetTextSize,
    setZIndex,
    ObjectDelete,
    SetTextFontFamily,
    SetTextBold,
    SetTextFontStyle,
    SetTextDecoration,
    SetColor,
  } = useAppActions();
  const slides = useAppSelector((state) => state.slides);
  const currentSlideID = useAppSelector((state) => state.currentSlideID);
  const currentSlide = slides.find((slide) => slide.id === currentSlideID);
  const selectedObject = currentSlide?.objects.find(
    (object) => object.id === currentSlide.selectObjects,
  );

  const ref = useRef<HTMLInputElement>(null);

  const [counter, setCounter] = useState(20);
  const [zIndexCounter, setZIndexCounter] = useState(1);

  return (
    <>
      <div className={style.header_block_button}>
        {selectedObject?.type === "text" ||
        selectedObject?.type === "image" ||
        selectedObject?.type === "primitive" ? (
          <>
            <img className={style.button_img} src={zindex} alt="zindex"></img>
            <div style={{ margin: `0 10px` }}>
              <input
                type="number"
                value={zIndexCounter}
                style={{ width: `2.5rem` }}
                onChange={(event) => {
                  if (+event.target.value > -1 && +event.target.value < 100) {
                    setZIndex(+event.target.value);
                    setZIndexCounter(+event.target.value);
                  }
                }}
              />
            </div>
          </>
        ) : null}
        {selectedObject?.type === "text" ? (
          <>
            <p>Size:</p>
            <div style={{ margin: `0 10px`, overflow: "hiiden" }}>
              <input
                type="number"
                value={counter}
                style={{ width: `2.5rem` }}
                onChange={(event) => {
                  SetTextSize(+event.target.value);
                  setCounter(+event.target.value);
                }}
              />
            </div>
            <p>Font:</p>
            <div style={{ margin: `0 10px` }}>
              <select
                defaultValue={"Arial"}
                onChange={(event) => {
                  SetTextFontFamily(event.target.value);
                }}
              >
                <option value="Arial">Arial</option>
                <option value="Calibri">Calibri</option>
                <option value="Candara">Cnadara</option>
                <option value="Comic Sans MS">Comic Sans MS</option>
                <option value="Georgia">Georgia</option>
                <option value="Palatino">Palatino</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Trebuchet MS">Trebuchet MS</option>
                <option value="Webdings">Webdings</option>
                <option value="Wingdings">Wingdings</option>
              </select>
            </div>
            <button
              type="button"
              className={style.header_button}
              onClick={() => {
                SetTextBold();
              }}
            >
              <img className={style.button_img} src={bold} alt="жирный"></img>
            </button>
            <button
              type="button"
              className={style.header_button}
              onClick={() => {
                SetTextFontStyle();
              }}
            >
              <img className={style.button_img} src={italic} alt="курсив"></img>
            </button>
            <button
              type="button"
              className={style.header_button}
              onClick={() => {
                SetTextDecoration();
              }}
            >
              <img
                className={style.button_img}
                src={underline}
                alt="подчеркивание"
              ></img>
            </button>
          </>
        ) : null}

        {selectedObject ? (
          <>
            <button
              type="button"
              className={style.header_button}
              onClick={() => {
                ObjectDelete();
              }}
            >
              <img className={style.button_img} src={delet} alt="удалить"></img>
            </button>
          </>
        ) : null}

        {currentSlide ? (
          <>
            <button
              type="button"
              className={style.header_button}
              onClick={() => {
                SetColor(ref.current!.value);
              }}
            >
              <img
                className={style.button_img}
                src={zalivka}
                alt="заливка"
              ></img>
            </button>

            <input type="color" ref={ref} className={style.colorPicker} />
          </>
        ) : null}
      </div>
    </>
  );
}

export default Button;
