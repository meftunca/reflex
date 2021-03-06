import { lighten } from "color2k";
import SXBase from "@re-flex/styled/src/SX";
import { css, styled } from "../../utils/theme/styled";

type Props = {
  variant: "contained" | "text" | "outlined";
  colorDepth?: "light" | "main" | "dark";
  size?: number;
  button?: boolean;
  color?:
    | "primary"
    | "secondary"
    | "error"
    | "warning"
    | "info"
    | "success"
    | string;
};

const Base = styled(SXBase)(`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    position: relative;
    --hover-bgcolor: rgba(0, 0, 0, 0.05);

    &:hover,
    &:active,
    &:focus {
      background-color: var(--hover-bgcolor);
    }
  `);

const StyledListItem = styled(Base)<Props>(
  ({ theme: { prefix, palette, transitions, space }, ...props }) => {
    const transitionTiming = `${transitions.duration.shorter}ms ${transitions.easing.easeInOut}`;
    let obj: any = {
      cursor: props.button ? "pointer" : "inherit",
      transitionTiming: `all ${transitionTiming}`,
      padding: `${space * 1.5}px ${space * 2}px`,
      fontSize: "var(--list-item-font-size)",
      backgroundColor: "var(--list-item-background-color)",
      "& > svg": {
        fontSize: `${space * 3}px`,
      },
    };

    if (props.color && props.variant !== "contained") {
      if (
        props.color.match(/(primary|secondary|info|error|warning|success)/g)
      ) {
        let depth = props.colorDepth || "main";
        obj["color"] = palette[props.color][depth];
      } else {
        obj["color"] = props.color;
      }
    }
    if (obj["color"]) {
      obj["--typography-color"] = obj["color"];
      obj["--hover-bgcolor"] = lighten(obj["color"], 0.95);
    }
    // width
    obj.width = "100%";
    //size
    if (props.size && typeof props.size === "number") {
      obj["--list-item-padding"] = `${props.size / 2 + 4}px ${
        props.size + 8
      }px`;
      obj["--list-item-font-size"] = props.size + "px";
    }

    // variant
    if (props.variant === "text") {
      obj["background-color"] = "transparent";
      obj["border"] = "none";
      obj["box-shadow"] = "none";
    } else if (props.variant === "outlined") {
      obj["background-color"] = "transparent";
      obj.borderColor = "var(color) !important";
      obj["box-shadow"] = "none";
    } else if (props.variant === "contained") {
      obj["background-color"] = props.color || palette.background.paper;
      obj["border-color"] = props.color
        ? props.colorDepth !== "light"
          ? "white"
          : "black"
        : "currentcolor";
      obj["color"] = props.color
        ? props.colorDepth !== "light"
          ? "white"
          : "black"
        : "currentcolor";
      obj["box-shadow"] = "none";
    }
    return obj;
  }
);
export default StyledListItem;
