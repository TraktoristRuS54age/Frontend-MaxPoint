/* eslint-disable sort-imports */
import { ChangeEvent, useContext } from "react";
import upload from "../../resources/img/upload.png";
import style from "../LeftToolBar/LeftToolbar.module.css";
import { PresentationContext } from "../../context/context";

const UploadButton = () => {
  const { setPresentation } = useContext(PresentationContext);
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
        setPresentation(dataParsing);
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
