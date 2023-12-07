import style from "./Button.module.css";
import minus from "../../resources/headerButton/minus_48.png";
import plus from "../../resources/headerButton/plus_48.png";
import bold from "../../resources/headerButton/bold_48.png";
import italic from "../../resources/headerButton/italic_48.png";
import delet from "../../resources/headerButton/delete_48.png";
import {useState} from 'react';

function Button() {
    const [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter + 1)
    }

    function decrement() {
        setCounter(counter - 1)
    }
    return (
    <div className={style.header_block_button}>

        <button type="button" className={style.header_button} onClick={decrement}>
            <img className={style.button_img} src={minus} alt="минус"></img>
        </button>

        <input
            className={style.header_input_number} 
            type="number"
            value={counter}
            name="number"
        />

        <button type="button" className={style.header_button} onClick={increment}>
            <img className={style.button_img} src={plus} alt="плюс"></img>
        </button>

        <button type="button" className={style.header_button}>
            <img className={style.button_img} src={bold} alt="жирный"></img>
        </button>

        <button type="button" className={style.header_button}>
            <img className={style.button_img} src={italic} alt="курсив"></img>
        </button>

        <button type="button" className={style.header_button}>
            <img className={style.button_img} src={delet} alt="удалить"></img>
        </button>

    </div>
    );
  }
  
  export default Button;
  