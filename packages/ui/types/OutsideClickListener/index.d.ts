import * as React from "react";
declare type MouseEvents = "click" | "mousedown" | "mouseup";
declare type TouchEvents = "touchstart" | "touchend";
declare type OutsideClickListenerProps = {
    onClickAway: (event: MouseEvent | TouchEvent) => void;
    mouseEvent?: MouseEvents;
    touchEvent?: TouchEvents;
};
declare const OutsideClickListener: React.FC<OutsideClickListenerProps>;
export default OutsideClickListener;
