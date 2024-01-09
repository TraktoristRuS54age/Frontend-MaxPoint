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
  const { size, position, id, zIndex } = props.data;
  const { toggleArea, setPosition, setSize } = useAppActions();
  const styles: CSSProperties = {
    height: size.height,
    left: position.x,
    top: position.y,
    width: size.width,
    zIndex: zIndex,
  };

  const { registerDndItem } = useDnDBlock();

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { onChangePosition, onChangeSize } = registerDndItem();

    const onMouseDown = (mouseDownEvent: MouseEvent) => {
      if (props.slide.selectObjects !== id) {
        return; // Если toggleArea не активен, выходим из функции
      }
      if (!mouseDownEvent.shiftKey) {
        onChangePosition({
          onDrag: (dragEvent) => {
            dragEvent.preventDefault();
            ref.current!.style.left = `${
              dragEvent.clientX + (position.x - mouseDownEvent.clientX)
            }px`;
            ref.current!.style.top = `${
              dragEvent.clientY + (position.y - mouseDownEvent.clientY)
            }px`;
          },
          onDrop: () => {
            setPosition({
              x: Number(ref.current!.style.left.slice(0, -2)),
              y: Number(ref.current!.style.top.slice(0, -2)),
            });
          },
        });
      } else {
        onChangeSize({
          onDrag: (dragEvent) => {
            dragEvent.preventDefault();
            ref.current!.style.height = `${
              size.height + dragEvent.clientY - mouseDownEvent.clientY
            }px`;
            ref.current!.style.width = `${
              size.width + dragEvent.clientX - mouseDownEvent.clientX
            }px`;
          },
          onDrop: () => {
            setSize({
              height: Number(ref.current!.style.height.slice(0, -2)),
              width: Number(ref.current!.style.width.slice(0, -2)),
            });
          },
        });
      }
    };
    if (props.slide.selectObjects) {
      const control = ref.current!;
      control.addEventListener("mousedown", onMouseDown);
      return () => control.removeEventListener("mousedown", onMouseDown);
    }
  });

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
