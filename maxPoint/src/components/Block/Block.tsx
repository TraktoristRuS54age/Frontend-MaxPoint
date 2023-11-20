/* eslint-disable sort-imports */
import "./Block.css";
import { CSSProperties } from "react";
import { Image as TImage } from "../../types/types";
import { Primitive as TPrimitive } from "../../types/types";
import { Text as TText } from "../../types/types";
import Image from "../Image/Image";
import Primitive from "../Primitive/Primitive";
import Text from "../Text/Text";

type BlockProps = TPrimitive | TImage | TText;

function Block({ position, size, type, data }: BlockProps) {
  const style: CSSProperties = {
    height: size.height,
    left: position.x,
    top: position.y,
    width: size.width,
  };

  return (
    <div className="block" style={style}>
      {type === "image" && <Image data={data} />}
      {type === "primitive" && <Primitive data={data} />}
      {type === "text" && <Text data={data} />}
    </div>
  );
}

export default Block;
