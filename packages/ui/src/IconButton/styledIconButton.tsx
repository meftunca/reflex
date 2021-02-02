import { Theme, useTheme, withTheme } from "@emotion/react";
import styled from "@emotion/styled";
import { readableColorIsBlack } from "color2k";
import { buttonVariables } from "../Button";
import { isObject } from "../utils/helpers/is";
import { camelToKebabCase } from "../utils/helpers/stringFormat";

type Props = {
  theme: Theme;
  vars?: buttonVariables;
  colorDepth?: "light" | "main" | "dark";
  color?: string;
  variant?: "contained" | "outlined" | "text";
  size?: number;
};
const StyledButton = styled.button<Props>((props: Props) => {
  let {
    theme,
    // vars,
    color = "primary",
    colorDepth = "main",
    variant = "text",
    size = 30,
    // theme: { palette },
  } = props;
  const { palette } = useTheme();
  let obj: { [key: string]: any } = {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  };
  if (props && props.vars !== undefined && isObject(props.vars)) {
    Object.entries(props.vars).forEach(
      ([key, value]) => (obj[camelToKebabCase(key, "--btn-")] = value)
    );
  }

  if (color && variant !== "contained") {
    if (color.match(/(primary|secondary|info|error|warning|success)/g)) {
      let depth = colorDepth || "main";
      obj["--btn-color"] = palette[color][depth];
    } else {
      obj["--btn-color"] = color;
    }
  }
  //size
  if (size && typeof size === "number") {
    obj["--btn-padding"] = `${size / 3}px`;
    obj["--btn-border-radius"] = "50%";
    obj.width = size + size / 3 + "px";
    obj.height = size + size / 3 + "px";
    obj["svg"] = {
      fontSize: size + "px",
      width: size + "px",
      height: size + "px",
      margin: 0 + "px !important",
      padding: 0 + "px !important",
    };
  }
  // variant
  if (variant === "text") {
    obj["--btn-background-color"] = "transparent";
    obj["--btn-border"] = "none";
    obj["--btn-box-shadow"] = "none";
  } else if (variant === "outlined") {
    obj["--btn-background-color"] = "transparent";
    obj.borderColor = "var(--btn-color) !important";
    obj["--btn-box-shadow"] = "none";
  } else if (variant === "contained") {
    if (
      color &&
      color.match(/(primary|secondary|info|error|warning|success)/g)
    ) {
      let depth = colorDepth || "main";
      color = palette[color][depth];
    } else {
      color = palette.primary.main;
    }
    obj["--btn-background-color"] = color;
    obj["--btn-border"] = "none";
    obj["--btn-color"] = !readableColorIsBlack(color)
      ? palette.common.white
      : palette.common.black;
    obj["--btn-box-shadow"] = "none";
  }
  if (props.variant === "contained") {
    obj["--btn-active-background-color"] = color;
  } else {
    obj["--btn-active-background-color"] = (color || "#000000") + "15";
  }
  // Sub Class

  obj[`${props.theme.prefix}-typography`] = {
    "--typography-font-size": "var(--btn-font-size)",
    "--typography-color": "var(--btn-color) ",
  };

  return obj;
});
export default withTheme(StyledButton);
