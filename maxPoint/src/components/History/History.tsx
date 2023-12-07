import style from "./History.module.css";
import arrowLeft from "../../resources/headerButton/left_48.png";
import arrowRight from "../../resources/headerButton/right_48.png";

function History() {
    return (       
    <div>  
        <div className={style.header_hist}>  
            <button type="button" className={style.header_button}>
                <img
                className={style.button_img}
                src={arrowLeft}
                alt="назад"
                ></img>
            </button>

            <button type="button" className={style.header_button}>
                <img
                className={style.button_img}
                src={arrowRight}
                alt="вперёд"
                ></img>
            </button> 
        </div> 
    </div>
    );
}
  
export default History;