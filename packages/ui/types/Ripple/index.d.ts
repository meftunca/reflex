import React from "react";
export declare type onRipple = React.MouseEventHandler<HTMLElement> | undefined;
export declare type Props = {
    onLongPress?: () => void;
    longPressDelay?: number;
    color?: string;
};
declare const Ripple: React.ForwardRefExoticComponent<Props & React.RefAttributes<{
    onRipple: onRipple;
}>>;
export default Ripple;
