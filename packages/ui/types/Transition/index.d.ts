import React, { CSSProperties } from "react";
declare type animationObjectType = {
    [key: string]: number | string;
};
export declare type animationListType = {
    [key: string]: animationObjectType;
};
export declare type animationInOutType = {
    from?: animationObjectType;
    to?: animationObjectType;
} | animationListType;
export declare type animationType = {
    in?: animationInOutType;
    out: animationInOutType;
};
export declare type TransitionProps = {
    animation?: animationType;
    infinite?: boolean;
    effect?: "Slide" | "Fade" | "Zoom";
    direction?: "Top" | "Left" | "Right" | "Up";
    defaultStyle: CSSProperties;
    from: CSSProperties;
    to: CSSProperties;
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
export declare type Ref = HTMLDivElement;
declare const Transition: React.FC<TransitionProps>;
export default Transition;
