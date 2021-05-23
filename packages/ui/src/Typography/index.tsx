import { useTheme } from "@emotion/react";
import React from "react";
import StyledText, { TextProps } from "@re-flex/styled/src/Typography";
import clsx from "clsx";

const Text: React.FC<TextProps> = ({ tag = "span", className, ...props }) => {
  const { prefix } = useTheme();
  return (
    <StyledText
      as={tag}
      className={clsx(prefix + "-typography", className)}
      {...props}
    />
  );
};

export default Text;
