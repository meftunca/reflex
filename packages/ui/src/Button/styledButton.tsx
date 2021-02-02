import styled from "@emotion/styled";
import { darken } from "color2k";
import { buttonVariables } from ".";
import { isObject } from "../utils/helpers/is";
import parseColor from "../utils/helpers/parseColor";
import { camelToKebabCase } from "../utils/helpers/stringFormat";
/* 
color: var(--btn-color);
    outline: var(--btn-outline);
    background-color: var(--btn-background-color);
    border: var(--btn-border);
    margin: var(--btn-margin);
    line-height: var(--btn-line-height);
    padding: var(--btn-padding);
    border-radius: var(--btn-border-radius);
    transform: var(--transform);
    transition: var(--btn-transition);
    box-shadow: var(--btn-box-shadow);
*/
const StyledButton = styled.button<{
  vars?: buttonVariables;
  colorDepth?: "light" | "main" | "dark";
  color?: string;
  variant?: "contained" | "outlined" | "text";
  size?: number;
}>(
  (props: any) => {
    let obj: any = {};
    Object.entries(isObject(props.vars) ? props.vars : {}).forEach(
      ([key, value]) => (obj[camelToKebabCase(key, "--btn-")] = value)
    );
    const colorDepth = props.colorDepth;
    const { color, isDark } = parseColor(props.color, props.theme, colorDepth);
    // if (typeof color === "string") {
    //   if (
    //     color.match(/(primary|secondary|info|error|warning|success)/g)
    //   ) {
    //     let depth = colorDepth || "main";
    //     color = props.theme.palette[color][depth];
    //   } else if (color.match(/(#|rgb|rgba|hsl|hsla)/g)) {
    //     color = color;
    //   } else {
    //     color = props.theme.palette.text.secondary;
    //   }
    // }
    // width
    if (props.fullWidth) {
      obj.width = "100%";
    }
    //size
    if (props.size && typeof props.size === "number") {
      obj["--btn-padding"] = `${props.size / 22}rem ${props.size / 12}rem`;
      obj["--btn-font-size"] = props.size / 16 + "rem";
      obj["--btn-border-radius"] = props.size / 40 + "rem";
      obj["svg "] = {
        fontSize: props.size + 2 + "px",
        width: props.size + 2 + "px",
        height: props.size + 2 + "px",
        "&:first-of-type": {
          marginRight: props.size / 16 + "rem",
        },
        "&:last-of-type": {
          marginLeft: props.size / 16 + "rem",
        },
      };
    }
    // variant
    if (props.variant === "text") {
      obj["--btn-color"] = color;
      obj["--btn-background-color"] = "transparent";
      obj["--btn-border"] = "none";
      obj["--btn-box-shadow"] = "none";
    } else if (props.variant === "outlined") {
      obj["--btn-color"] = color;
      obj["--btn-background-color"] = "transparent";
      obj["--btn-border-color"] = color;
      obj["--btn-box-shadow"] = "none";
    } else if (props.variant === "contained") {
      obj["--btn-background-color"] = color;
      obj["--btn-border-color"] = color
        ? colorDepth !== "light"
          ? "white"
          : "black"
        : "currentcolor";
      obj["--btn-color"] = color
        ? colorDepth !== "light"
          ? "white"
          : "black"
        : "currentcolor";
      obj["--btn-box-shadow"] = "none";
    }
    if (props.variant === "contained") {
      obj["--btn-active-background-color"] = darken(color || "#000000", 0.15);
    } else {
      obj["--btn-active-background-color"] = (color || "#000000") + "15";
    }
    return obj;
  },
  `
  span{
    --typography-font-size: var(--btn-font-size);
    --typography-color: var(--btn-color);
  }`
);
export default StyledButton;
