import React from "react";
import { BoxProps } from "../Box";
declare type SubComponents = {
    Action: React.ReactNode;
};
declare type Props = BoxProps & {
    index: number;
    onChangeIndex: (activeIndex: number) => void;
};
declare const BottomNavigation: React.FC<Props> & SubComponents;
export default BottomNavigation;
