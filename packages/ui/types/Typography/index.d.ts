import React from "react";
export declare type TextVariant = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "caption" | "overline" | "button";
export declare type TextTagList = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "caption";
export declare type TextProps = {
    className?: string | string[];
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
};
declare const Text: React.FC<TextProps>;
export default Text;
