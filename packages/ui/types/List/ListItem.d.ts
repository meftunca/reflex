import React, { CSSProperties } from "react";
import { Props as RippleProps } from "../Ripple";
export declare type Props = React.HTMLProps<HTMLElement> & {
    title: React.ReactNode;
    description?: React.ReactNode;
    colorDepth?: "light" | "main" | "dark";
    leftItem?: React.ReactNode;
    rightItem?: React.ReactNode;
    fullWidth?: boolean;
    size?: number;
    button?: boolean;
    color?: "primary" | "secondary" | "error" | "warning" | "info" | "success" | string;
    rippleProps?: RippleProps;
    className?: string | string[];
    style?: CSSProperties;
};
declare const ListItem: React.FC<Props>;
export default ListItem;
