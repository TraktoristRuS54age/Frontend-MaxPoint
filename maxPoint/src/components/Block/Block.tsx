
/* eslint-disable sort-keys */
/* eslint-disable sort-imports */
import style from "./Block.module.css";
import { CSSProperties, useContext, useEffect, useRef } from "react";
import { Image as TImage } from "../../types/types";
import { Primitive as TPrimitive } from "../../types/types";
import { Text as TText } from "../../types/types";
import { useDnDBlock } from "../../hooks/useDnD/useDragBlock";
import Image from "../Image/Image";
import Primitive from "../Primitive/Primitive";
import Text from "../Text/Text";
import classNames from "classnames";
import { PresentationContext } from "../../context/context";

type BlockProps = TPrimitive | TImage | TText;

function getObject(props: BlockProps) {
  switch (props.type) {
    case "text":
      return <Text {...props} />;
    case "image":
      return <Image {...props} />;
    case "primitive":
      return <Primitive {...props} />;
  }
}

function Block(props: BlockProps) {
  const { size, position, id } = props;
  const { presentation, setPresentation } = useContext(PresentationContext);
  const newPresentation = { ...presentation };
  const currentSelectObject = newPresentation.slides.find(
    (slide) => slide.id === newPresentation.currentSlideID,
  )?.selectObjects;
  const currentSlide = newPresentation.slides.find(
    (slide) => slide.id === newPresentation.currentSlideID,
  );

  const styles: CSSProperties = {
    height: size.height,
    left: position.x,
    top: position.y,
    width: size.width,
  };

  const { registerDndItem } = useDnDBlock();

  const ref = useRef<HTMLDivElement>(null);

  const toggleArea = (event: any) => {
    // console.log(event.ctrlKey)
    const currentSlide = newPresentation.slides.find(
      (slide) => slide.id === presentation.currentSlideID,
    );

    if (event.ctrlKey) {
      const updatedSlides = newPresentation.slides.map((slide) =>
        slide.id === presentation.currentSlideID
          ? { ...slide, selectObjects: null }
          : slide,
      );
      newPresentation.slides = updatedSlides;
      console.log(newPresentation.slides);
      setPresentation(newPresentation);
      return;
    }

    if (currentSlide) {
      const updatedSlides = newPresentation.slides.map((slide) =>
        slide.id === presentation.currentSlideID
          ? { ...slide, selectObjects: id }
          : slide,
      );

      newPresentation.slides = updatedSlides;
      setPresentation(newPresentation);
    }
  };

  const setPosition = (pos: { x: number; y: number }) => {
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

  const setSize = (size: { height: number; width: number }) => {
    if (currentSlide) {
      const updatedObjectsSize = currentSlide.objects.map((obj) =>
        obj.id === id
          ? {
              ...obj,
              size: {
                height: size.height,
                width: size.width,
              },
            }
          : obj,
      );

      const updatedSlide = {
        ...currentSlide,
        objects: updatedObjectsSize,
      };

      const updatedSlides = newPresentation.slides.map((slide) =>
        slide.id === newPresentation.currentSlideID ? updatedSlide : slide,
      );

      newPresentation.slides = updatedSlides;
      setPresentation(newPresentation);
    }
  };

  useEffect(() => {
    // TODO: эту логику перемещения можно вынести в отдельный компонент, div, который сможет отрисовывать в себе любой контент
    const { onChangePosition, onChangeSize } = registerDndItem();

    const onMouseDown = (mouseDownEvent: MouseEvent) => {
      if (currentSelectObject !== id) {
        return; // Если toggleArea не активен, выходим из функции
      }

      if (!mouseDownEvent.shiftKey) {
        // console.log(mouseDownEvent);
        onChangePosition({
          onDrag: (dragEvent) => {
            dragEvent.preventDefault();
            const pos = {
              x: dragEvent.clientX + (position.x - mouseDownEvent.clientX),
              y: dragEvent.clientY + (position.y - mouseDownEvent.clientY),
            };
            setPosition(pos);
          },
        });
      } else {
        onChangeSize({
          onDrag: (dragEvent) => {
            dragEvent.preventDefault();
            const sizes = {
              height: size.height + dragEvent.clientY - mouseDownEvent.clientY,
              width: size.width + dragEvent.clientX - mouseDownEvent.clientX,
            };
            setSize(sizes);
          },
        });
      }
    };
    if (currentSelectObject !== null) {
      const control = ref.current!;
      control.addEventListener("mousedown", onMouseDown);
      return () => control.removeEventListener("mousedown", onMouseDown);
    }
  }, [newPresentation]);

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
      {getObject(props)}
    </div>
  );
}

export default Block;
