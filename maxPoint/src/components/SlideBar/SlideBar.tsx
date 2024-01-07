import Plus from "../../resources/img/plus.png";
import SlideList from "../SlideList/SlideList";
import classNames from "classnames";
import style from "./SlideBar.module.css";
import { useAppActions } from "../../redux/Actions/Actions";
import { useAppSelector } from "../../redux/Reducer";
import { useDndList } from "../../hooks/useDnD/useDragSlideList";
import { v4 as uuidv4 } from "uuid";

function SlideBar() {
  const slides = useAppSelector((state) => state.slides);
  const current = useAppSelector((state) => state.currentSlideID);
  const { createNewSlide, changeOrder } = useAppActions();
  const changeSlideOrder = (from: number, to: number) => {
    changeOrder(from, to);
  };

  const { registerDndItem } = useDndList({
    onOrderChange: changeSlideOrder,
  });

  const newSlide = () => {
    return {
      background: "#aaaaaa",
      id: uuidv4(),
      name: `${uuidv4()}`,
      objects: [],
      selectObjects: null,
    };
  };

  return (
    <div className={style.slide_block}>
      <div className={style.slide_block_main__wrapper} id="slides">
        {slides.length > 0 ? (
          slides.map((slide, index) => (
            <SlideList
              key={index}
              slide={slide}
              current={current}
              index={index}
              registerDndItem={registerDndItem}
            />
          ))
        ) : (
          <div
            className={style.slide_block__wrapper}
            onClick={() => createNewSlide(newSlide())}
          >
            <div
              className={classNames(style.slide, style.slide_block_new_slide)}
            >
              <img src={Plus} alt="plus" className={style.slide_block__img} />
            </div>
          </div>
        )}
        {slides.length > 0 ? (
          <div
            className={style.slide_block__wrapper}
            onClick={() => createNewSlide(newSlide())}
          >
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
