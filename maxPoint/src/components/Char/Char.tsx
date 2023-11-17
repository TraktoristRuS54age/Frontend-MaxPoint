import { Char as TChar } from "../../types/types";
// eslint-disable-next-line sort-imports
import { CSSProperties } from "react";

type CharProps = Omit<TChar, "id">;

function Char({ color, fontFamily, fontSize, value, bold }: CharProps) {
  const style: CSSProperties = {
    color,
    fontFamily,
    fontSize,
    fontWeight: bold ? "bold" : "normal",
  };
  return <span style={style}>{value}</span>;
}

export default Char;
