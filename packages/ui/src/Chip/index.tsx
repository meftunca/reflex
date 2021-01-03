//@ts-nocheck
import styled from "@emotion/styled";
import { readableColorIsBlack } from "color2k";
import React from "react";
import Ripple from "../Ripple";
import Box from "../Box";
import { isObject } from "../utils/helpers/is";
import { Theme, useTheme } from "../utils/theme/theming";
import IconButton from "../Button/IconButton";
import Text from "../Typography";

const RiCloseLine = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>
    </g>
  </svg>
);

const RiCheckLine = () => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>
    </g>
  </svg>
);
export type Props = {
  colorDepth?: "light" | "main" | "dark";
  size?: number;
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
  variant?: "outlined" | "contained" | "text";
  ripple?: typeof Ripple.defaultProps | null;
  label?: string;
  avatar?: React.ReactNode;
  icon?: React.ReactNode;
  deleteIcon?: React.ReactNode;
  selectedIcon?: React.ReactNode;
  onDelete?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onSelect?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  selected?: Boolean;
  theme?: Theme;
};

const ChipBase = styled(Box)(
  ({ theme: { prefix } }) => {
    return `
    --chip-color: inherit;
    --chip-border-color: transparent;
    --chip-background-color: transparent;
    --box-background-color: var(--chip-background-color);
    --chip-action-bg: rgba(0, 0, 0, 0.2);
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    position: relative;
    --box-width: auto;
    padding: 6px 2px;
    margin: 2px;
    border: 1px solid var(--chip-border-color);
    .${prefix}-chip-label {
      margin: 0 12px;
      --typography-color: var(--chip-color);
    }
    .${prefix}-chip-delete-chip {
      margin-right: 4px;
    }

    .${prefix}-chip-delete-chip,
      .${prefix}-chip-select-chip {
      padding: 0;
      z-index: 9999;
      background-color: var(--chip-action-bg);
    }
    .${prefix}-chip-select-chip {
      margin-left: 4px;
      /* background-color: rgba(currentcolor, 0.1); */
    }
  `;
  },
  (props: Props) => {
    let {
      color = "textPrimary",
      colorDepth = "main",
      variant = "text",
      size = 30,
      theme: { palette, prefix },
    }: Props = props;
    let obj: any = {};
    // Object.entries(isObject(props.vars) ? props.vars : {}).forEach(
    //   ([key, value]) => (obj[camelToKebabCase(key, "--chip-")] = value)
    // );
    const isLight = palette.type === "light";
    if (color.match(/(textPrimary|textSecondary)/g)) {
      color = color.replace("text", "").toLowerCase();
      color = palette.text[color];
    } else if (color.match(/(primary|secondary|info|error|warning|success)/g)) {
      let depth = colorDepth;
      color = palette[color][depth];
    } else {
      color = color;
    }
    //size
    if (size && typeof size === "number") {
      obj["--chip-padding"] = `${size / 3}px`;
      obj["--chip-border-radius"] = "50%";
      // obj.width = size + size / 3 + "px";
      // obj.height = size + size / 3 + "px";
      // obj["svg"] = {
      //   fontSize: size + "px",
      //   width: size + "px",
      //   height: size + "px",
      //   margin: 0 + "px !important",
      //   padding: 0 + "px !important",
      // };
    }
    // variant
    if (variant === "text") {
      obj["--chip-background-color"] = isLight
        ? "rgba(0,0,0,.1)"
        : "rgba(255,255,255,.1)";
      obj["--chip-chil-color"] = color;
      obj["--chip-border"] = "none";
      obj["--chip-box-shadow"] = "none";
      obj["--chip-action-bg"] = isLight
        ? "rgba(0,0,0,.2)"
        : "rgba(255,255,255,.2)";
    } else if (variant === "outlined") {
      obj["--chip-background-color"] = "transparent";
      obj["--chip-chil-color"] = color;
      obj.borderColor = "var(--chip-color) !important";
      obj["--chip-box-shadow"] = "none";
      obj["--chip-action-bg"] = isLight
        ? "rgba(0,0,0,.2)"
        : "rgba(255,255,255,.2)";
    } else if (variant === "contained") {
      obj["--chip-background-color"] = color;
      obj["--chip-border"] = "none";
      obj["--chip-action-bg"] = !isLight
        ? "rgba(0,0,0,.4)"
        : "rgba(255,255,255,.4)";
      let textColor = !readableColorIsBlack(color)
        ? palette.common.white
        : palette.common.black;
      obj["--chip-color"] = textColor;
      obj[`.${prefix}-btn`] = {
        "--btn-color": textColor,
      };
      obj["--chip-box-shadow"] = "none";
    }
    return obj;
  }
);
const Chip: React.FC<Props> = ({
  label,
  ripple = {},
  icon,
  avatar,
  selectedIcon: SelectIcon = <RiCheckLine />,
  deleteIcon: DeleteIcon = <RiCloseLine />,
  onSelect,
  onDelete,
  ...rest
}) => {
  const theme = useTheme();
  if (!isObject(theme)) return null;
  const isLight = theme.palette.type === "light";
  return (
    <ChipBase
      // role="button"
      bgColor={isLight ? theme.palette.grey[300] : theme.palette.grey[800]}
      radius={30}
      css={{ "--box-width": "auto" }}
      {...rest}
    >
      {onSelect ? (
        <IconButton
          className={theme.prefix + "-chip-select-chip"}
          icon={icon || avatar || SelectIcon}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onSelect(e);
          }}
          size={16}
        />
      ) : (
        icon || avatar
      )}
      <Text
        className={theme.prefix + "-chip-label"}
        variant="body1"
        tag="span"
        color="textPrimary"
      >
        {label}
      </Text>
      {onDelete && (
        <IconButton
          className={theme.prefix + "-chip-delete-chip"}
          icon={DeleteIcon}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onDelete(e);
          }}
          size={16}
        />
      )}
      {ripple && <Ripple {...ripple} />}
    </ChipBase>
  );
};

export default Chip;
