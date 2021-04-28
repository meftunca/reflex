import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useMemo } from "react";
import { useTheme } from "../utils/theme/styled";
import sxPropGenerator, { sxType } from "../utils/theme/sx";

type BackdropProps = React.HTMLProps<HTMLDivElement> & {
  sx: sxType;
};

const BackdropBase = styled.div({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
});

const Backdrop: React.FC<BackdropProps> = ({ children, sx }) => {
  const theme = useTheme();
  const sxStyles = useMemo(() => css(sxPropGenerator({ sx, theme })), [sx]);
  return <BackdropBase css={sxStyles}>{children}</BackdropBase>;
};

export default Backdrop;
