import { useTheme } from "@emotion/react";
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from "react";
import StyledRipple from "@re-flex/styled/src/Ripple/Root";
export type onRipple = React.MouseEventHandler<HTMLElement> | undefined;

export type Props = {
  onLongPress?: () => void;
  longPressDelay?: number;
  color?: string;
};

const Ripple = forwardRef<{ onRipple: onRipple }, Props>(
  ({ color }, forwardableRef) => {
    const theme = useTheme();
    const ref = useRef<HTMLElement>(null);
    useImperativeHandle(
      forwardableRef,
      () => {
        return { onRipple };
      },
      [color]
    );

    const onRipple = (event: any) => {
      if (!ref.current) return;

      const attach: HTMLElement = ref.current;
      // animasyonu bildir
      requestAnimationFrame(() => {
        const self: HTMLElement = attach;
        const { left, top } = self.getBoundingClientRect();
        const x = event.clientX - left;
        const y = event.clientY - top;
        const rippleSize =
          self.clientWidth > self.clientHeight
            ? self.clientWidth
            : self.clientHeight;
        let span = document.createElement("span");
        span.id = "ripple" + Number(Date.now()).toString(32);
        span.className = `${theme.prefix}-ripples`;
        let style = {
          width: rippleSize * 2 + "px",
          height: rippleSize * 2 + "px",
          left: x - rippleSize + "px",
          top: y - rippleSize + "px",
        };
        Object.entries(style).forEach(
          ([key, value]) => (span.style[key] = value)
        );
        self.append(span);
        span.onanimationend = () => span.remove();
      });
    };

    return (
      <StyledRipple
        className={theme.prefix + "-ripple-container"}
        // onMouseDown={onRipple}
        ref={ref}
      ></StyledRipple>
    );
  }
);

export default Ripple;
