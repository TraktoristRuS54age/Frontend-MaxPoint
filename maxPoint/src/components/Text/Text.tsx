/* eslint-disable sort-imports */
import { CSSProperties } from "react";
import {Text as TText} from "../../types/types"


function Text({ data }: TText) {
  const style: CSSProperties = {
    color: data.color,
    fontFamily: data.fontFamily,
    fontSize: data.fontSize,
    fontWeight: data.bold ? "bold" : "normal",
    userSelect: "none",
  };
  return <span style={style}>{data.value}</span>;
}

export default Text;
