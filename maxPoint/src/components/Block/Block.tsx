/* eslint-disable sort-keys */
/* eslint-disable sort-imports */
import style from "./Block.module.css";
import { CSSProperties, useContext, useEffect, useRef, useState } from "react";
import { Image as TImage } from "../../types/types";
import { Primitive as TPrimitive } from "../../types/types";
import { Text as TText } from "../../types/types";
import { useDnD } from "../../hooks/useDnD/useDnD";
import Image from "../Image/Image";
import Primitive from "../Primitive/Primitive";
import Text from "../Text/Text";
import classNames from "classnames";
import { PresentationContext } from "../../context/context";

type BlockProps = TPrimitive | TImage | TText;

function Block({ position, type, data, id }: BlockProps) {
  const { presentation, setPresentation } = useContext(PresentationContext);
  const newPresentation = { ...presentation };

  const styles: CSSProperties = {
    minHeight: data.size.height,
    left: position.x,
    top: position.y,
    minWidth: data.size.width,
  };

  const { registerDndItem } = useDnD();

  const ref = useRef<HTMLDivElement>(null);
  const [selectArea, setSelectArea] = useState(false);

  const toggleArea = () => {
    console.log("toggle");
    setSelectArea((area) => !area);
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
    const { onDragStart } = registerDndItem({
      elementRef: ref,
    });

    const onMouseDown = (mouseDownEvent: MouseEvent) => {
      if (!selectArea) {
        return; // Если toggleArea не активен, выходим из функции
      }
      onDragStart({
        onDrag: (dragEvent) => {
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
          toggleArea();
          setPosition(pos);
        },
      });
    };
    if (selectArea !== null) {
      const control = ref.current!;
      control.addEventListener("mousedown", onMouseDown);
      return () => control.removeEventListener("mousedown", onMouseDown);
    }
  }, [selectArea]);

  return (
    <div
      className={
        selectArea ? classNames(style.block, style.selectArea) : style.block
      }
      style={styles}
      ref={ref}
      onDoubleClick={toggleArea}
    >
      {type === "image" && <Image data={data} />}
      {type === "primitive" && <Primitive data={data} />}
      {type === "text" && <Text data={data} />}
    </div>
  );
}

export default Block;
