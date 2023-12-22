/* eslint-disable sort-keys */
/* eslint-disable sort-imports */
import style from "./Block.module.css";
import { CSSProperties, useContext, useEffect, useRef } from "react";
import { Image as TImage } from "../../types/types";
import { Primitive as TPrimitive } from "../../types/types";
import { Text as TText } from "../../types/types";
import { useDnDBlock } from "../../hooks/useDnD/useDnD";
import Image from "../Image/Image";
import Primitive from "../Primitive/Primitive";
import Text from "../Text/Text";
import classNames from "classnames";
import { PresentationContext } from "../../context/context";

type BlockProps = TPrimitive | TImage | TText;

function Block({ position, type, data, id }: BlockProps) {
  const { presentation, setPresentation } = useContext(PresentationContext);
  const newPresentation = { ...presentation };
  const currentSelectObject = newPresentation.slides.find(
    (slide) => slide.id === newPresentation.currentSlideID,
  )?.selectObjects;

  const styles: CSSProperties = {
    minHeight: data.size.height,
    left: position.x,
    top: position.y,
    minWidth: data.size.width,
  };

  const { registerDndItem } = useDnDBlock();

  const ref = useRef<HTMLDivElement>(null);

  const toggleArea = () => {
    console.log("toggle");
    const currentSlide = newPresentation.slides.find(
      (slide) => slide.id === presentation.currentSlideID,
    );

    if (currentSlide) {
      const isSelected = currentSlide.selectObjects === id;

      const updatedSlides = newPresentation.slides.map((slide) =>
        slide.id === presentation.currentSlideID
          ? { ...slide, selectObjects: isSelected ? null : id }
          : slide,
      );

      newPresentation.slides = updatedSlides;
      setPresentation(newPresentation);
    }
  };

  const setPosition = (pos: { x: number; y: number }) => {
    const currentSlide = newPresentation.slides.find(
      (slide) => slide.id === newPresentation.currentSlideID,
    );

    if (currentSlide) {
      const updatedObjects = currentSlide.objects.map((obj) =>
        obj.id === id ? { ...obj, position: { x: pos.x, y: pos.y } } : obj,
      );

      const updatedSlide = { ...currentSlide, objects: updatedObjects };

      const updatedSlides = newPresentation.slides.map((slide) =>
        slide.id === newPresentation.currentSlideID ? updatedSlide : slide,
      );

      newPresentation.slides = updatedSlides;
      setPresentation(newPresentation);
    }
  };

  useEffect(() => {
    // TODO: эту логику перемещения можно вынести в отдельный компонент, div, который сможет отрисовывать в себе любой контент
    const { onDragStart } = registerDndItem();

    const onMouseDown = (mouseDownEvent: MouseEvent) => {
      if (currentSelectObject !== id) {
        return; // Если toggleArea не активен, выходим из функции
      }
      onDragStart({
        onDrag: (dragEvent) => {
          console.log(dragEvent.clientX)
          dragEvent.preventDefault();
          ref.current!.style.top = `${
            dragEvent.clientY + (position.y - mouseDownEvent.clientY)
          }px`;
          ref.current!.style.left = `${
            dragEvent.clientX + (position.x - mouseDownEvent.clientX)
          }px`;
        },
        onDrop: (dropEvent) => {
          const pos = {
            x: dropEvent.clientX + (position.x - mouseDownEvent.clientX),
            y: dropEvent.clientY + (position.y - mouseDownEvent.clientY),
          };
          setPosition(pos);
        },
      });
    };
    if (currentSelectObject !== null) {
      const control = ref.current!;
      control.addEventListener("mousedown", onMouseDown);
      return () => control.removeEventListener("mousedown", onMouseDown);
    }
  }, [currentSelectObject]);

  return (
    <div
      className={
        currentSelectObject == id
          ? classNames(style.block, style.selectArea)
          : style.block
      }
      style={styles}
      ref={ref}
      onClick={toggleArea}
    >
      {type === "image" && <Image data={data} />}
      {type === "primitive" && <Primitive data={data} />}
      {type === "text" && <Text data={data} />}
    </div>
  );
}

export default Block;
