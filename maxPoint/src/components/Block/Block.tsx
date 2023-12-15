/* eslint-disable sort-keys */
/* eslint-disable sort-imports */
import style from "./Block.module.css";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { Image as TImage } from "../../types/types";
import { Primitive as TPrimitive } from "../../types/types";
import { Text as TText } from "../../types/types";
import Image from "../Image/Image";
import Primitive from "../Primitive/Primitive";
import Text from "../Text/Text";
import { useDnD } from "../../hooks/useDnD/useDnD";
import classNames from "classnames";

type BlockProps = TPrimitive | TImage | TText;

function Block({ position, type, data }: BlockProps) {
  const [state, setState] = useState(position);

  const styles: CSSProperties = {
    minHeight: data.size.height,
    left: state.x,
    top: state.y,
    minWidth: data.size.width,
  };

  const { registerDndItem } = useDnD();

  const ref = useRef<HTMLDivElement>(null);
  const [selectArea, setSelectArea] = useState(false);

  const toggleArea = () => {
    console.log('toggle');
    setSelectArea((area) => !area);
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
            dragEvent.clientY + (state.y - mouseDownEvent.clientY)
          }px`;
          ref.current!.style.left = `${
            dragEvent.clientX + (state.x - mouseDownEvent.clientX)
          }px`;
        },
        onDrop: (dropEvent) => {
          setState((state) => ({
            ...state,
            x: dropEvent.clientX + (state.x - mouseDownEvent.clientX),
            y: dropEvent.clientY + (state.y - mouseDownEvent.clientY),
          }));
          toggleArea();
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
      onClick={toggleArea}
    >
      {type === "image" && <Image data={data} />}
      {type === "primitive" && <Primitive data={data} />}
      {type === "text" && <Text data={data} />}
    </div>
  );
}

export default Block;
