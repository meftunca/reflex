import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { isObject } from "../utils/helpers/is";
import { camelToKebabCase } from "../utils/helpers/stringFormat";
export type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "caption"
  | "overline"
  | "button";
export type TextTagList =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "caption";
export type TextProps = {
  className?: string | string[];
  tag?: TextTagList;
  variant?: TextVariant;
  weight?:
    | number
    | "normal"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "bold"
    | "semibold";
  size?: number | string;
  family?: string;
  align?: "left" | "center" | "right" | "justify";
  lineHeight?: number;
  colorDepth?: "light" | "main" | "dark";
  color?:
    | "textPrimary"
    | "textSecondary"
    | "primary"
    | "secondary"
    | "error"
    | "warning"
    | "info"
    | "success"
    | string;
  vars?: {};
  gutter?: number | number[];
};

const Text: React.FC<TextProps> = ({ children, ...props }) => {
  const { typography, palette, prefix } = useTheme();
  const {
    className,
    tag = "h2",
    variant = "body1",
    vars = {},
    color,
    colorDepth = "main",
    weight,
    size,
    family,
    align,
    lineHeight,
    gutter = 0,
    ...rest
  } = props;
  let obj = {};
  let variabless = {};
  if (typography && typography.fontFamily === undefined)
    return (
      <p className={prefix + "-typography"} {...rest}>
        {children}
      </p>
    );
  Object.entries(typography[variant]).forEach(
    ([key, value]) =>
      (obj[camelToKebabCase(key, "--typography-")] =
        key === "fontSize" && typeof value === "number" ? value + "px" : value)
  );
  obj["margin"] =
    (Array.isArray(gutter) ? gutter : [gutter]).join("px ") + "px";
  if (isObject(props)) {
    Object.entries(vars).forEach(
      ([key, value]) => (obj[camelToKebabCase(key, "--typography-")] = value)
    );
    // palette.primary.main
    if (color) {
      obj["--typography-color"] = color.match(/(textPrimary|textSecondary)/g)
        ? palette.text[color.replace("text", "").toLowerCase()]
        : color.match(/(primary|secondary|error|warning|info|success)/gim)
        ? palette[color][colorDepth]
        : color;
    }
    if (weight) obj["--typography-font-weight"] = weight;
    if (size)
      obj["--typography-font-size"] =
        typeof size === "number" ? size + "px" : size;
    if (family) obj["--typography-font-family"] = family;
    if (align) obj["--typography-text-align"] = align;
    if (lineHeight) obj["--typography-line-height"] = lineHeight;
  }
  const StyledComp = styled(tag)(variabless, obj);
  return (
    <StyledComp
      className={[
        prefix + "-typography",
        Array.isArray(className) ? className.join(" ") : className,
      ].join(" ")}
      {...rest}
    >
      {children}
    </StyledComp>
  );
};

export default Text;
