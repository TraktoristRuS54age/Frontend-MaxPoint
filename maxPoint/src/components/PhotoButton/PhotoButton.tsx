import { ChangeEvent } from "react";
import { image as newImage } from "../../types/example/maximum";
import photo from "../../resources/img/photo.png";
import style from "../LeftToolBar/LeftToolbar.module.css";
import { useAppActions } from "../../redux/Actions/Actions";

const PhotoButton = () => {
  const { CreateObject } = useAppActions();
  const onChange = async (event: ChangeEvent<HTMLInputElement>) => {
    try {
      const file = event.target.files?.[0];

      if (!file) {
        throw new Error("No file selected");
      }

      if (!file.type.includes("jpeg") && !file.type.includes("png")) {
        throw new Error("Invalid file type: " + file.type);
      }

      const imageUrl = URL.createObjectURL(file);
      CreateObject(newImage(imageUrl));
    } catch (error) {
      alert(error);
    }
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
