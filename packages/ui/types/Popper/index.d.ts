import React from "react";
import { BoxProps } from "../Box";
declare const Popper: React.FC<Props>;
export default Popper;
declare type Props = {
    duration?: number;
    disablePortal?: boolean;
    keepMounted?: boolean;
    modifiers?: object;
    open?: boolean;
    placement?: "bottom-end" | "bottom-start" | "bottom" | "left-end" | "left-start" | "left" | "right-end" | "right-start" | "right" | "top-end" | "top-start" | "top" | "auto" | "auto-start" | "auto-end" | undefined;
    popperOptions?: object;
    popperRef?: React.Ref<any>;
    style?: object;
    transition?: boolean;
    paperProps?: BoxProps;
    content?: React.ReactNode | string;
    onClickAway?: (event: MouseEvent | TouchEvent) => void;
};
