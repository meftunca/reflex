import { sxType } from "./helpers/sx";
import { HTMLAttributes } from "react";
export declare type TextVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "overline" | "button";
export declare type TextTagList = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "caption";
export declare type TextProps = HTMLAttributes<HTMLElement> & {
    tag?: TextTagList;
    variant?: TextVariant;
    weight?: number | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "bold" | "semibold";
    size?: number | string;
    family?: string;
    align?: "left" | "center" | "right" | "justify";
    lineHeight?: number;
    colorDepth?: "light" | "main" | "dark";
    color?: "textPrimary" | "textSecondary" | "primary" | "secondary" | "error" | "warning" | "info" | "success" | string;
    vars?: {};
    gutter?: number | number[];
    sx?: sxType;
};
declare const Text: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: import("react").ElementType<any> | undefined;
} & HTMLAttributes<HTMLElement> & {
    tag?: TextTagList | undefined;
    variant?: TextVariant | undefined;
    weight?: number | "normal" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "bold" | "semibold" | undefined;
    size?: string | number | undefined;
    family?: string | undefined;
    align?: "left" | "right" | "center" | "justify" | undefined;
    lineHeight?: number | undefined;
    colorDepth?: "main" | "light" | "dark" | undefined;
    color?: string | undefined;
    vars?: {} | undefined;
    gutter?: number | number[] | undefined;
    sx?: sxType | undefined;
}, import("react").DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
export default Text;
