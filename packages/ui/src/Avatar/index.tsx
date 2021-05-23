import React from "react";
import Text, { TextVariant } from "@re-flex/styled/src/Typography";
import AvatarBase, { AvatarBaseProps } from "@re-flex/styled/src/Avatar";
const AvatarTextNormalize = (label: string): string =>
  label
    .split(" ")
    .filter((i) => i.length > 0)
    .map((i) => i[0])
    .join("");

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
