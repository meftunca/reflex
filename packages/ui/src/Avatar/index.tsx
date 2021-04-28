/** @jsx jsx */
import { jsx } from "@emotion/react";
import React from "react";
import styled from "@emotion/styled";
import Text, { TextVariant } from "../Typography";
import { readableColorIsBlack } from "color2k";

const AvatarTextNormalize = (label: string): string =>
  label
    .split(" ")
    .filter((i) => i.length > 0)
    .map((i) => i[0])
    .join("");

type AvatarBaseProps = React.ClassAttributes<HTMLDivElement> &
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

type AvatarProps = AvatarBaseProps & {
  label?: string;
  src?: string;
  textVariant?: TextVariant;
  icon?: React.ReactNode;
  showChar?: number;
  textColor?: string;
};
const Avatar: React.FC<AvatarProps> = ({
  label = "",
  radius,
  size = 30,
  color = "#309BFF",
  textColor = "#ffffff",
  src,
  icon,
  textVariant = "body1",
  showChar = 2,
}) => {
  radius = radius || size / 2;
  return (
    <AvatarBase radius={radius} color={color} size={size} textColor={textColor}>
      {src ? (
        <img alt={label} src={src} width={size} height={size} />
      ) : label ? (
        <Text
          variant={textVariant}
          tag="span"
          size={(size * 2) / 5}
          lineHeight={1}
        >
          {AvatarTextNormalize(label).substr(0, showChar)}
        </Text>
      ) : icon ? (
        icon
      ) : null}
    </AvatarBase>
  );
};

export default Avatar;
