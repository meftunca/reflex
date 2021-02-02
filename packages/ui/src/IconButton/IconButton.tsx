import { useTheme } from "@emotion/react";
import React from "react";
import Ripple from "../Ripple";
import { mergeClassNames } from "../utils/helpers/stringFormat";
import StyledIconButton from "./styledIconButton";

type UIIconButton = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onLongPress?: () => void;
  longPressDelay?: number;
  colorDepth?: "light" | "main" | "dark";
  icon?: React.ReactNode;
  size?: number;
  color?:
    | "primary"
    | "secondary"
    | "error"
    | "warning"
    | "info"
    | "success"
    | string;
  variant?: "outlined" | "contained" | "text";
  ripple?: typeof Ripple.defaultProps | null;
  classname?: string | string[];
};

const IconButton: React.FC<UIIconButton> = ({
  children,
  onLongPress,
  className,
  longPressDelay = 1000,
  ripple = {},
  icon,
  ...rest
}) => {
  const theme = useTheme();
  const prefix = theme.prefix;
  return (
    <StyledIconButton
      theme={theme}
      className={mergeClassNames(`${prefix}-btn ${prefix}-icon-btn`, className)}
      {...rest}
    >
      {children || icon}
      {ripple && <Ripple {...ripple} />}
    </StyledIconButton>
  );
};

export default IconButton;
