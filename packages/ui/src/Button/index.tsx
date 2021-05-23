/** @jsx jsx */
import { useTheme } from "@emotion/react";
import React from "react";
import { useRef } from "react";
import Ripple, { onRipple } from "../Ripple";
import StyledButton from "@re-flex/styled/src/Button/Root";
import StyledButtonContentItem from "@re-flex/styled/src/Button/Content";
import StyledButtonIconItem from "@re-flex/styled/src/Button/Icon";
import clsx from "clsx";

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
      size = 1.25,
      ...rest
    },
    ref
  ) => {
    const { prefix } = useTheme();
    const rippleRef = useRef<
      | {
          onRipple: onRipple;
        }
      | undefined
    >();
    return (
      <StyledButton
        className={clsx(prefix + "-btn", className)}
        variant={variant}
        colorDepth={colorDepth}
        size={size}
        {...rest}
        ref={ref}
        onMouseDown={(e) => {
          if (rippleRef.current?.onRipple) {
            rippleRef.current?.onRipple(e);
          }
        }}
      >
        {/* @ts-ignore */}
        {ripple && <Ripple {...ripple} ref={rippleRef} />}
        {affixIcon && (
          <StyledButtonIconItem className="affix-icon-item">
            {affixIcon}
          </StyledButtonIconItem>
        )}
        <StyledButtonContentItem>{children}</StyledButtonContentItem>
        {suffixIcon && (
          <StyledButtonIconItem className="suffix-icon-item">
            {suffixIcon}
          </StyledButtonIconItem>
        )}
      </StyledButton>
    );
  }
);

export default Button;
