import React from "react";
declare const CheckboxStyled: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any> | undefined;
} & {
    size?: string | number | undefined;
}, React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>, {}>;
export declare type CheckboxStyledProps = {
    colorDepth?: "light" | "main" | "dark";
    size?: number;
    color?: "textPrimary" | "textSecondary" | "primary" | "secondary" | "error" | "warning" | "info" | "success" | string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};
export default CheckboxStyled;
