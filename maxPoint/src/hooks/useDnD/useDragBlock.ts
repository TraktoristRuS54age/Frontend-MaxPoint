import { useCallback } from "react";

type OnDragStartFn = (args: { onDrag: (event: MouseEvent) => void }) => void;

const useDnDBlock = () => {
  const registerDndItem = useCallback(() => {
    const onChangePosition: OnDragStartFn = ({ onDrag }) => {
      // item.startY = item.elementRef.current!.getBoundingClientRect().top;
      // item.startX = item.elementRef.current!.getBoundingClientRect().left;

      const onMouseUp = () => {
        window.removeEventListener("mousemove", onDrag);
        window.removeEventListener("mouseup", onMouseUp);
      };
      window.addEventListener("mousemove", onDrag);
      window.addEventListener("mouseup", onMouseUp);
    };

    const onChangeSize: OnDragStartFn = ({ onDrag }) => {
      // item.startY = item.elementRef.current!.getBoundingClientRect().top;
      // item.startX = item.elementRef.current!.getBoundingClientRect().left;

      const onMouseUp = () => {
        window.removeEventListener("mousemove", onDrag);
        window.removeEventListener("mouseup", onMouseUp);
      };
      window.addEventListener("mousemove", onDrag);
      window.addEventListener("mouseup", onMouseUp);
    };

    return {
      onChangePosition,
      onChangeSize,
    };
  }, []);
  return {
    registerDndItem,
  };
};

export { useDnDBlock };
