import { useCallback } from "react";

type OnDragStartFn = (args: {
  onDrag: (event: MouseEvent) => void;
  onDrop: () => void;
}) => void;

const useDnDBlock = () => {
  const registerDndItem = useCallback(() => {
    const onChangePosition: OnDragStartFn = ({ onDrag, onDrop }) => {
      // item.startY = item.elementRef.current!.getBoundingClientRect().top;
      // item.startX = item.elementRef.current!.getBoundingClientRect().left;

      const onMouseUp = () => {
        onDrop();
        window.removeEventListener("mousemove", onDrag);
        window.removeEventListener("mouseup", onMouseUp);
      };

      window.addEventListener("mousemove", onDrag);
      window.addEventListener("mouseup", onMouseUp);
    };

    const onChangeSize: OnDragStartFn = ({ onDrag, onDrop }) => {
      // item.startY = item.elementRef.current!.getBoundingClientRect().top;
      // item.startX = item.elementRef.current!.getBoundingClientRect().left;

      const onMouseUp = () => {
        onDrop();
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
