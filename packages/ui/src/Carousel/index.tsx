/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { memo, useCallback, useEffect, useMemo } from "react";
import Button from "../Button";
import { styled } from "../utils/theme/styled";
import useSwipeable from "./useSwipable";

const CarouselContainer = styled.div`
  transition: all 0s ease 0s;
  direction: ltr;
  width: 100%;
  min-width: 100%;
  flex: 1;
`;

const SliderInner = styled.div`
  --slide-translateX: 0;
  flex-shrink: 0;
  overflow: auto;
  display: flex;
  user-select: none;
  user-zoom: none;
  will-change: transform;
  transform: translate(var(--slide-translateX), 0px);
`;
const SlideItem = styled.div(() => ({ flex: 1, width: "100%" }));
export type Props = {
  axis?: "x" | "y";
  transition?: number;
  initialIndex?: number;
};

let onSwipe: (element: HTMLElement, x: number, y: number) => void | undefined;
let onSwipeEnd: (
  element: HTMLElement,
  x: number,
  y: number
) => void | undefined;
let index = 0;
const Carousel: React.FC<Props> = ({ children, initialIndex = 0 }) => {
  const countChild = React.Children.count(children);
  const [ref, container] = useSwipeable<HTMLDivElement>({
    onSwipe,
    onSwipeEnd,
  });

  useEffect(() => {
    if (container) goTo(initialIndex);
  }, [container, initialIndex]);

  const setPosition = (
    target: HTMLElement | HTMLDivElement,
    translateX: number
  ) => {
    if (target) {
      target.style.setProperty("--slide-translateX", translateX + "px");
    }
  };

  onSwipe = useCallback((element, swipeX: number, swipeY: number) => {
    if (element) {
      const cWidth = element.clientWidth / countChild;
      element.style.transitionDuration = "0ms";
      const translateX = Math.min(cWidth * -index - swipeX, 100);
      setPosition(element, translateX);
    }
  }, []);
  onSwipeEnd = useCallback((element, swipeX: number, swipeY: number) => {
    element.style.transitionDuration = "200ms";
    if (element) {
      const cWidth = element.clientWidth / countChild;
      if (Math.abs(swipeX) > 100) {
        let newIndex = index + (swipeX > 0 ? 1 : -1);
        newIndex =
          newIndex >= countChild ? 0 : newIndex < 0 ? countChild - 1 : newIndex;
        index = newIndex;
        const translateX = Math.min(cWidth * -newIndex, 0);
        setPosition(element, translateX);
      } else {
        const translateX = Math.min(cWidth * -index, 0);
        setPosition(element, translateX);
      }
    }
  }, []);

  const goTo = useCallback((defIndex: number) => {
    // Set the index to the next index or the first index
    if (container) {
      index = defIndex % (countChild - 1);
      const cWidth = container.clientWidth / countChild;
      const translateX = Math.min(cWidth * -defIndex, 0);
      setPosition(container, translateX);
    }
  }, []);

  const next = useCallback(() => {
    // Set the index to the next index or the first index
    const nextIndex = Math.min(index + 1, countChild - 1);
    index = nextIndex === countChild - 1 ? 0 : nextIndex;
    if (container) {
      const cWidth = container.clientWidth / countChild;
      const translateX = Math.min(cWidth * -index, 0);
      setPosition(container, translateX);
    }
  }, []);

  const prev = useCallback(() => {
    // Set the index to the prev index or the last index
    const prevIndex = Math.max(index - 1, 0);
    index = prevIndex || countChild - 1;
    if (container) {
      const cWidth = container.clientWidth / countChild;
      const translateX = Math.min(cWidth * -index, 0);
      setPosition(container, translateX);
    }
  }, []);

  const slideList = useMemo(() => {
    if (!container) return [];
    return React.Children.map(children, (el: any, i: number) => (
      <SlideItem key={i}>
        {React.cloneElement(el, {
          ...el.props,
          draggable: false,
        })}
      </SlideItem>
    ));
  }, [container]);
  return (
    <CarouselContainer>
      <SliderInner ref={ref} css={{ width: countChild + "00%" }}>
        {container && slideList}
      </SliderInner>

      <div>
        <Button onClick={prev}>Previous</Button>
        <Button onClick={next}>Next</Button>
      </div>
    </CarouselContainer>
  );
};

export default memo(Carousel);
