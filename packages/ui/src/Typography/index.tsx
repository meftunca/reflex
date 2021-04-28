import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useMemo } from "react";
import getValueWithObjectPath from "../utils/helpers/getValueWithObjectPath";
import { isObject } from "../utils/helpers/is";
import { camelToKebabCase } from "../utils/helpers/stringFormat";
import sxPropGenerator, { sxType } from "../utils/theme/sx";
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
  sx?: sxType;
};

const Text: React.FC<TextProps> = ({ children, sx, ...props }) => {
  const theme = useTheme();
  const { typography, palette, prefix } = theme;
  const sxClass = useMemo(() => {
    return css(sxPropGenerator({ sx, theme }));
  }, [sx, theme]);
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
  let obj = { textOverflow: "clip", overflow: "hidden" };
  if (typography && typography.fontFamily === undefined)
    return (
      <p className={prefix + "-typography"} css={sxClass} {...rest}>
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
    if (color !== undefined) {
      if (color.includes(".")) {
        obj["--typography-color"] = getValueWithObjectPath(palette, color);
      } else {
        obj["--typography-color"] = color;
      }
    }
    if (weight !== undefined) {
      obj["--typography-font-weight"] = weight;
    }
    if (size !== undefined) {
      let fontSize = typeof size === "number" ? size + "px" : size;
      obj["--typography-font-size"] = fontSize;
    }
    if (family !== undefined) {
      obj["--typography-font-family"] = family;
    }
    if (align !== undefined) {
      obj["--typography-text-align"] = align;
    }
    if (lineHeight !== undefined) {
      obj["--typography-line-height"] = lineHeight;
    }
  }
  const StyledComp = styled(tag)(obj);
  return (
    <StyledComp
      className={[
        prefix + "-typography",
        Array.isArray(className) ? className.join(" ") : className,
      ].join(" ")}
      css={sxClass}
      {...rest}
    >
      {children}
    </StyledComp>
  );
};

export default Text;
