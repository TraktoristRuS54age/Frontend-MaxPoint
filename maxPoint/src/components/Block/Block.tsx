/* eslint-disable sort-keys */
/* eslint-disable sort-imports */
import style from "./Block.module.css";
import { CSSProperties } from "react";
import { Image as TImage } from "../../types/types";
import { Primitive as TPrimitive } from "../../types/types";
import { Text as TText } from "../../types/types";
import Image from "../Image/Image";
import Primitive from "../Primitive/Primitive";
import Text from "../Text/Text";

type BlockProps = TPrimitive | TImage | TText;

function Block({ position, size, type, data }: BlockProps) {
  const styles: CSSProperties = {
    minHeight: size.height,
    left: position.x,
    top: position.y,
    minWidth: size.width,
  };


  return (
    <div className={style.block} style={styles}>
      {type === "image" && <Image data={data} />}
      {type === "primitive" && <Primitive data={data} />}
      {type === "text" && <Text data={data} />}
    </div>
  );
}

export default Block;
