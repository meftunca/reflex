import React from "react";
import Ripple from "../Ripple";
declare type UIIconButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    onLongPress?: () => void;
    longPressDelay?: number;
    colorDepth?: "light" | "main" | "dark";
    icon?: React.ReactNode;
    size?: number;
    color?: "primary" | "secondary" | "error" | "warning" | "info" | "success" | string;
    variant?: "outlined" | "contained" | "text";
    ripple?: typeof Ripple.defaultProps | null;
    classname?: string | string[];
};
declare const IconButton: React.FC<UIIconButton>;
export default IconButton;
