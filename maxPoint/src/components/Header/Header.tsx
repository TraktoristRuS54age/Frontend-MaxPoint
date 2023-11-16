import ToolBar from "../ToolBar/ToolBar.tsx";
import style from "./Header.module.css";

function Header() {
  return (
    <div className={style.header}>
      <ToolBar />
    </div>
  );
}

export default Header;
