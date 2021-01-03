import React, { useState, useLayoutEffect } from "react";

type props = {
  axis?: "x" | "y";
  onSwipe?: (element: HTMLElement, x: number, y: number) => void;
  onSwipeEnd: (element: HTMLElement, x: number, y: number) => void;
};

const initialState = {
  startX: 0,
  startY: 0,
  endX: 0,
  endY: 0,
  isSwiping: false,
};

export type useSwipeableRef<E extends HTMLElement = HTMLElement> = (
  element: E
) => void;
export type useSwipeableResult<E extends HTMLElement = HTMLElement> = [
  useSwipeableRef<E>,
  E | undefined
];

const useSwipeable = <E extends HTMLElement>({
  axis = "x",
  onSwipe,
  onSwipeEnd,
}: props): useSwipeableResult<E> => {
  const [element, ref] = useState<E>();
  const [count, setCount] = useState(0);
  let state = React.useRef({ ...initialState }).current;
  const setState = (next: typeof state) => {
    state = Object.assign({}, state, next);
    setCount(count + 1);
  };

  const swipeStart = (e: TouchEvent | MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!element) return;
    if ("touches" in e) {
      const touch = e.touches[0];
      setState({
        ...state,
        startX: touch.screenX,
        startY: touch.screenY,
        isSwiping: true,
      });
      element.addEventListener("touchmove", onSwipeHandler);
    } else {
      console.log("e.screenX", e.screenX);
      setState({
        ...state,
        startX: e.screenX,
        startY: e.screenY,
        isSwiping: true,
      });
      element.addEventListener("mousemove", onSwipeHandler);
    }
  };
  const swipeEnd = (e: TouchEvent | MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!element) return;
    if ("touches" in e) {
      const touch = e.touches[0];
      setState({
        ...state,
        endX: touch.screenX,
        endY: touch.screenY,
        isSwiping: false,
      });
      element.removeEventListener("touchmove", onSwipeHandler);
      onSwipeEnd(
        element,
        state.startX - touch.screenX,
        state.startY - touch.screenY
      );
    } else {
      setState({
        ...state,
        endX: e.screenX,
        endY: e.screenY,
        isSwiping: false,
      });
      element.removeEventListener("mousemove", onSwipeHandler);
      onSwipeEnd(element, state.startX - e.screenX, state.startY - e.screenY);
    }
  };
  const onSwipeHandler = (e: TouchEvent | MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!element) return;
    if (state.startX === 0 || state.startY === 0) return;
    if ("touches" in e) {
      const touch = e.touches[0];
      if (onSwipe)
        onSwipe(
          element,
          state.startX - touch.screenX,
          state.startY - touch.screenY
        );
    } else {
      if (onSwipe)
        onSwipe(element, state.startX - e.screenX, state.startY - e.screenY);
    }
  };
  useLayoutEffect(() => {
    if (!element) return;
    //start
    element.addEventListener("touchstart", swipeStart);
    element.addEventListener("mousedown", swipeStart);

    //complete
    element.addEventListener("mouseup", swipeEnd);
    element.addEventListener("touchend", swipeEnd);

    return () => {
      element.removeEventListener("touchstart", swipeStart);
      element.removeEventListener("touchend", swipeEnd);
      element.removeEventListener("mousedown", swipeStart);
      element.removeEventListener("mouseup", swipeEnd);
    };
  }, [element]);

  return [ref, element];
};
export default useSwipeable;
