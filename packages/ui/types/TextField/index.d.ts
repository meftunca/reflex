import * as React from "react";
declare type Props = HTMLInputElement & {
    variant?: "outlined" | "filled";
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    tag?: "div" | "input" | "textarea";
    size?: number;
    label?: string;
};
declare const TextField: React.FC<Props>;
export default TextField;
