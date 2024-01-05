/* eslint-disable sort-keys */
/* eslint-disable sort-imports */
import style from "./Block.module.css";
import { CSSProperties, useContext, useEffect, useRef } from "react";
import { Image as TImage } from "../../types/types";
import { Primitive as TPrimitive } from "../../types/types";
import { Text as TText } from "../../types/types";
import { useDnDBlock } from "../../hooks/useDnD/useDragBlock";
import { PresentationContext } from "../../context/context";
import Image from "../Image/Image";
import Primitive from "../Primitive/Primitive";
import Text from "../Text/Text";
import classNames from "classnames";


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
  const slides = presentation.slides;
  const currentSlide = slides.find(
    (slide) => slide.id === presentation.currentSlideID,
  );
  const selectedObject = currentSlide?.objects.find(
    (object) => object.id === currentSlide.selectObjects,
  );

  const styles: CSSProperties = {
    height: size.height,
    left: position.x,
    top: position.y,
    width: size.width,
  };

  const { registerDndItem } = useDnDBlock();

  const ref = useRef<HTMLDivElement>(null);

  const toggleArea = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (currentSlide) {
      if (event.ctrlKey) {
        currentSlide.selectObjects = null;
        setPresentation({
          ...presentation,
          slides: slides,
        });
        return;
      }

      currentSlide.selectObjects = id;
      setPresentation({
        ...presentation,
        slides: slides,
      });
    }
  };

  const setPosition = (pos: { x: number; y: number }) => {
    if (currentSlide && selectedObject) {
      selectedObject.position = { x: pos.x, y: pos.y };

      setPresentation({
        ...presentation,
        slides: slides,
      });
    }
  };

  const setSize = (size: { height: number; width: number }) => {
    if (currentSlide && selectedObject) {

      selectedObject.size = {
        height: size.height,
        width: size.width,
      };

      setPresentation({
        ...presentation,
        slides: slides,
      });
    }
  };

  useEffect(() => {
    // TODO: эту логику перемещения можно вынести в отдельный компонент, div, который сможет отрисовывать в себе любой контент
    const { onChangePosition, onChangeSize } = registerDndItem();

    const onMouseDown = (mouseDownEvent: MouseEvent) => {
      if (selectedObject?.id !== id) {
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
    if (selectedObject) {
      const control = ref.current!;
      control.addEventListener("mousedown", onMouseDown);
      return () => control.removeEventListener("mousedown", onMouseDown);
    }
  }, [presentation]);

  return (
    <div
      className={
        selectedObject?.id == id
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
