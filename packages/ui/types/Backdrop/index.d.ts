import React from "react";
import { sxType } from "../utils/theme/sx";
declare type BackdropProps = React.HTMLProps<HTMLDivElement> & {
    sx: sxType;
};
declare const Backdrop: React.FC<BackdropProps>;
export default Backdrop;
