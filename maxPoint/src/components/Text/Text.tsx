import { CSSProperties } from "react";
import { Text as TText } from "../../types/types";
import styles from "./Text.module.css";
import { useAppActions } from "../../redux/Actions/Actions";
import { useAppSelector } from "../../redux/Reducer";

function Text({ data, size }: TText) {
  const { SetTextValue } = useAppActions();
  const slides = useAppSelector((state) => state.slides);
  const currentSlideID = useAppSelector((state) => state.currentSlideID);
  const currentSlide = slides.find((slide) => slide.id === currentSlideID);
  const selectedObject = currentSlide?.objects.find(
    (object) => object.id === currentSlide.selectObjects,
  );
  const style: CSSProperties = {
    color: data.color,
    fontFamily: data.fontFamily,
    fontSize: data.fontSize,
    fontStyle: data.fontStyle,
    fontWeight: data.bold ? "bold" : "normal",
    height: size.height,
    textDecoration: data.textDecoration,
    userSelect: "none",
    width: size.width,
  };
  return (
    <textarea
      className={styles.textarea}
      style={style}
      value={data.value}
      placeholder={data.value === "" ? "Enter text" : undefined}
      onChange={(event) => {
        if (selectedObject === undefined || selectedObject.type !== "text") {
          return;
        }
        const value = event.target.value;
        SetTextValue(value);
      }}
    />
  );
}

export default Text;
