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
          if (event.target.files === null) {
            return;
          }
          const file = event.target.files[0];
          if (!file) {
            return;
          }
          const reader = new FileReader();
          reader.onload = (e) => {
            try {
              CreateObject(newImage(e.target!.result as string));
            } catch (error) {
              console.error(error);
            }
          };
          reader.readAsDataURL(file);
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
