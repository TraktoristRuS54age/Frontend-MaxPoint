/* eslint-disable sort-imports */
import style from "./Button.module.css";
import minus from "../../resources/headerButton/minus_48.png";
import plus from "../../resources/headerButton/plus_48.png";
import bold from "../../resources/headerButton/bold_48.png";
import italic from "../../resources/headerButton/italic_48.png";
import delet from "../../resources/headerButton/delete_48.png";
import zalivka from "../../resources/headerButton/zalivka_48.png"
import { useContext } from "react";
import { PresentationContext } from "../../context/context";
// import { useState } from "react";

function Button() {
  const { presentation, setPresentation } = useContext(PresentationContext);
  const newPresentation = { ...presentation };
  const selectedObject = newPresentation.slides.find(
    (slide) => slide.id === newPresentation.currentSlideID,
  )?.selectObjects;

  const ObjectDelete = () => {
    if (selectedObject) {
      const updatedSlides = newPresentation.slides.map((slide) => {
        if (slide.selectObjects === selectedObject) {
          const updatedObjects = slide.objects.filter(
            (obj) => obj.id !== selectedObject,
          );
          return { ...slide, objects: updatedObjects, selectObjects: null };
        }
        return slide;
      });
      newPresentation.slides = updatedSlides;
      setPresentation(newPresentation);
    }
  };

  return (
    <div className={style.header_block_button}>
      <button type="button" className={style.header_button}>
        <img className={style.button_img} src={minus} alt="минус"></img>
      </button>

      <input
        className={style.header_input_number}
        type="number"
        name="number"
      />

      <button type="button" className={style.header_button}>
        <img className={style.button_img} src={plus} alt="плюс"></img>
      </button>

      <button type="button" className={style.header_button}>
        <img className={style.button_img} src={bold} alt="жирный"></img>
      </button>

      <button type="button" className={style.header_button}>
        <img className={style.button_img} src={italic} alt="курсив"></img>
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
