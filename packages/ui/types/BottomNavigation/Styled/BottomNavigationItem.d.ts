import React from "react";
import { Props as ButtonProps } from "../../Button";
declare type Props = ButtonProps & {
    icon?: React.ReactNode;
    noLabel?: boolean;
    label?: string | number;
    direction?: "column" | "column-reverse" | "row" | "row-reverse";
    role?: "tab" | "bottom-navigation";
    activeColor?: ButtonProps["color"];
    passiveColor?: ButtonProps["color"];
    active: boolean;
};
declare const BottomNavigationItem: React.FC<Props>;
export default BottomNavigationItem;
