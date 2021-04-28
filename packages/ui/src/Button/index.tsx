/** @jsx jsx */
import { useTheme } from "@emotion/react";
import React from "react";
import Ripple from "../Ripple";
import Text from "../Typography";
import { jsx } from "../utils/theme/styled";
import StyledButton from "./styledButton";

/*

const StyledButton: StyledComponent<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, buttonVariables & {
    colorDepth: "light" | "main" | "dark";
    color: string;
    variant: "contained" | ... 1 more ... | "text";
    size: number;
}, object>

*/

export type buttonVariables = {
  fontFamily?: string;
  fontSize?: number;
  fontWeightLight?: number;
  fontWeightRegular?: number;
  fontWeightMedium?: number;
  fontWeightBold?: number;
  fontWeight?: number;
  fontStyle?: string;
  fontStretch?: string;
  textTransform?: string;
  opacity?: number;
  letterSpacing?: number;
};

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  // Typography props
  vars?: buttonVariables;
  colorDepth?: "light" | "main" | "dark";
  suffixIcon?: React.ReactNode;
  affixIcon?: React.ReactNode;
  fullWidth?: boolean;
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

type Ref = HTMLButtonElement;

const Button: React.FC<Props> = React.forwardRef<Ref, Props>(
  (
    {
      vars,
      children,
      className,
      ripple = {},
      variant = "text",
      colorDepth = "main",
      suffixIcon,
      affixIcon,
      size = 14,
      ...rest
    },
    ref
  ) => {
    const { prefix } = useTheme();
    return (
      <StyledButton
        className={[
          prefix + "-btn ",
          Array.isArray(className) ? className.join(" ") : className,
        ].join(" ")}
        variant={variant}
        colorDepth={colorDepth}
        size={size}
        {...rest}
        ref={ref}
      >
        {affixIcon}
        <Text variant="button" tag="span">
          {children}
        </Text>
        {suffixIcon}
        {ripple && <Ripple {...ripple} />}
      </StyledButton>
    );
  }
);

export default Button;
