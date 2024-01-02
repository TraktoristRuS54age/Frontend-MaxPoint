/* eslint-disable sort-keys */
/* eslint-disable sort-imports */
import style from "./Button.module.css";
import minus from "../../resources/headerButton/minus_48.png";
import plus from "../../resources/headerButton/plus_48.png";
import bold from "../../resources/headerButton/bold_48.png";
import italic from "../../resources/headerButton/italic_48.png";
import delet from "../../resources/headerButton/delete_48.png";
import zalivka from "../../resources/headerButton/zalivka_48.png";
import underline from "../../resources/headerButton/underline_48.png";
import { useContext, useState } from "react";
import { PresentationContext } from "../../context/context";
import { Text as TText } from "../../types/types";
// import { useState } from "react";

function Button() {
  const { presentation, setPresentation } = useContext(PresentationContext);
  const newPresentation = { ...presentation };
  const currentSlide = newPresentation.slides.find(
    (slide) => slide.id === newPresentation.currentSlideID,
  );
  const selectedObject = currentSlide?.objects.find(
    (object) => object.id === currentSlide.selectObjects,
  );

  const [counter, setCounter] = useState(20);

  const PlusCount = () => {
    if (currentSlide && selectedObject && selectedObject.type === "text") {
      const { value, fontFamily, fontStyle, textDecoration, color, bold } =
        selectedObject.data;
      const newCurrentObject: TText = {
        ...selectedObject,
        data: {
          value: value,
          fontSize: counter + 10,
          fontFamily: fontFamily,
          fontStyle: fontStyle,
          textDecoration: textDecoration,
          color: color,
          bold: bold,
        },
      };
      changeTextSettings(newCurrentObject);
      setCounter((counter): number => counter + 10);
    }
  };

  const MinusCount = () => {
    if (currentSlide && selectedObject && selectedObject.type === "text") {
      const { value, fontFamily, fontStyle, textDecoration, color, bold } =
        selectedObject.data;
      const newCurrentObject: TText = {
        ...selectedObject,
        data: {
          value: value,
          fontSize: counter - 10,
          fontFamily: fontFamily,
          fontStyle: fontStyle,
          textDecoration: textDecoration,
          color: color,
          bold: bold,
        },
      };
      changeTextSettings(newCurrentObject);
      setCounter((counter): number => counter - 10);
    }
  };

  const changeUnderline = () => {
    if (currentSlide && selectedObject && selectedObject.type === "text") {
      const { value, fontFamily, fontSize, fontStyle, textDecoration, color, bold } =
        selectedObject.data;
      const newCurrentObject: TText = {
        ...selectedObject,
        data: {
          value: value,
          fontSize: fontSize,
          fontFamily: fontFamily,
          fontStyle: fontStyle,
          textDecoration: textDecoration === "none" ? "underline" : "none",
          color: color,
          bold: bold,
        },
      };
      changeTextSettings(newCurrentObject);
      setCounter((counter): number => counter - 10);
    }
  };

  const changeFontStyle = () => {
    if (currentSlide && selectedObject && selectedObject.type === "text") {
      const {
        value,
        fontSize,
        fontStyle,
        fontFamily,
        textDecoration,
        color,
        bold,
      } = selectedObject.data;
      const newCurrentObject: TText = {
        ...selectedObject,
        data: {
          value: value,
          fontSize: fontSize,
          fontFamily: fontFamily,
          fontStyle: fontStyle === "italic" ? "normal" : "italic",
          textDecoration: textDecoration,
          color: color,
          bold: bold,
        },
      };
      changeTextSettings(newCurrentObject);
    }
  };

  const changeBold = () => {
    if (currentSlide && selectedObject && selectedObject.type === "text") {
      const {
        value,
        fontSize,
        fontStyle,
        fontFamily,
        textDecoration,
        color,
        bold,
      } = selectedObject.data;
      const newCurrentObject: TText = {
        ...selectedObject,
        data: {
          value: value,
          fontSize: fontSize,
          fontFamily: fontFamily,
          fontStyle: fontStyle,
          textDecoration: textDecoration,
          color: color,
          bold: !bold,
        },
      };
      changeTextSettings(newCurrentObject);
    }
  };

  const ObjectDelete = () => {
    if (selectedObject) {
      const updatedSlides = newPresentation.slides.map((slide) => {
        if (slide.selectObjects === selectedObject.id) {
          const updatedObjects = slide.objects.filter(
            (obj) => obj.id !== selectedObject.id,
          );
          return { ...slide, objects: updatedObjects, selectObjects: null };
        }
        return slide;
      });
      newPresentation.slides = updatedSlides;
      setPresentation(newPresentation);
    }
  };

  const changeTextSettings = (newCurrentObject: TText) => {
    if (currentSlide && selectedObject && selectedObject.type === "text") {
      const updatedSlides = newPresentation.slides.map((slide) => {
        if (slide.selectObjects === selectedObject.id) {
          const updatedObjects = slide.objects.map((obj) =>
            obj.id === selectedObject.id ? newCurrentObject : obj,
          );
          return { ...slide, objects: updatedObjects };
        }
        return slide;
      });

      newPresentation.slides = updatedSlides;
      setPresentation(newPresentation);
    }
  };

  return (
    <div className={style.header_block_button}>
      <button
        type="button"
        className={style.header_button}
        onClick={MinusCount}
      >
        <img className={style.button_img} src={minus} alt="минус"></img>
      </button>

      <input
        className={style.header_input_number}
        type="text"
        placeholder={`${counter}`}
        name="number"
      />

      <button type="button" className={style.header_button} onClick={PlusCount}>
        <img className={style.button_img} src={plus} alt="плюс"></img>
      </button>

      <button
        type="button"
        className={style.header_button}
        onClick={changeBold}
      >
        <img className={style.button_img} src={bold} alt="жирный"></img>
      </button>

      <button
        type="button"
        className={style.header_button}
        onClick={changeFontStyle}
      >
        <img className={style.button_img} src={italic} alt="курсив"></img>
      </button>

      <button
        type="button"
        className={style.header_button}
        onClick={changeUnderline}
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
        onClick={ObjectDelete}
      >
        <img className={style.button_img} src={delet} alt="удалить"></img>
      </button>

      <button type="button" className={style.header_button}>
        <img className={style.button_img} src={zalivka} alt="заливка"></img>
      </button>
    </div>
  );
}

export default Button;
