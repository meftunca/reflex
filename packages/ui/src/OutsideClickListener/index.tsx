import * as React from "react";

type MouseEvents = "click" | "mousedown" | "mouseup";
type TouchEvents = "touchstart" | "touchend";

type OutsideClickListenerProps = {
  onClickAway: (event: MouseEvent | TouchEvent) => void;
  mouseEvent?: MouseEvents;
  touchEvent?: TouchEvents;
};

type useOutsideClickListenerRef<E extends HTMLElement = HTMLElement> = (
  element: E
) => void;

const useOutsideClickListener = <E extends HTMLElement = HTMLElement>({
  onClickAway,
  mouseEvent = "click",
  touchEvent = "touchend",
}: OutsideClickListenerProps): useOutsideClickListenerRef<E> => {
  let [element, ref] = React.useState<E | null>(null);

  React.useEffect(() => {
    if (!element) return;
    const handleEvents = (event: MouseEvent | TouchEvent): void => {
      if (element && element.contains(event.target as Node)) {
        return;
      }

      onClickAway(event);
    };

    document.addEventListener(mouseEvent, handleEvents);
    document.addEventListener(touchEvent, handleEvents);

    return () => {
      document.removeEventListener(mouseEvent, handleEvents);
      document.removeEventListener(touchEvent, handleEvents);
    };
  }, [mouseEvent, onClickAway, touchEvent, element]);

  return ref;
};

const OutsideClickListener: React.FC<OutsideClickListenerProps> = ({
  onClickAway,
  mouseEvent = "click",
  touchEvent = "touchend",
  children,
  ...props
}) => {
  const node = useOutsideClickListener<HTMLDivElement>({
    onClickAway,
    mouseEvent,
    touchEvent,
  });

  return (
    <div {...props} ref={node}>
      {children}
    </div>
  );
};

export default OutsideClickListener;
