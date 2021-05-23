import React from "react";
export declare type AvatarBaseProps = React.ClassAttributes<HTMLDivElement> & React.HTMLProps<HTMLDivElement> & {
    radius?: number;
    size?: number;
    color?: string;
    textColor?: string;
};
declare const AvatarBase: import("@emotion/styled").StyledComponent<{
    theme?: import("@emotion/react").Theme | undefined;
    as?: React.ElementType<any> | undefined;
} & React.ClassAttributes<HTMLDivElement> & React.HTMLProps<HTMLDivElement> & {
    radius?: number | undefined;
    size?: number | undefined;
    color?: string | undefined;
    textColor?: string | undefined;
}, React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
export default AvatarBase;
