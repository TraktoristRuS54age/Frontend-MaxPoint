import { CSSProperties } from "react";
import { Size } from "../../types/types";

type ImageProps = {
  data: {
    src: string;
    alt: string;
    size: Size;
  };
};

function Image({ data }: ImageProps) {
  const style: CSSProperties = {
    height: data.size.height,
    width: data.size.width,
  };
  return <img src={data.src} alt={data.alt} style={style}></img>;
}

export default Image;
