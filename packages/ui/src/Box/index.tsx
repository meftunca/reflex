import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { isObject } from "../utils/helpers/is";
import { boxMarginPaddingGenerator } from "../utils/helpers/stringFormat";

type overflowType =
  | "hidden"
  | "initial"
  | "inherit"
  | "visible"
  | "scroll"
  | "auto";
type overflowPlacementType = {
  x?: overflowType;
  y?: overflowType;
};
export type BoxProps = {
  theme?: any;
  className?: string | string[];
  overflow?: overflowType | overflowPlacementType;
  transition?: string;
  width?: string | number;
  height?: string | number;
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

// const sx = (props: BoxProps) => css(props.sx)(props.theme);

const StyledBox = styled.div((props: BoxProps) => {
  let obj: any = {};
  if (props.bgColor) {
    if (
      props.bgColor.match(/(primary|secondary|info|error|warning|success)/g)
    ) {
      obj["--box-background-color"] = props.theme.palette[props.bgColor].main;
    } else if (props.bgColor.match(/(paper|background)/g)) {
      obj["--box-background-color"] =
        props.theme.palette.background[props.bgColor];
    } else {
      obj["--box-background-color"] = props.bgColor;
    }
  }
  if (props.overflow)
    obj["--box-overflow"] = isObject(props.overflow)
      ? Object.values(props.overflow).join(" ")
      : props.overflow;
  if (props.transition) obj["--box-transition"] = props.transition;
  if (props.width) obj.width = props.width;
  if (props.height) obj.height = props.height;
  if (props.display) obj["--box-display"] = props.display;
  // if (props.bgColor) obj["--box-background-color"] = props.bgColor;
  // if (props.background) obj["--box-background"] = props.background;
  if (props.radius)
    obj["--box-border-radius"] = boxMarginPaddingGenerator(props.radius);
  if (props.color) obj["--box-color"] = props.color;
  if (props.shadow && props.theme.shadows) {
    obj["--box-shadow"] =
      typeof props.shadow === "number"
        ? props.theme.shadows[props.shadow]
        : props.shadow;
  }

  if (props.p || props.pt || props.pr || props.pb || props.pl) {
    if (props.p) {
      obj["--box-padding"] = boxMarginPaddingGenerator(props.p);
    } else {
      obj["--box-padding"] =
        boxMarginPaddingGenerator([props.pt, props.pr, props.pb, props.pl]) +
        " !important;";
    }
  }
  if (props.m || props.mt || props.mr || props.mb || props.ml) {
    if (props.m) {
      obj["--box-margin"] = boxMarginPaddingGenerator(props.m);
    } else {
      obj["--box-margin"] =
        boxMarginPaddingGenerator([props.mt, props.mr, props.mb, props.ml]) +
        " !important;";
    }
  }

  return obj;
});

const Box: React.FC<BoxProps> = ({ children, className, ...rest }) => {
  const theme = useTheme();
  return (
    <StyledBox
      className={[
        theme.prefix + "-box",
        Array.isArray(className) ? className.join(" ") : className,
      ].join(" ")}
      {...rest}
    >
      {children}
    </StyledBox>
  );
};

export default Box;
