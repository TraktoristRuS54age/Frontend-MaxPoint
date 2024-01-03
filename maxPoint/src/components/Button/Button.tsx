/* eslint-disable sort-keys */
/* eslint-disable sort-imports */
import style from "./Button.module.css";
import bold from "../../resources/headerButton/bold_48.png";
import italic from "../../resources/headerButton/italic_48.png";
import delet from "../../resources/headerButton/delete_48.png";
import zalivka from "../../resources/headerButton/zalivka_48.png";
import underline from "../../resources/headerButton/underline_48.png";
import { useContext, useState } from "react";
import { PresentationContext } from "../../context/context";
import { TextData } from "../../types/types";

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
<<<<<<< Updated upstream
=======
  
>>>>>>> Stashed changes

  const onFontSizeChange = (event: any) => {
    if (currentSlide && selectedObject && selectedObject.type === "text") {
      const { ...textData } = selectedObject.data;
      const newCurrentObject: TextData = {
        data: {
          ...textData,
          fontSize: +event.target.value,
        },
      };
      changeTextSettings(newCurrentObject);
      setCounter(event.target.value);
    }
  };

  // const [color, setColor] = useState("#FFFFFF");

  // const handleColorChange = (event:any) => {
  //   if (currentSlide) {
  //     const {background, ...Slide} = currentSlide.background;
  //     const newColorSlide: Slide = {
  //       ...Color,
  //       background: +event.target.value,
  //     };
  //     setColor(event.target.value);
  //   } 
  // };

  const changeUnderline = () => {
    if (currentSlide && selectedObject && selectedObject.type === "text") {
      const { textDecoration, ...textData } = selectedObject.data;
      const newCurrentObject: TextData = {
        data: {
          ...textData,
          textDecoration: textDecoration === "none" ? "underline" : "none",
        },
      };
      changeTextSettings(newCurrentObject);
    }
  };

  const changeFontStyle = () => {
    if (currentSlide && selectedObject && selectedObject.type === "text") {
      const { fontStyle, ...textData } = selectedObject.data;
      const newCurrentObject: TextData = {
        data: {
          ...textData,
          fontStyle: fontStyle === "italic" ? "normal" : "italic",
        },
      };
      changeTextSettings(newCurrentObject);
    }
  };

  const changeBold = () => {
    if (currentSlide && selectedObject && selectedObject.type === "text") {
      const { bold, ...textData } = selectedObject.data;
      const newCurrentObject: TextData = {
        data: {
          ...textData,
          bold: !bold,
        },
      };
      changeTextSettings(newCurrentObject);
    }
  };

  const changefontFamily = (event: any) => {
    if (currentSlide && selectedObject && selectedObject.type === "text") {
      const { ...textData } = selectedObject.data;
      const newCurrentObject: TextData = {
        data: {
          ...textData,
          fontFamily: event.target.value,
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



  const changeTextSettings = (newCurrentObject: TextData) => {
    if (currentSlide && selectedObject && selectedObject.type === "text") {
      const updatedSlides = newPresentation.slides.map((slide) => {
        if (slide.selectObjects === selectedObject.id) {
          const updatedObjects = slide.objects.map((obj) =>
            obj.id === selectedObject.id && obj.type === "text"
              ? { ...obj, data: newCurrentObject.data }
              : obj,
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
      <div>
        Size:
        <input
          type="number"
          value={counter}
          style={{ width: `2.5rem` }}
          onChange={onFontSizeChange}
        />
      </div>

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

      <div>
        Font:
        <select defaultValue={'Arial'} onChange={changefontFamily}>
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

      <input 
        type="color"
        className={style.colorPicker}
        // value={color} 
        // onChange={handleColorChange}
      />
    </div>
  );
}

export default Button;
