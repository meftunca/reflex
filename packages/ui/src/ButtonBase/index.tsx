/** @jsx jsx */
import { useTheme } from "@emotion/react";
import React, { useRef } from "react";
import Box, { BoxProps } from "../Box";
import Ripple, { onRipple, Props as RippleProps } from "../Ripple";
import { jsx, styled } from "../utils/theme/styled";

export type Props = BoxProps & {
  ripple?: RippleProps;
};

type Ref = HTMLElement;

const StyledButtonBase = styled(Box)(``);

const ButtonBase: React.FC<Props> = React.forwardRef<Ref, Props>(
  ({ children, className, ripple = {}, ...rest }, ref) => {
    const { prefix } = useTheme();
    const rippleRef = useRef<
      | {
          onRipple: onRipple;
        }
      | undefined
    >();
    return (
      <StyledButtonBase
        as="button"
        data-role="button"
        className={[
          prefix + "-btn-base ",
          Array.isArray(className) ? className.join(" ") : className,
        ].join(" ")}
        css={{ width: "auto" }}
        // @ts-ignore
        ref={ref}
        {...rest}
        // @ts-ignore
        onMouseDown={(e) => {
          //
          if (rippleRef.current?.onRipple) {
            rippleRef.current?.onRipple(e);
          }
        }}
      >
        {/* @ts-ignore */}
        {ripple && <Ripple {...ripple} ref={rippleRef} />}
        {children}
      </StyledButtonBase>
    );
  }
);

export default ButtonBase;
