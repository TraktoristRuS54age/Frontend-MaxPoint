/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable sort-imports */
import style from "../SlideBar/SlideBar.module.css";
import Slide from "../Slide/Slide";
import { Slide as TSlide } from "../../types/types";
import classNames from "classnames";
import { useContext, useEffect, useRef, useState } from "react";
import { PresentationContext } from "../../context/context";
import { RegisterDndItemFn } from "../../hooks/useDnD/useDragSlideList";
import delet from "../../resources/headerButton/delete_48.png";

interface SlideListProps {
  slide: TSlide;
  index: number;
  registerDndItem: RegisterDndItemFn;
}

const SlideList = (props: SlideListProps) => {
  const { slide, index, registerDndItem } = props;
  const { presentation, setPresentation } = useContext(PresentationContext);
  const newPresentation = { ...presentation };
  const currId = presentation.currentSlideID;
  const [slideID, setSlideID] = useState(slide.id);

  const setId = (id: string) => {
    // отменить выделение selectObjects если мы переместились на другой слайд
    const updatedSlides = newPresentation.slides.map((slide) =>
      slide.id === presentation.currentSlideID
        ? { ...slide, selectObjects: null }
        : slide,
    );
    newPresentation.slides = updatedSlides;
    newPresentation.currentSlideID = id;
    setPresentation(newPresentation);
    setSlideID(slide.id);
  };

  const removeSlide = (id: string) => {
    const newSlidesList = newPresentation.slides.filter(
      (slide) => slide.id !== id,
    );
    newPresentation.slides = newSlidesList;
    newPresentation.currentSlideID === id
      ? (newPresentation.currentSlideID = null)
      : newPresentation.currentSlideID;
    setPresentation(newPresentation);
    setSlideID(slide.id);
  };

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // TODO: эту логику перемещения можно вынести в отдельный компонент, div, который сможет отрисовывать в себе любой контент
    const { onDragStart } = registerDndItem(index, {
      elementRef: ref,
    });

    if (slide.id !== currId) {
      return;
    }
    const onMouseDown = (mouseDownEvent: MouseEvent) => {
      onDragStart({
        onDrag: (dragEvent) => {
          // TODO: можно вынести в стили и использовать как-то так ref.current!.classList.add(styles.dragging) либо через useState
          ref.current!.style.position = "relative";
          ref.current!.style.zIndex = "1";
          ref.current!.style.left = `${
            dragEvent.clientX - mouseDownEvent.clientX
          }px`;
        },
        onDrop: (dropEvent) => {
          ref.current!.style.position = "";
          ref.current!.style.zIndex = "";
          ref.current!.style.left = "";
          // console.log('Я в OnDrop')
          setId(slide.id);
        },
      });
    };
    const control = ref.current!;
    control.addEventListener("mousedown", onMouseDown);
    return () => control.removeEventListener("mousedown", onMouseDown);
  }, [index, registerDndItem]);

  return (
    <div className={style.wrapper} key={index} ref={ref}>
      <div
        className={
          slide.id === currId
            ? classNames(style.slide_block__wrapper, style.wrapper__current)
            : style.slide_block__wrapper
        }
        onClick={() => setId(slideID)}
      >
        <div className={style.visitor}>
          <Slide slide={slide} className={style.slide_block_slide} />
        </div>
      </div>
      <button
        className={style.slide_button}
        onClick={() => removeSlide(slideID)}
      >
        <img className={style.slide_button_img} src={delet} alt="удалить"></img>
      </button>
    </div>
  );
};

export default SlideList;
