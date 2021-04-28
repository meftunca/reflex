import { css } from "@emotion/react";
import styled from "@emotion/styled";
const ProgressbarBase = styled.div<{ size?: string | number }>(
  ({ theme: { prefix, palette, transitions }, size }) => css`
    & {
      --progressbar-color: ${palette.primary.main};
      --progressbar-size: ${typeof size === "number"
        ? size + "px"
        : typeof size === "string"
        ? size
        : "8px"};
      --progressbar-duration: 250ms;
      --progressbar-bgcolor: transparent;
      --progressbar-timing-function: ${transitions.easing.sharp};
      --progressbar-stroke-size: calc(var(--progressbar-size) / 12);
      progress {
        display: none;
      }
    }
  `
);

export default ProgressbarBase;
