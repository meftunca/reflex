import styled from "@emotion/styled";
import { sxType } from "./helpers/sx";
import { isObject } from "./helpers/is";
import { boxMarginPaddingGenerator } from "./helpers/stringFormat";
import { CSSObject } from "@emotion/react";
import SXBase from "@re-flex/styled/src/SX";
type overflowType =
  | "hidden"
  | "initial"
  | "inherit"
  | "visible"
  | "scroll"
  | "auto";

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

export const StyledBox = styled(SXBase)((props: BoxProps) => {
  const { shadows, transitions } = props.theme;
  let obj: CSSObject = {
    overflow: "hidden",
    margin: 0,
    padding: 0,
    display: "block",
    backgroundColor: "transparent",
    borderRadius: 0,
    shadow: `0 0 10px 0 ${shadows[0]}`,
    color: `var(--typography-color)`,
    width: "100%",
    transition: `all ${transitions.duration.enteringScreen}
        ${transitions.easing.easeInOut}`,
    position: "relative",
  };
  if (props.bgColor) {
    if (
      props.bgColor.match(/(primary|secondary|info|error|warning|success)/g)
    ) {
      obj.backgroundColor = props.theme.palette[props.bgColor].main;
    } else if (props.bgColor.match(/(paper|background)/g)) {
      obj.backgroundColor = props.theme.palette.background[props.bgColor];
    } else {
      obj.backgroundColor = props.bgColor;
    }
  }
  if (props.overflow)
    obj.overflow = isObject(props.overflow)
      ? Object.values(props.overflow).join(" ")
      : props.overflow;
  if (props.transition) obj["--box-transition"] = props.transition;
  if (props.width) obj.width = props.width;
  if (props.height) obj.height = props.height;
  if (props.display) obj.display = props.display;
  // if (props.bgColor) obj["--box-background-color"] = props.bgColor;
  // if (props.background) obj["--box-background"] = props.background;
  if (props.radius) obj.borderRadius = boxMarginPaddingGenerator(props.radius);
  if (props.color) obj.color = props.color;
  if (props.shadow && props.theme.shadows) {
    obj.boxShadow =
      typeof props.shadow === "number"
        ? props.theme.shadows[props.shadow]
        : props.shadow;
  }

  if (props.p || props.pt || props.pr || props.pb || props.pl) {
    if (props.p) {
      obj.padding = boxMarginPaddingGenerator(props.p);
    } else {
      obj.padding =
        boxMarginPaddingGenerator([props.pt, props.pr, props.pb, props.pl]) +
        " !important;";
    }
  }
  if (props.m || props.mt || props.mr || props.mb || props.ml) {
    if (props.m) {
      obj.margin = boxMarginPaddingGenerator(props.m);
    } else {
      obj.margin =
        boxMarginPaddingGenerator([props.mt, props.mr, props.mb, props.ml]) +
        " !important;";
    }
  }

  return obj;
});

export default StyledBox;
