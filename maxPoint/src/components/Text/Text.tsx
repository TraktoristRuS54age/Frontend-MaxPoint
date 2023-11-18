/* eslint-disable sort-imports */
import { Char as TChar } from "../../types/types";
import Char from "../Char/Char";

type TextProps = {
  data: {
    text: TChar[];
  };
};

function Text({ data }: TextProps) {
  return (
    <span>
      {data.text.map((char) => (
        <Char
          key={char.id}
          value={char.value}
          fontSize={char.fontSize}
          fontFamily={char.fontFamily}
          color={char.color}
          bold={char.bold}
        />
      ))}
    </span>
  );
}

export default Text;
