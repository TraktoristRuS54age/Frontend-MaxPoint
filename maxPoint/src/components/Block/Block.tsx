import { CSSProperties, useEffect, useRef } from "react";
import Image from "../Image/Image";
import Primitive from "../Primitive/Primitive";
import { Image as TImage } from "../../types/types";
import { Primitive as TPrimitive } from "../../types/types";
import { Slide as TSlide } from "../../types/types";
import { Text as TText } from "../../types/types";
import Text from "../Text/Text";
import classNames from "classnames";
import style from "./Block.module.css";
import { useAppActions } from "../../redux/Actions/Actions";
import { useDnDBlock } from "../../hooks/useDnD/useDragBlock";

type BlockProps = TPrimitive | TImage | TText;
type SlideObjectProps = {
  slide: TSlide;
  data: BlockProps;
};

function getObject(data: BlockProps) {
  switch (data.type) {
    case "text":
      return <Text {...data} />;
    case "image":
      return <Image {...data} />;
    case "primitive":
      return <Primitive {...data} />;
  }
}

function Block(props: SlideObjectProps) {
  const { size, position, id } = props.data;
  const { toggleArea, setPosition, setSize } = useAppActions();
  const styles: CSSProperties = {
    height: size.height,
    left: position.x,
    top: position.y,
    width: size.width,
  };

  const { registerDndItem } = useDnDBlock();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // TODO: эту логику перемещения можно вынести в отдельный компонент, div, который сможет отрисовывать в себе любой контент
    const { onChangePosition, onChangeSize } = registerDndItem();

    const onMouseDown = (mouseDownEvent: MouseEvent) => {
      if (props.slide.selectObjects !== id) {
        return; // Если toggleArea не активен, выходим из функции
      }
      if (!mouseDownEvent.shiftKey) {
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
    if (props.slide.selectObjects) {
      const control = ref.current!;
      control.addEventListener("mousedown", onMouseDown);
      return () => control.removeEventListener("mousedown", onMouseDown);
    }
  }, [[props.slide.selectObjects]]);

  return (
    <div
      className={
        props.slide.selectObjects == id
          ? classNames(style.block, style.selectArea)
          : style.block
      }
      style={styles}
      ref={ref}
      onClick={(event) => toggleArea(event, id)}
    >
      {getObject(props.data)}
    </div>
  );
}

export default Block;
