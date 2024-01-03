import { ChangeEvent, useContext } from "react";
import { PresentationContext } from "../../context/context";
import style from "../LeftToolBar/LeftToolbar.module.css";
// eslint-disable-next-line sort-imports
import photo from "../../resources/img/photo.png";
// eslint-disable-next-line sort-imports
import { Image as TImage } from "../../types/types";
import { v4 as uuidv4 } from "uuid";

const PhotoButton = () => {
  const { presentation, setPresentation } = useContext(PresentationContext);
  const newPresentation = { ...presentation };
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    let file: File;
    if (event.target.files) {
      file = event.target.files[0];
      reader.readAsDataURL(event.target.files[0]);
      console.log(event.target.files[0])
    }

    reader.onload = function () {
      try {
        if (typeof reader.result !== "string")
          throw Error("invalid file type: " + typeof reader.result);
        if (!file.type.includes("jpeg") && !file.type.includes("png")) {
          throw Error("invalid file: " + file.type);
        };
        const image: TImage = {
          data: {
            alt: "не найдено",
            src: reader.result,
          },
          id: uuidv4(),
          position: {
            x: 0,
            y: 0,
          },
          size: {
            height: 100,
            width: 100,
          },
          type: "image",
        };
        newPresentation.slides
          .find((slide) => slide.id === newPresentation.currentSlideID)
          ?.objects.push(image);
        setPresentation(newPresentation);
      } catch (error) {
        alert(error);
      }
    };
  };
  return (
    <>
      <input
        type="file"
        accept="Image/*"
        onChange={onChange}
        id="Photo"
        className={style.input_display}
        multiple
      />
      <label htmlFor="Photo" className={style.menu_item}>
        <img className={style.menu_block__img} src={photo}></img>
        <p className={style.menu_block_text}>Photos</p>
      </label>
    </>
  );
};

export default PhotoButton;
