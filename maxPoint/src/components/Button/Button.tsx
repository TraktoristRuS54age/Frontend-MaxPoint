/* eslint-disable sort-keys */
/* eslint-disable sort-imports */
import style from "./Button.module.css";
import minus from "../../resources/headerButton/minus_48.png";
import plus from "../../resources/headerButton/plus_48.png";
import bold from "../../resources/headerButton/bold_48.png";
import italic from "../../resources/headerButton/italic_48.png";
import delet from "../../resources/headerButton/delete_48.png";
import zalivka from "../../resources/headerButton/zalivka_48.png";
import { useContext, useEffect, useState } from "react";
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
  const [TBold, setTBold] = useState(false);

  const changeBold = () => {
    if (selectedObject && selectedObject.type === "text") {
      setTBold((bold): boolean => !bold);
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

  useEffect(() => {
    if (currentSlide && selectedObject && selectedObject.type === "text") {
      const { value, fontSize, fontFamily, color } = selectedObject.data;

      // Create a new object with updated properties
      const newCurrentObject: TText = {
        ...selectedObject,
        data: {
          value: value,
          fontSize: fontSize,
          fontFamily: fontFamily,
          color: color,
          bold: TBold,
        },
      };

      // Update the newPresentation with the modified object
      const updatedSlides = newPresentation.slides.map((slide) => {
        if (slide.selectObjects === selectedObject.id) {
          const updatedObjects = slide.objects.map((obj) =>
            obj.id === selectedObject.id ? newCurrentObject : obj
          );
          return { ...slide, objects: updatedObjects, selectObjects: null };
        }
        return slide;
      });

      newPresentation.slides = updatedSlides;
      setPresentation(newPresentation);
    }
  }, [TBold]);

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

      <button
        type="button"
        className={style.header_button}
        onClick={changeBold}
      >
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
