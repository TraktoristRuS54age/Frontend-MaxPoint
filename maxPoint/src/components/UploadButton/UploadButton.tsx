import { ChangeEvent } from "react";
import style from "../LeftToolBar/LeftToolbar.module.css";
import upload from "../../resources/img/upload.png";
import { useAppActions } from "../../redux/Actions/Actions";

const UploadButton = () => {
  const { UploadPresentation } = useAppActions();
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    let file: File;
    if (event.target.files) {
      file = event.target.files[0];
      reader.readAsText(event.target.files[0]);
    }
    reader.onloadend = function () {
      try {
        if (typeof reader.result !== "string")
          throw Error("invalid file type: " + typeof reader.result);
        if (file.type !== "application/json")
          throw Error("invalid file: " + file.type);
        const dataParsing = JSON.parse(reader.result);
        UploadPresentation(dataParsing);
      } catch (error) {
        alert(error);
      }
    };
  };
  return (
    <>
      <input
        accept=".json"
        onChange={onChange}
        type="file"
        id="upload"
        className={style.input_display}
      />
      <label htmlFor="upload" className={style.menu_item}>
        <img className={style.menu_block__img} src={upload}></img>
        <p className={style.menu_block_text}>Upload</p>
      </label>
    </>
  );
};

export default UploadButton;
