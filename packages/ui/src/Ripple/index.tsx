import { useTheme } from "@emotion/react";
import React, { useCallback, useRef } from "react";

export type Props = {
  onLongPress?: () => void;
  longPressDelay?: number;
  color?: string;
};

const Ripple: React.FC<Props> = ({ color }) => {
  const theme = useTheme();
  const ref = useRef<HTMLSpanElement>(null);
  const onRipple = useCallback(
    (event) => {
      const attach: HTMLSpanElement = event.currentTarget;

      // animasyonu bildir
      requestAnimationFrame(() => {
        const self: HTMLSpanElement = attach;
        const { left, top } = self.getBoundingClientRect();
        const x = event.clientX - left;
        const y = event.clientY - top;
        const rippleSize =
          self.clientWidth > self.clientHeight
            ? self.clientWidth
            : self.clientHeight;
        let span = document.createElement("span");
        span.id = "ripple" + Number(Date.now()).toString(16);
        span.className = `${theme.prefix}-ripples`;
        let style = {
          width: rippleSize + "px",
          height: rippleSize + "px",
          left: x - rippleSize / 2 + "px",
          top: y - rippleSize / 2 + "px",
          transform: "scale(1.25)",
          opacity: "0",
        };
        Object.entries(style).forEach(
          ([key, value]) => (span.style[key] = value)
        );
        span.style.animationDuration =
          theme.transitions.duration.complex + 100 + "ms";
        self.append(span);
        span.onanimationend = () => span.remove();
      });
    },
    [color]
  );

  return (
    <span
      className={theme.prefix + "-ripple-container"}
      onMouseDown={onRipple}
      ref={ref}
    ></span>
  );
};

export default Ripple;
