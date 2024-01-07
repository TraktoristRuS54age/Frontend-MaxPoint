import { RefObject, useCallback, useRef } from "react";

type DndItemInfo = {
  elementRef: RefObject<HTMLDivElement>;
  controlRef?: RefObject<HTMLDivElement>;
};

type RegisterDndItemFn = (
  index: number,
  dndItemInfo: DndItemInfo,
) => {
  onDragStart: OnDragStartFn;
};

type InternalDndItemInfo = DndItemInfo & {
  startX: number;
};

type UseDraggableListParams = {
  onOrderChange: (fromIndex: number, toIndex: number) => void;
};

type OnDragStartFn = (args: {
  onDrag: (event: MouseEvent) => void;
  onDrop?: (event: MouseEvent) => void;
}) => void;

const useDndList = ({ onOrderChange }: UseDraggableListParams) => {
  const itemsRef = useRef<Array<InternalDndItemInfo>>([]);

  const registerDndItem = useCallback(
    (index: number, dndItemInfo: DndItemInfo) => {
      const item = {
        ...dndItemInfo,
        startX: 0,
      };
      itemsRef.current[index] = item;
      if (
        itemsRef.current[itemsRef.current.length - 1].elementRef.current! ===
        null
      ) {
        itemsRef.current.pop();
      }

      const onDragStart: OnDragStartFn = ({ onDrag, onDrop }) => {
        item.startX = item.elementRef.current!.getBoundingClientRect().left;

        const onMouseUp = (event: MouseEvent) => {
          let newIndex = 0;
          const draggableItemLeft =
            item.elementRef.current!.getBoundingClientRect().left;
          for (let i = 0; i < itemsRef.current.length; ++i) {
            if (i === index) {
              continue;
            }
            const currItem = itemsRef.current[i].elementRef.current!;
            if (currItem.getBoundingClientRect().left > draggableItemLeft) {
              newIndex = draggableItemLeft > item.startX ? i - 1 : i;
              break;
            }
            newIndex = i;
          }
          onOrderChange(index, newIndex);
          onDrop!(event);

          window.removeEventListener("mousemove", onDrag);
          window.removeEventListener("mouseup", onMouseUp);
        };

        window.addEventListener("mousemove", onDrag);
        window.addEventListener("mouseup", onMouseUp);
      };

      return {
        onDragStart,
      };
    },
    [onOrderChange],
  );

  return {
    registerDndItem,
  };
};

export { useDndList };

export type { DndItemInfo, RegisterDndItemFn };
