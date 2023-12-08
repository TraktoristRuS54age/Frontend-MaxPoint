/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable sort-imports */
import logo from "../../resources/img/logo.png";
import style from "./ToolBar.module.css";

import Title from "../Title/Title";
import History from "../History/History";
import Button from "../Button/Button";

function ToolBar() {
  return (
    <div className={style.header_block}>
      <img className={style.header_img} src={logo} alt="log" />
      <div className={style.header_block_center}>
        <History />
        <Button />
        <Title />
      </div>
      <div className={style.header_upload}>
        <button className={style.header_upload_button} type="button">
          Download
        </button>
      </div>
    </div>
  );
}

export default ToolBar;
