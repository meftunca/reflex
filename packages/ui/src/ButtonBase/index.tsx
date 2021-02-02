/** @jsx jsx */
import { useTheme } from "@emotion/react";
import React from "react";
import Box, { BoxProps } from "../Box";
import Ripple, { Props as RippleProps } from "../Ripple";
import { jsx, styled } from "../utils/theme/styled";

export type Props = BoxProps & {
  ripple?: RippleProps;
};

type Ref = HTMLElement;

const StyledButtonBase = styled(Box)(``);

const ButtonBase: React.FC<Props> = React.forwardRef<Ref, Props>(
  ({ children, className, ripple = {}, ...rest }, ref) => {
    const { prefix } = useTheme();
    return (
      <StyledButtonBase
        className={[
          prefix + "-btn-base ",
          Array.isArray(className) ? className.join(" ") : className,
        ].join(" ")}
        css={{ width: "auto" }}
        // @ts-ignore
        ref={ref}
        {...rest}
      >
        {children}
        {ripple && <Ripple {...ripple} />}
      </StyledButtonBase>
    );
  }
);

export default ButtonBase;
