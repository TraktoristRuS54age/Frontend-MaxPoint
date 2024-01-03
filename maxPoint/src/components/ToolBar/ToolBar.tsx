/* eslint-disable sort-imports */
import logo from "../../resources/img/logo.png";
import style from "./ToolBar.module.css";

import Title from "../Title/Title";
// import History from "../History/History";
import Button from "../Button/Button";
import DownloadButton from "../DownloadButton/DownloadButton";

function ToolBar() {
  return (
    <div className={style.header_block}>
      <img className={style.header_img} src={logo} alt="log" />
      <div className={style.header_block_center}>
        <Button />
        <Title />
      </div>
      <div className={style.header_upload}>
        <DownloadButton />
      </div>
    </div>
  );
}

export default ToolBar;
