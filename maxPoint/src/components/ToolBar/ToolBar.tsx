/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable sort-imports */
import logo from "../../resources/img/logo.png";
import style from "./ToolBar.module.css";

<<<<<<< Updated upstream
=======
import Title from "../Title/Title";
import History from "../History/History";
import Button from "../Button/Button";

>>>>>>> Stashed changes
function ToolBar() {
  return (
    <div className={style.header_block}>
      <img className={style.header_img} src={logo} alt="log" />
      <div className={style.header_block_center}>
<<<<<<< Updated upstream
        <div className={style.header_hist}>
          <button type="button" className={style.header_button}>
            <img
              className={style.button_img}
              src={arrowLeft}
              alt="Иконка"
            ></img>
          </button>
          <button type="button" className={style.header_button}>
            <img
              className={style.button_img}
              src={arrowRight}
              alt="Иконка"
            ></img>
          </button>
        </div>

        <div className={style.header_block_button}>
          <button type="button" className={style.header_button}>
            <img className={style.button_img} src={minus} alt="Иконка"></img>
          </button>
          <input
            className={style.header_input_number}
            type="number"
            name="number"
          />
          <button type="button" className={style.header_button}>
            <img className={style.button_img} src={plus} alt="Иконка"></img>
          </button>
          <button type="button" className={style.header_button}>
            <img className={style.button_img} src={bold} alt="Иконка"></img>
          </button>
          <button type="button" className={style.header_button}>
            <img className={style.button_img} src={italic} alt="Иконка"></img>
          </button>
          <button type="button" className={style.header_button}>
            <img className={style.button_img} src={delet} alt="Иконка"></img>
          </button>
        </div>

        <input className={style.header_input_name} type="input" value="first" />
=======
        <History />
        <Button />
        <Title />
>>>>>>> Stashed changes
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
