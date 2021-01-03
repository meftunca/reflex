import React from "react";
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
    duration?: number | string;
    delay?: number | string;
    in?: boolean | null;
    onStartIn?: (e: any) => void;
    onEndIn?: (e: any) => void;
    onStartOut?: (e: any) => void;
    onEndOut?: (e: any) => void;
};
export declare type Ref = HTMLDivElement;
declare const Transition: React.FC<TransitionProps>;
export default Transition;
