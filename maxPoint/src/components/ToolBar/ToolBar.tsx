import logo from "../../resources/img/logo.png";
import arrowLeft from "../../resources/headerButton/left_48.png";
import arrowRight from "../../resources/headerButton/right_48.png";
import minus from "../../resources/headerButton/minus_48.png";
import plus from "../../resources/headerButton/plus_48.png";
import bold from "../../resources/headerButton/bold_48.png";
import italic from "../../resources/headerButton/italic_48.png";
import delet from "../../resources/headerButton/delete_48.png";
import style from "./ToolBar.module.css";
function ToolBar() {
  return (
<div className={style.header_block}>
      <img className={style.header_img} src={logo} alt="log" />
      <div className={style.header_block_center}>
        <div className={style.header_hist}>
          <button type="button" className={style.header_button}><img className={style.button_img} src={arrowLeft} alt="Иконка"></img></button>
          <button type="button" className={style.header_button}><img className={style.button_img} src={arrowRight} alt="Иконка"></img></button>
        </div>
        
        <div className={style.header_block_button}>
          <button type="button" className={style.header_button}><img className={style.button_img} src={minus} alt="Иконка"></img></button>
          <input className={style.header_input_number} type="number" name="number"/>
          <button type="button" className={style.header_button}><img className={style.button_img} src={plus} alt="Иконка"></img></button>
          <button type="button" className={style.header_button}><img className={style.button_img} src={bold} alt="Иконка"></img></button>
          <button type="button" className={style.header_button}><img className={style.button_img} src={italic} alt="Иконка"></img></button>
          <button type="button" className={style.header_button}><img className={style.button_img} src={delet} alt="Иконка"></img></button>
        </div>

        <input className={style.header_input_name} type="text" value="Untitled Project"/>
      </div>
      <div className={style.header_upload}>
        <button className={style.header_upload_button} type="button">Upload</button>        
      </div>
    </div>
  );
}

export default ToolBar;
