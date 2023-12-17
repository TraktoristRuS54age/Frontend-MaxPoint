/* eslint-disable sort-keys */
/* eslint-disable sort-imports */
import style from "./SlideBar.module.css";
import Slide from "../Slide/Slide";
import Plus from "../../resources/img/plus.png";
import classNames from "classnames";
import { useContext } from "react";
import { PresentationContext } from "../../context/context";
import { Slide as TSlide } from "../../types/types";
import { v4 as uuidv4 } from "uuid";

function SlideBar() {
  const { presentation, setPresentation } = useContext(PresentationContext);
  const newPresentation = { ...presentation };
  const currId = presentation.currentSlideID;
  const setId = (id: string) => {
    if (id === currId) {
      return;
    }
    newPresentation.currentSlideID = id;
    setPresentation(newPresentation);
  };
  const createNewSlide = () => {
    const NewSlide: TSlide = {
      id: uuidv4(),
      name: `${uuidv4()}`,
      background: '#aaaaaa',
      selectObjects: [],
      objects: []
    }
    newPresentation.slides.push(NewSlide);
    setPresentation(newPresentation)
  }
  return (
    <div className={style.slide_block}>
      <div className={style.slide_block_main__wrapper}>
        {presentation.slides.length > 0 ? (
          presentation.slides.map((slide, index) => (
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
          <div className={style.slide_block__wrapper} onClick={createNewSlide}>
            <div
              className={classNames(style.slide, style.slide_block_new_slide)}
            >
              <img src={Plus} alt="plus" className={style.slide_block__img} />
            </div>
          </div>
        )}
        {presentation.slides.length > 0 ? (
          <div className={style.slide_block__wrapper} onClick={createNewSlide}>
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
