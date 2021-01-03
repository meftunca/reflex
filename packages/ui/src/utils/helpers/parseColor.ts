import { readableColorIsBlack } from "color2k";
import Theme from "../theme/Types";

type parseColorType = { isDark: boolean; color: string };

const parseColor = (
  color: string,
  theme: Theme,
  colorDepth?: "main" | "light" | "dark"
): parseColorType => {
  if (typeof color === "string") {
    if (color.match(/(primary|secondary|info|error|warning|success)/g)) {
      let depth = colorDepth || "main";
      color = theme.palette[color][depth];
    } else if (color.match(/(#|rgb|rgba|hsl|hsla)/g)) {
      color = color;
    } else {
      color = theme.palette.text.secondary;
    }
  }
  return {
    isDark: !readableColorIsBlack(color || "transparent"),
    color,
  };
};

export default parseColor;
