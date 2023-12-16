/* eslint-disable sort-imports */
import style from "./SlideBar.module.css";
import Slide from "../Slide/Slide";
import Plus from "../../resources/img/plus.png";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { allData } from "../../redux/slide/selectors";
import { useAppDispatch } from "../../redux/store";
import { setNewCurentSlideID } from "../../redux/slide/slice";

function SlideBar() {
  const dispatch = useAppDispatch();
  const data = useSelector(allData);
  const currId = data.currentSlideID;
  const setId = (id: string) => {
    if (id === currId) {
      return;
    }
    dispatch(setNewCurentSlideID(id))
  }
  return (
    <div className={style.slide_block}>
      <div className={style.slide_block_main__wrapper}>
        {data.slides.length > 0 ? (
          data.slides.map((slide, index) => (
            <div
              key={index}
              className={
                slide.id === currId
                  ? classNames(
                      style.slide_block__wrapper,
                      style.wrapper__current,
                    )
                  : style.slide_block__wrapper
              }
              onClick={() => setId(slide.id)}
            >
              <div className={style.visitor}>
                <Slide slide={slide} className={style.slide_block_slide} />
              </div>
            </div>
          ))
        ) : (
          <div className={style.slide_block__wrapper}>
            <div
              className={classNames(style.slide, style.slide_block_new_slide)}
            >
              <img src={Plus} alt="plus" className={style.slide_block__img} />
            </div>
          </div>
        )}
        {data.slides.length > 0 ? (
          <div className={style.slide_block__wrapper}>
            <div
              className={classNames(
                style.slide,
                style.slide_block_new_slide,
                style.slide_block_new_slide_small,
              )}
            >
              <img src={Plus} alt="plus" className={style.slide_block__img} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default SlideBar;
