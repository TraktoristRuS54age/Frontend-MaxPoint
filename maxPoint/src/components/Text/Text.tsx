/* eslint-disable sort-keys */
/* eslint-disable sort-imports */
import { CSSProperties, useContext } from "react";
import { Text as TText } from "../../types/types";
import styles from "./Text.module.css";
import { PresentationContext } from "../../context/context";

function Text({ type, position, data, size, id }: TText) {
  const { presentation, setPresentation } = useContext(PresentationContext);
  const newPresentation = { ...presentation };
  const style: CSSProperties = {
    color: data.color,
    fontFamily: data.fontFamily,
    fontSize: data.fontSize,
    fontWeight: data.bold ? "bold" : "normal",
    userSelect: "none",
    height: size.height,
    width: size.width,
  };

  const onChange = (value: string) => {
    console.log(value, id);
    const currentSlide = newPresentation.slides.find(
      (slide) => slide.id === newPresentation.currentSlideID,
    )!;
    currentSlide.objects = currentSlide.objects.map((obj) =>
      obj.id === id
        ? {
            type: type,
            data: {
              value: value,
              fontSize: data.fontSize,
              fontFamily: data.fontFamily,
              color: data.color,
              bold: data.bold,
            },
            size: {
              height: value.length != 0 ? size.height : 34,
              width: value.length != 0 ? size.width : 110,
            },
            id: id,
            position: position,
          }
        : obj,
    );
    setPresentation(newPresentation);
  };

  return (
    <textarea
      className={styles.textarea}
      style={style}
      value={data.value}
      placeholder={data.value === "" ? "Enter text" : undefined}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default Text;
