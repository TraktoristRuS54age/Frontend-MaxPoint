/* eslint-disable sort-keys */
/* eslint-disable sort-imports */
import { CSSProperties, useContext } from "react";
import { Text as TText } from "../../types/types";
import styles from "./Text.module.css";
import { PresentationContext } from "../../context/context";

function Text({ data, size }: TText) {
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
  const style: CSSProperties = {
    color: data.color,
    fontFamily: data.fontFamily,
    fontSize: data.fontSize,
    fontWeight: data.bold ? "bold" : "normal",
    fontStyle: data.fontStyle,
    textDecoration: data.textDecoration,
    userSelect: "none",
    height: size.height,
    width: size.width,
  };
  
  return (
    <textarea
      className={styles.textarea}
      style={style}
      value={data.value}
      placeholder={data.value === "" ? "Enter text" : undefined}
      onChange={(event) => {
        const obj = selectedObject();
        if (obj === undefined || obj.type !== "text") {
          return;
        }
        const value = event.target.value;
        obj.data.value = event.target.value;
        obj.data.fontSize = value.length != 0 ? obj.data.fontSize : 20;
        obj.size.height = value.length != 0 ? obj.size.height : 34;
        obj.size.width = value.length != 0 ? obj.size.width : 110;
        setPresentation({
          ...presentation,
          slides: slides,
        });
      }}
    />
  );
}

export default Text;
