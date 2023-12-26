/* eslint-disable sort-keys */
import { CSSProperties } from "react";
import { Image as TImage } from "../../types/types";


function Image({ data, size }: TImage) {
  const style: CSSProperties = {
    height: size.height,
    width: size.width,
    userSelect: "none",
  };
  return <img src={data.src} alt={data.alt} style={style}></img>;
}

export default Image;
