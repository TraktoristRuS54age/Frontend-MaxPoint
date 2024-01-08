import PhotoButton from "../PhotoButton/PhotoButton";
import UploadButton from "../UploadButton/UploadButton";
import figures from "../../resources/img/figures.png";
import { text as newText } from "../../types/example/maximum";
import style from "./LeftToolbar.module.css";
import text from "../../resources/img/text.png";
import { useAppActions } from "../../redux/Actions/Actions";

type TFunction = {
  props: () => void;
};

function Left_ToolBar({ props }: TFunction) {
  const { CreateObject } = useAppActions();

  return (
    <div className={style.menu_block}>
      <div className={style.menu_block__list}>
        <div
          className={style.menu_item}
          onClick={() => CreateObject(newText())}
        >
          <img className={style.menu_block__img} src={text}></img>
          <p className={style.menu_block_text}>Text</p>
        </div>

        <div className={style.menu_item}>
          <button className={style.figure__button} onClick={props}>
            <img className={style.menu_block__img} src={figures}></img>
          </button>
          <p className={style.menu_block_text}>Figure</p>
        </div>
        <PhotoButton />
        <UploadButton />
      </div>
    </div>
  );
}

export default Left_ToolBar;
