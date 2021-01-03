import React from "react";
declare type Props = {
    colorDepth?: "light" | "main" | "dark";
    size?: number;
    color?: "textPrimary" | "textSecondary" | "primary" | "secondary" | "error" | "warning" | "info" | "success" | string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};
declare const Checkbox: React.FC<Props>;
export default Checkbox;
