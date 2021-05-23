import { useTheme } from "@emotion/react";
import React from "react";
import Ripple from "../Ripple";
import { mergeClassNames } from "../utils/helpers/stringFormat";
import StyledIconButton from "@re-flex/styled/src/IconButton";
import { ButtonRootProps } from "@re-flex/styled/src/Button/Root";
import ButtonBase from "../ButtonBase";

interface UIIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonRootProps {
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
  isImgButton?: boolean;
}

const IconButton: React.FC<UIIconButtonProps> = ({
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
      as={ButtonBase}
      className={mergeClassNames(`${prefix}-btn ${prefix}-icon-btn`, className)}
      variant="text"
      {...rest}
    >
      {children || icon}
    </StyledIconButton>
  );
};

export default IconButton;
