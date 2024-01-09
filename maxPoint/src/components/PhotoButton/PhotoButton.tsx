import { image as newImage } from "../../types/example/maximum";
import photo from "../../resources/img/photo.png";
import style from "../LeftToolBar/LeftToolbar.module.css";
import { useAppActions } from "../../redux/Actions/Actions";

const PhotoButton = () => {
  const { CreateObject } = useAppActions();
  return (
    <>
      <input
        type="file"
        accept="Image/*"
        onChange={(event) => {
          const reader = new FileReader();
          let file: File;
          if (event.target.files) {
            file = event.target.files[0];
            reader.readAsDataURL(event.target.files[0]);
          }
          reader.onload = function (e) {
            try {
              if (typeof reader.result !== "string")
                throw Error("invalid file type: " + typeof reader.result);
              if (!file.type.includes("jpeg") && !file.type.includes("png")) {
                throw Error("invalid file: " + file.type);
              }
              CreateObject(newImage(e.target!.result as string));
            } catch (error) {
              alert(error);
            }
          };
        }}
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
