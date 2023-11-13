import logo from "../../resources/img/logo.png";
import style from "./ToolBar.module.css";
function ToolBar() {
	return (
		<div className={style.header_block}>
				
				<img className={style.header_img} src={logo} alt="log" />
				<p className={style.header_text}>
						Инструмент 1
				</p>
				<p className={style.header_text}>
						Инструмент 2
				</p>
				<p className={style.header_text}>
						Инструмент 3
				</p>
		</div>
	);	
}

export default ToolBar;