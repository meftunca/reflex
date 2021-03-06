import React from "react";
import { BoxProps } from "../Box";
export declare type InputProps = BoxProps & {
    fieldProps?: BoxProps;
    variant?: "outlined" | "filled";
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    tag?: "div" | "input" | "textarea" | "button";
    size?: number;
    label?: string;
    readOnly?: boolean;
    disabled?: boolean;
    value?: string | number | boolean;
    onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
    inputProps?: HTMLInputElement;
    htmlFor?: string;
    wrapperClassName: string;
    fullWidth: boolean;
};
declare const TextField: React.FC<InputProps>;
export default TextField;
