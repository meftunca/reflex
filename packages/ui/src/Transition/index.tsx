/** @jsx jsx */
import React from "react";
import styled from "@emotion/styled";
import { jsx, css, keyframes } from "@emotion/react";
import Generator from "./Generator";
import { useTheme } from "@emotion/react";

type animationObjectType = {
  [key: string]: number | string;
};
export type animationListType = {
  [key: string]: animationObjectType;
};
export type animationInOutType =
  | { from?: animationObjectType; to?: animationObjectType }
  | animationListType;
export type animationType = {
  in?: animationInOutType;
  out: animationInOutType;
};
export type TransitionProps = {
  animation?: animationType;
  infinite?: boolean;
  effect?: "Slide" | "Fade" | "Zoom";
  direction?: "Top" | "Left" | "Right" | "Up";
  //   list?: animationListType;
  duration?: number | string;
  delay?: number | string;
  in?: boolean | null;
  onStartIn?: (e: any) => void;
  onEndIn?: (e: any) => void;
  onStartOut?: (e: any) => void;
  onEndOut?: (e: any) => void;
};
export type Ref = HTMLDivElement;

const TransitionBase = styled.div(
  css`
    position: relative;
    display: none;
    &.in,
    &.out {
      display: inherit;
    }
  `,
  () => {
    let style = {};
    // style["--transition-name"] = name;
    return style;
  }
);

const Transition: React.FC<TransitionProps> = React.forwardRef<
  Ref,
  TransitionProps
>(
  (
    {
      children,
      animation,
      infinite = false,
      duration = 200,
      delay = 0,
      onStartIn,
      onStartOut,
      onEndIn,
      direction,
      effect = "Slide",
      onEndOut,
      ...rest
    },
    ref
  ) => {
    const theme = useTheme();
    const { in: restIn = true, ...props } = rest;
    if (animation === undefined && restIn !== null) {
      animation = Generator[effect][direction || "default"];
    }

    return (
      <TransitionBase
        {...props}
        ref={ref}
        className={
          theme.prefix +
          "-transitions " +
          (restIn === true ? "in" : restIn === false ? "out" : "")
        }
        css={css`
          &.in {
            animation: ${keyframes(animation && animation.in)} ${duration}ms
              ${theme.transitions.easing.easeIn} ${infinite ? "infinite" : ""};
            animation-delay: ${delay}ms;
          }
          &.out {
            animation: ${keyframes(animation && animation.out)} ${duration}ms
              ${theme.transitions.easing.easeOut} ${infinite ? "infinite" : ""};
            animation-delay: ${delay}ms;
          }
        `}
        onAnimationEnd={restIn ? onEndIn : onEndOut}
        onAnimationStart={restIn ? onStartIn : onStartOut}
      >
        {children}
      </TransitionBase>
    );
  }
);

export default Transition;
