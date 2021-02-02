import React from "react";
import { BoxProps } from "../Box";
declare type actionTypes = {
    open: (e: void) => void;
    close: (e: void) => void;
};
declare type DialogProps = {
    duration: number;
    radius: number;
    width: number;
    height: number;
    enableCloseIcon?: boolean;
    containerProps?: BoxProps;
    role: "dialog" | "drawer";
    drawerPosition: "left" | "right" | "top" | "bottom";
    header?: (props: any) => React.ReactNode;
    headerProps?: BoxProps;
    content?: (props: any) => React.ReactNode;
    contentProps?: BoxProps;
    footer?: (props: actionTypes) => React.ReactNode;
    footerProps?: BoxProps;
};
declare const Dialog: React.FC<DialogProps>;
export default Dialog;
