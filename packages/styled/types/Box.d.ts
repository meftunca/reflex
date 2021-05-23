import { sxType } from "./helpers/sx";
import { CSSObject } from "@emotion/react";
export declare type BoxProps = {
    theme?: any;
    className?: string | string[];
    overflow?: CSSObject["overflow"];
    transition?: string;
    width?: string | number;
    height?: string | number;
    sx?: sxType;
    pt?: number;
    pl?: number;
    pr?: number;
    pb?: number;
    p?: number | number[];
    mt?: number;
    ml?: number;
    mr?: number;
    mb?: number;
    m?: number | number[];
    radius?: number | number[];
    shadow?: number | string;
    color?: string;
    bgColor?: "paper" | "background" | "primary" | "secondary" | "error" | "warning" | "info" | "success" | string;
    display?: "flex" | "inline-flex" | "block" | "inline-block" | "grid" | "inline-grid";
    spacing?: number | number[];
    style?: {};
};
export declare const StyledBox: import("@emotion/styled").StyledComponent<import("react").ClassAttributes<HTMLElement> & import("react").HTMLAttributes<HTMLElement> & {
    sx?: sxType | undefined;
    as?: HTMLElementTagNameMap | undefined;
} & {
    children?: import("react").ReactNode;
} & {
    theme?: import("@emotion/react").Theme | undefined;
} & BoxProps, {}, {}>;
export default StyledBox;
