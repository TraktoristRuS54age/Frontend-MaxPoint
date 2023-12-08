/* eslint-disable sort-imports */
import { ChangeEvent } from "react";
import upload from "../../resources/img/upload.png";
import style from "../Left_ToolBar/Left_Toolbar.module.css";
import { useAppDispatch } from "../../redux/store";
import { setNewData } from "../../redux/slide/slice";

const UploadButton = () => {
  const dispatch = useAppDispatch();
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
        dispatch(setNewData(dataParsing));
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
