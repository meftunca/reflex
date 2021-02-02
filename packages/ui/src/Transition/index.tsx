/** @jsx jsx */
import { css, jsx, keyframes, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useMemo } from "react";
import Generator from "./Generator";

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
  `
    position: relative;
    display:none;
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
      animation: userDefinedAnimation,
      infinite = false,
      duration = 200,
      delay = 0,
      onStartIn,
      onStartOut,
      onEndIn,
      direction = "Top",
      effect = "Slide",
      onEndOut,

      ...rest
    },
    ref
  ) => {
    const theme = useTheme();
    const { in: restIn = true, ...props } = rest;
    const animation = useMemo(() => {
      if (userDefinedAnimation === undefined || restIn !== null) {
        return Generator[effect][direction || "default"];
      }
      return userDefinedAnimation;
    }, [effect, direction]);
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
              ${theme.transitions.easing.easeInOut}
              ${infinite ? "infinite" : ""};
            animation-delay: ${delay}ms;
          }
          &.out {
            animation: ${keyframes(animation && animation.out)} ${duration}ms
              ${theme.transitions.easing.easeInOut}
              ${infinite ? "infinite" : ""};
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
