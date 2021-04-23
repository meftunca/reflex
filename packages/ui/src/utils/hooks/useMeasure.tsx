import { useLayoutEffect, useMemo, useState } from "react";

export type UseMeasureRect = Pick<
  DOMRectReadOnly,
  "x" | "y" | "top" | "left" | "right" | "bottom" | "height" | "width"
>;
export type UseMeasureRef<E extends HTMLElement = HTMLElement> = (
  element: E
) => void;
export type UseMeasureResult<E extends HTMLElement = HTMLElement> = [
  UseMeasureRef<E>,
  UseMeasureRect
];

const defaultState: UseMeasureRect = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
};

const useMeasure = <
  E extends HTMLElement = HTMLElement
>(): UseMeasureResult<E> => {
  const [element, ref] = useState<E | null>(null);
  const [rect, setRect] = useState<UseMeasureRect>(defaultState);

  const observer = useMemo(
    () =>
      new ResizeObserver((entries: any) => {
        if (entries[0]) {
          const {
            x,
            y,
            width,
            height,
            top,
            left,
            bottom,
            right,
          } = entries[0].contentRect;
          setRect({ x, y, width, height, top, left, bottom, right });
        }
      }),
    []
  );

  useLayoutEffect(() => {
    if (!element) return;
    observer.observe(element);
    return () => {
      observer.disconnect();
    };
  }, [element]);

  return [ref, rect];
};

export default useMeasure;
