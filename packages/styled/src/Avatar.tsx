import React from "react";
import styled from "@emotion/styled";

const AvatarTextNormalize = (label: string): string =>
  label
    .split(" ")
    .filter((i) => i.length > 0)
    .map((i) => i[0])
    .join("");

export type AvatarBaseProps = React.ClassAttributes<HTMLDivElement> &
  React.HTMLProps<HTMLDivElement> & {
    radius?: number;
    size?: number;
    color?: string;
    textColor?: string;
  };

const AvatarBase = styled.div<AvatarBaseProps>(
  ({ radius, size = 40, color, textColor = "white" }) => `
    --typography-color: ${textColor};
    background-color: ${color};
    width: ${size}px;
    height: ${size}px;
    border-radius: ${radius}px;
    // margin: ${size / 8}px;
    display: inline-flex;
    align-self: center;
    align-items: center;
    justify-content: center;
    overflow:hidden;
    user-select:none;
    svg{
        color:${textColor};
        font-size:${size / 2}px
    }
  `
);

export default AvatarBase;
