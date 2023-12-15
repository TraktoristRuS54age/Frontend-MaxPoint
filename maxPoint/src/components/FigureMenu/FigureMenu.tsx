import style from "./FigureMenu.module.css";

const FigureMenu = () => {
  return (
    <nav className={style.figure}>
      <ul className={style.figure__menu}>
        <li className={style.figure__item}>
          <button className={style.figure__button}>
            <p>Треугольник</p>
          </button>
        </li>
        <li className={style.figure__item}>
          <button className={style.figure__button}>
            <p>Прямоугольник</p>
          </button>
        </li>
        <li className={style.figure__item}>
          <button className={style.figure__button}>
            <p>Круг</p>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default FigureMenu;