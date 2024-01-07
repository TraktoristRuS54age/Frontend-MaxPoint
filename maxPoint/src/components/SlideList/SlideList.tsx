import { useEffect, useRef, useState } from "react";
import { RegisterDndItemFn } from "../../hooks/useDnD/useDragSlideList";
import Slide from "../Slide/Slide";
import { Slide as TSlide } from "../../types/types";
import classNames from "classnames";
import delet from "../../resources/headerButton/delete_48.png";
import style from "../SlideBar/SlideBar.module.css";
import { useAppActions } from "../../redux/Actions/Actions";

interface SlideListProps {
  slide: TSlide;
  current: string | null;
  index: number;
  registerDndItem: RegisterDndItemFn;
}

const SlideList = (props: SlideListProps) => {
  const { setId, removeSlide } = useAppActions();
  const { slide, current, index, registerDndItem } = props;
  const [slideID, setSlideID] = useState(slide.id);
  const [removed, setRemoved] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // TODO: эту логику перемещения можно вынести в отдельный компонент, div, который сможет отрисовывать в себе любой контент
    const { onDragStart } = registerDndItem(index, {
      elementRef: ref,
    });

    // if (slide.id !== presentation.currentSlideID) {
    //   return;
    // }
    const onMouseDown = (mouseDownEvent: MouseEvent) => {
      if (slide.id !== current && slide.id !== removed) {
        setId(slide.id);
        setSlideID(slide.id);
        return;
      }
      onDragStart({
        onDrag: (dragEvent) => {
          // TODO: можно вынести в стили и использовать как-то так ref.current!.classList.add(styles.dragging) либо через useState
          ref.current!.style.position = "relative";
          ref.current!.style.zIndex = "1";
          ref.current!.style.left = `${
            dragEvent.clientX - mouseDownEvent.clientX
          }px`;
        },
        onDrop: () => {
          ref.current!.style.position = "";
          ref.current!.style.zIndex = "";
          ref.current!.style.left = "";
          setId(slide.id);
          setSlideID(slide.id);
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
          slide.id === current
            ? classNames(style.slide_block__wrapper, style.wrapper__current)
            : style.slide_block__wrapper
        }
      >
        <div className={style.visitor}>
          <Slide slide={slide} className={style.slide_block_slide} />
        </div>
      </div>
      <button
        className={style.slide_button}
        onClick={() => {
          removeSlide(slideID);
          setRemoved(slideID);
          setSlideID(slide.id);
        }}
      >
        <img className={style.slide_button_img} src={delet} alt="удалить"></img>
      </button>
    </div>
  );
};

export default SlideList;
