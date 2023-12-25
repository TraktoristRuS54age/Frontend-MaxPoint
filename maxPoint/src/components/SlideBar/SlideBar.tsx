/* eslint-disable sort-keys */
/* eslint-disable sort-imports */
import style from "./SlideBar.module.css";
import Plus from "../../resources/img/plus.png";
import classNames from "classnames";
import SlideList from "../SlideList/SlideList";
import { useContext } from "react";
import { PresentationContext } from "../../context/context";
import { Slide as TSlide } from "../../types/types";
import { v4 as uuidv4 } from "uuid";
import { useDndList } from "../../hooks/useDnD/useDragSlideList";

function SlideBar() {
  const { presentation, setPresentation } = useContext(PresentationContext);
  const newPresentation = { ...presentation };


  const changeSlideOrder = (from: number, to: number) => {
    // console.log(from, to);
    const removed = newPresentation.slides.splice(from, 1);
    newPresentation.slides.splice(to, 0, removed[0]);
    setPresentation(newPresentation);
  };

  const { registerDndItem } = useDndList({
    onOrderChange: changeSlideOrder,
  });

  const createNewSlide = () => {
    const NewSlide: TSlide = {
      id: uuidv4(),
      name: `${uuidv4()}`,
      background: "#aaaaaa",
      selectObjects: null,
      objects: [],
    };
    newPresentation.slides.push(NewSlide);
    setPresentation(newPresentation);
  };

  return (
    <div className={style.slide_block}>
      <div className={style.slide_block_main__wrapper}>
        {presentation.slides.length > 0 ? (
          presentation.slides.map((slide, index) => (
            <SlideList
              key={index}
              slide={slide}
              index={index}
              registerDndItem={registerDndItem}
            />
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
              <img src={Plus} alt="plus" className={style.slide_block__img}/>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default SlideBar;
