import { useTheme } from "@emotion/react";
import React, { useCallback, useRef } from "react";

export type Props = {
  onLongPress?: () => void;
  longPressDelay?: number;
  color?: string;
};

const Ripple: React.FC<Props> = ({}) => {
  const theme = useTheme();
  const ref = useRef<HTMLSpanElement>(null);
  const onRipple = useCallback((event) => {
    addRipple(event, event.currentTarget);
  }, []);

  return (
    <span
      className={theme.prefix + "-ripple-container"}
      onMouseDown={onRipple}
      ref={ref}
    ></span>
  );
};
function addRipple(event: MouseEvent, attach: HTMLSpanElement) {
  const self: HTMLSpanElement = attach;
  const { left, top } = self.getBoundingClientRect();
  const x = event.clientX - left;
  const y = event.clientY - top;
  const rippleSize =
    self.clientWidth > self.clientHeight ? self.clientWidth : self.clientHeight;
  let span = document.createElement("span");
  span.id = "ripple" + Date.now();
  span.className = "ripples";
  let style = {
    width: rippleSize + "px",
    height: rippleSize + "px",
    left: x - rippleSize / 2 + "px",
    top: y - rippleSize / 2 + "px",
    transform: "scale(1)",
    opacity: "0",
  };
  Object.entries(style).forEach(([key, value]) => (span.style[key] = value));
  span.style.animationDuration = 0.45 + "s";
  self.append(span);
  span.onanimationend = () => span.remove();
}

export default Ripple;
