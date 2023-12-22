/* eslint-disable sort-keys */
import { CSSProperties } from "react";
import { Size } from "../../types/types";

type ImageProps = {
  data: {
    src?: string;
    alt?: string;
    
  };
  size: Size;
};

function Image({ data, size }: ImageProps) {
  const style: CSSProperties = {
    height: size.height,
    width: size.width,
    userSelect: "none",
  };
  return <img src={data.src} alt={data.alt} style={style}></img>;
}

export default Image;
