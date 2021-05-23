import React from "react";
import { TextProps } from "../../Typography";
import { SXBaseProps } from "../../Styled/SX";
export declare type CardHeaderProps = SXBaseProps & {
    avatar?: React.ReactNode;
    title?: React.ReactNode;
    subtitle?: React.ReactNode;
    actions?: React.ReactNode;
    titleProps?: TextProps;
    subtitleProps?: TextProps;
};
declare const CardHeader: React.FC<CardHeaderProps>;
export default CardHeader;
