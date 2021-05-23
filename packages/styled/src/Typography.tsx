import styled from "@emotion/styled";
import getValueWithObjectPath from "./helpers/getValueWithObjectPath";
import { isObject } from "./helpers/is";
import { camelToKebabCase } from "./helpers/stringFormat";
import sxPropGenerator, { sxType } from "./helpers/sx";
import { HTMLAttributes } from "react";
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
export type TextProps = HTMLAttributes<HTMLElement> & {
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

const Text = styled.span<TextProps>(
  ({
    sx = {},
    variant = "body1",
    vars = {},
    color = "",
    weight,
    size,
    family,
    align,
    lineHeight,
    gutter = 0,
    theme,
  }) => {
    const { typography, palette } = theme;
    const sxClass = sxPropGenerator({ sx, theme });

    let obj = { textOverflow: "clip", overflow: "hidden", ...sxClass };

    Object.entries(typography[variant]).forEach(
      ([key, value]) =>
        (obj[camelToKebabCase(key, "--typography-")] =
          key === "fontSize" && typeof value === "number"
            ? value + "px"
            : value)
    );
    obj["margin"] =
      (Array.isArray(gutter) ? gutter : [gutter]).join("px ") + "px";
    if (isObject(vars)) {
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
    return obj;
  }
);

export default Text;
