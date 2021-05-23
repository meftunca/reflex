import { useTheme } from "@emotion/react";
import React from "react";
import { sxType } from "../utils/theme/sx";
import { CSSObject } from "@emotion/react";
import StyledBox from "@re-flex/styled/src/Box";
import clsx from "clsx";

export type BoxProps = {
  theme?: any;
  className?: string | string[];
  overflow?: CSSObject["overflow"];
  transition?: string;
  width?: string | number;
  height?: string | number;
  sx?: sxType;
  pt?: number;
  pl?: number;
  pr?: number;
  pb?: number;
  p?: number | number[];
  mt?: number;
  ml?: number;
  mr?: number;
  mb?: number;
  m?: number | number[];
  radius?: number | number[];
  shadow?: number | string;
  color?: string;
  bgColor?:
    | "paper"
    | "background"
    | "primary"
    | "secondary"
    | "error"
    | "warning"
    | "info"
    | "success"
    | string;
  display?:
    | "flex"
    | "inline-flex"
    | "block"
    | "inline-block"
    | "grid"
    | "inline-grid";
  spacing?: number | number[];
  style?: {};
  // sx?: object;
};

const Box: React.FC<BoxProps> = ({ children, className, ...rest }) => {
  const { prefix } = useTheme();

  return (
    <StyledBox className={clsx(prefix + "-box", className)} {...rest}>
      {children}
    </StyledBox>
  );
};

Box.displayName = "Box";

export default Box;
