import React from "react";
import { Props as RippleProps } from "../Ripple";
export interface Props {
    title: string | React.ReactNode;
    description?: string | React.ReactNode;
    colorDepth?: "light" | "main" | "dark";
    leftItem?: React.ReactNode;
    rightItem?: React.ReactNode;
    fullWidth?: boolean;
    size?: number;
    button?: boolean;
    color?: "primary" | "secondary" | "error" | "warning" | "info" | "success" | string;
    rippleProps?: RippleProps;
    className?: string | string[];
}
declare const ListItem: React.FC<Props>;
export default ListItem;
