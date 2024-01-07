import Button from "../Button/Button";
import DownloadButton from "../downloadButton/DownloadButton";
import Title from "../Title/Title";
import logo from "../../resources/img/logo.png";
import style from "./ToolBar.module.css";

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
