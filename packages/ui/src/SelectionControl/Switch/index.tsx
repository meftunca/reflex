// import { useTheme } from "@emotion/react";
import { css, useTheme } from "../../utils/theme/styled";

import styled from "@emotion/styled";
import React from "react";

import SwitchStyled, {
  SwitchStyledProps,
} from "@re-flex/styled/src/FormSelection/Switch/Root";

const Switch: React.FC<SwitchStyledProps> = ({
  size = 24,
  color = "primary",
  width,
  height,
  colorDepth = "main",
  children,
  // icon,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <SwitchStyled
      role="switch"
      className={theme.prefix + "-switch"}
      size={size}
      width={width}
      height={height}
      color={color}
      colorDepth={colorDepth}
    >
      <input {...rest} type="checkbox" onChange={(v) => v} />
      <span></span>
    </SwitchStyled>
  );
};

export default Switch;
