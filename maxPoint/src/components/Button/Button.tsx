import { useRef, useState } from "react";
import bold from "../../resources/headerButton/bold_48.png";
import delet from "../../resources/headerButton/delete_48.png";
import italic from "../../resources/headerButton/italic_48.png";
import style from "./Button.module.css";
import underline from "../../resources/headerButton/underline_48.png";
import { useAppActions } from "../../redux/Actions/Actions";
import { useAppSelector } from "../../redux/Reducer";
import zalivka from "../../resources/headerButton/zalivka_48.png";

function Button() {
  const {
    SetTextSize,
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

  return (
    <>
      <div className={style.header_block_button}>
        {selectedObject?.type === "text" ? (
          <>
            <div>
              Size:
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
            <div>
              Font:
              <select
                defaultValue={"Arial"}
                onChange={(event) => {
                  SetTextFontFamily(event.target.value);
                }}
              >
                <option value="Arial">Arial</option>
                <option value="Verdana">Verdana</option>
                <option value="Tahoma">Tahoma</option>
                <option value="Trebuchet MS">Trebuchet MS</option>
                <option value="Times New Roman">Times New Roman</option>
                <option value="Georgia">Georgia</option>
                <option value="Garamond">Garamond</option>
                <option value="Courier New">Courier New</option>
                <option value="Brush Script MT">Brush Script MT</option>
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
