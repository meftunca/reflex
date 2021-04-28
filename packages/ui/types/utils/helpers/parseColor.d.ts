import { Theme } from "@emotion/react";
declare type parseColorType = {
    isDark: boolean;
    color: string;
};
declare const parseColor: (color: string, theme: Theme, colorDepth?: "light" | "main" | "dark" | undefined) => parseColorType;
export default parseColor;
