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
                  if (
                    selectedObject === undefined ||
                    selectedObject.type !== "text"
                  ) {
                    return;
                  }
                  selectedObject.data.fontSize = +event.target.value;
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
                  if (
                    selectedObject === undefined ||
                    selectedObject.type !== "text"
                  ) {
                    return;
                  }
                  selectedObject.data.fontFamily = event.target.value;
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
                if (
                  selectedObject === undefined ||
                  selectedObject.type !== "text"
                ) {
                  return;
                }
                selectedObject.data.bold = !selectedObject.data.bold;
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
                if (
                  selectedObject === undefined ||
                  selectedObject.type !== "text"
                ) {
                  return;
                }
                selectedObject.data.fontStyle =
                  selectedObject.data.fontStyle === "italic"
                    ? "normal"
                    : "italic";
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
                if (
                  selectedObject === undefined ||
                  selectedObject.type !== "text"
                ) {
                  return;
                }
                selectedObject.data.textDecoration =
                  selectedObject.data.textDecoration === "none"
                    ? "underline"
                    : "none";
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
          </>
        ) : null}

        {selectedObject ? (
          <>
            <button
              type="button"
              className={style.header_button}
              onClick={() => {
                if (selectedObject === undefined) {
                  return;
                }
                const newObject = currentSlide!.objects.filter(
                  (object) => object.id !== selectedObject.id,
                );
                currentSlide!.objects = newObject;
                currentSlide!.selectObjects = null;
                setPresentation({
                  ...presentation,
                  slides: slides,
                });
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
                if (selectedObject === undefined) {
                  if (currentSlide !== undefined) {
                    currentSlide.background = `${ref.current?.value}`;
                    setPresentation({
                      ...presentation,
                      slides: slides,
                    });
                  }
                  return;
                }
                if (selectedObject.type === "primitive")
                  selectedObject.data.fill = `${ref.current?.value}`;
                if (selectedObject.type === "text")
                  selectedObject.data.color = `${ref.current?.value}`;
                setPresentation({
                  ...presentation,
                  slides: slides,
                });
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
