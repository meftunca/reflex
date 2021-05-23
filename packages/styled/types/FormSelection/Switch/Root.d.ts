import React from "react";
declare const SwitchStyled: import("@emotion/styled").StyledComponent<any, React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {}>;
export declare type SwitchStyledProps = {
    colorDepth?: "light" | "main" | "dark";
    width?: number;
    height?: number;
    size?: number;
    color?: "textPrimary" | "textSecondary" | "primary" | "secondary" | "error" | "warning" | "info" | "success" | string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};
export default SwitchStyled;
