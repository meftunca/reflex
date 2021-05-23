import React from "react";
import { TextVariant } from "@re-flex/styled/src/Typography";
import { AvatarBaseProps } from "@re-flex/styled/src/Avatar";
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
