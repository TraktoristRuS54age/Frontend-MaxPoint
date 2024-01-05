/* eslint-disable sort-imports */
import style from "./Button.module.css";
import bold from "../../resources/headerButton/bold_48.png";
import italic from "../../resources/headerButton/italic_48.png";
import delet from "../../resources/headerButton/delete_48.png";
import zalivka from "../../resources/headerButton/zalivka_48.png";
import underline from "../../resources/headerButton/underline_48.png";
import { useContext, useRef, useState } from "react";
import { PresentationContext } from "../../context/context";

function Button() {
  const { presentation, setPresentation } = useContext(PresentationContext);
  const slides = presentation.slides;
  const currentSlide = slides.find(
    (slide) => slide.id === presentation.currentSlideID,
  );
  const selectedObject = () => {
    return currentSlide?.objects.find(
      (object) => object.id === currentSlide.selectObjects,
    );
  };

  const ref = useRef<HTMLInputElement>(null);

  const [counter, setCounter] = useState(20);

  return (
    <>
      <div className={style.header_block_button}>
        <div>
          Size:
          <input
            type="number"
            value={counter}
            style={{ width: `2.5rem` }}
            onChange={(event) => {
              const obj = selectedObject();
              if (obj === undefined || obj.type !== "text") {
                return;
              }
              obj.data.fontSize = +event.target.value;
              setPresentation({
                ...presentation,
                slides: slides,
              });
              setCounter(+event.target.value);
            }}
          />
        </div>

        <div>
          Font:
          <select
            defaultValue={"Arial"}
            onChange={(event) => {
              const obj = selectedObject();
              if (obj === undefined || obj.type !== "text") {
                return;
              }
              obj.data.fontFamily = event.target.value;
              setPresentation({
                ...presentation,
                slides: slides,
              });
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
            const obj = selectedObject();
            if (obj === undefined || obj.type !== "text") {
              return;
            }
            obj.data.bold = !obj.data.bold;
            setPresentation({
              ...presentation,
              slides: slides,
            });
          }}
        >
          <img className={style.button_img} src={bold} alt="жирный"></img>
        </button>

        <button
          type="button"
          className={style.header_button}
          onClick={() => {
            const obj = selectedObject();
            if (obj === undefined || obj.type !== "text") {
              return;
            }
            obj.data.fontStyle =
              obj.data.fontStyle === "italic" ? "normal" : "italic";
            setPresentation({
              ...presentation,
              slides: slides,
            });
          }}
        >
          <img className={style.button_img} src={italic} alt="курсив"></img>
        </button>

        <button
          type="button"
          className={style.header_button}
          onClick={() => {
            const obj = selectedObject();
            if (obj === undefined || obj.type !== "text") {
              return;
            }
            obj.data.textDecoration =
              obj.data.textDecoration === "none" ? "underline" : "none";
            setPresentation({
              ...presentation,
              slides: slides,
            });
          }}
        >
          <img
            className={style.button_img}
            src={underline}
            alt="подчеркивание"
          ></img>
        </button>

        <button
          type="button"
          className={style.header_button}
          onClick={() => {
            const obj = selectedObject();
            if (obj === undefined) {
              return;
            }
            currentSlide?.objects.splice(+obj.id, 1);
            currentSlide!.selectObjects = null;
            setPresentation({
              ...presentation,
              slides: slides,
            });
          }}
        >
          <img className={style.button_img} src={delet} alt="удалить"></img>
        </button>

        <button
          type="button"
          className={style.header_button}
          onClick={() => {
            const obj = selectedObject();
            if (obj === undefined) {
              if (currentSlide !== undefined) {
                currentSlide.background = `${ref.current?.value}`;
                setPresentation({
                  ...presentation,
                  slides: slides,
                });
              }
              return;
            }
            if (obj.type === "primitive")
              obj.data.fill = `${ref.current?.value}`;
            if (obj.type === "text") obj.data.color = `${ref.current?.value}`;
            setPresentation({
              ...presentation,
              slides: slides,
            });
          }}
        >
          <img className={style.button_img} src={zalivka} alt="заливка"></img>
        </button>

        <input type="color" ref={ref} className={style.colorPicker} />
      </div>
    </>
  );
}

export default Button;
