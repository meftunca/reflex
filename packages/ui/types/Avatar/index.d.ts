import React from "react";
import { TextVariant } from "../Typography";
declare type AvatarBaseProps = React.ClassAttributes<HTMLDivElement> & React.HTMLProps<HTMLDivElement> & {
    radius?: number;
    size?: number;
    color?: string;
    textColor?: string;
};
declare type AvatarProps = AvatarBaseProps & {
    label?: string;
    src?: string;
    textVariant?: TextVariant;
    icon?: React.ReactNode;
    showChar?: number;
    textColor?: string;
};
declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
