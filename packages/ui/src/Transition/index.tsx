/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React, { CSSProperties, useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useRef } from "react";

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
  defaultStyle: CSSProperties;
  from: CSSProperties;
  to: CSSProperties;
  //   list?: animationListType;
  duration?: number | string;
  delay?: number | string;
  in?: boolean | null;
  onStart?: (...e: any) => void;
  onEnter?: (...e: any) => void;
  onLeave?: (...e: any) => void;
  onEnd?: (...e: any) => void;
  onCancel?: (...e: any) => void;
  children?: React.ReactNode;
};
export type Ref = HTMLDivElement;

const Transition: React.FC<TransitionProps> = ({
  defaultStyle = {},
  in: isActive,
  from = {},
  to = {},
  onStart,
  onCancel = () => console.log("cancelled"),
  onEnter,
  onLeave,
  onEnd,
  duration = 200,
  children,
  delay = 0,

  ...otherProps
}) => {
  const [style, setStyle] = useState({});
  const [state, setState] = useState<
    "entered" | "entering" | "exited" | "exiting"
  >("exited");
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.ontransitioncancel = cancelTransition;
      element.ontransitionstart = startTransition;
      element.ontransitionend = endTransition;
      element.ontransitionrun = runTransition;
      const style = isActive ? to : from;
      setStyle({ ...style });
    }
  }, [ref.current, isActive]);

  const cancelTransition = useCallback(
    (...rest) => {
      if (onCancel) {
        onCancel(...rest);
      }
      if (onEnd) onEnd(...rest);
      setState("exiting");
    },
    [isActive]
  );
  const startTransition = useCallback(
    (...rest) => {
      if (onStart) onStart(onStart);
    },
    [isActive]
  );
  const endTransition = useCallback(
    (...rest) => {
      if (onEnd) onEnd(...rest);
      setState(isActive ? "entered" : "exited");
    },
    [isActive]
  );
  const runTransition = useCallback(
    (...rest) => {
      if (isActive === false) {
        if (onLeave) onLeave(...rest);
        setState("exiting");
      } else {
        if (onEnter) onEnter(...rest);
        setState("entering");
      }
    },
    [isActive]
  );

  return (
    <div
      {...otherProps}
      style={Object.assign({}, defaultStyle, style)}
      css={css`
        transition: all ${duration}ms linear;
        will-change: transform;
      `}
      ref={ref}
    >
      {children}
    </div>
  );
};

export default Transition;
