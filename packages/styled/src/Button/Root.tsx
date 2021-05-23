import styled from "@emotion/styled";
import { darken, lighten, transparentize } from "color2k";
import { isObject } from "../helpers/is";
import isColorDark from "../helpers/isColorDark";
import getColor from "../helpers/getValueWithObjectPath";

export type ButtonRootProps = {
  colorDepth?: "light" | "main" | "dark";
  color?:
    | "common"
    | "primary"
    | "secondary"
    | "error"
    | "warning"
    | "info"
    | "success"
    | "grey"
    | "text"
    | "background"
    | "action"
    | string;
  variant?: "contained" | "outlined" | "text";
  size?: number;
  fullWidth?: boolean;
  rounded?: boolean;
};

const StyledButton = styled.button<ButtonRootProps>(
  ({
    color: userDefinedColor = "primary",
    colorDepth = "main",
    variant = "text",
    size = 1.5,
    fullWidth,
    rounded,
    theme: {
      prefix,
      palette,
      shadows,
      space: ThemeSpace,
      transitions: { duration, easing },
    },
  }) => {
    const transitionTiming = `${duration.leavingScreen}ms ${easing.easeInOut}`;
    const isTemplateColor = ["#", "rgb"].some((a) =>
      userDefinedColor.includes(a)
    )
      ? userDefinedColor
      : getColor(palette, userDefinedColor, palette.primary[colorDepth]);
    const color = !!isTemplateColor
      ? typeof isTemplateColor === "string"
        ? isTemplateColor
        : isObject(isTemplateColor)
        ? isTemplateColor[colorDepth]
        : isTemplateColor
      : palette.primary[colorDepth];
    const colorIsDark = isColorDark(color);

    let space = ThemeSpace * size;
    let paddingVertical = space;
    let fontSize = space * 1.25;

    return `
      outline: none;
      --webkit-tap-highlight-color: var(--typography-color);
      color: ${
        variant === "contained"
          ? colorIsDark
            ? palette.common.white
            : palette.common.black
          : color
      };
      position: relative;
      user-select: none;
      cursor: pointer;
      display: inline-flex;
      white-space: nowrap;
      text-decoration: none;
      vertical-align: baseline;
      text-align: center;
      overflow: hidden;
      text-align: center;
      align-items: center;
      justify-content: center;
      width: ${fullWidth ? "100%" : "auto"};

      background-color: ${variant === "contained" ? color : "transparent"};
      border: 1px solid ${variant !== "outlined" ? "transparent" : color};
      line-height: normal;
      padding: ${paddingVertical}px 16px;
      border-radius: ${rounded ? space * 3 : space / 2}px;
      transition: all ${transitionTiming};
      box-shadow: ${variant === "contained" ? shadows[1] : "none"};

      &:hover {
        background-color: ${
          variant === "contained"
            ? darken(color, 0.04)
            : transparentize(color, 0.925)
        };
      }
      &:focus {
        background-color: ${
          variant === "contained"
            ? darken(color, 0.125)
            : transparentize(color, 0.9)
        };
      }
      &:active {
        background-color: ${
          variant === "contained"
            ? darken(color, 0.1)
            : transparentize(color, 0.875)
        };
      }


    `;
  }
);
export default StyledButton;
