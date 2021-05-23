import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { darken, lighten, getLuminance } from "color2k";

const StyledButtonContent = styled.span<{}>(({ theme: {} }) => {
  return css`
    -webkit-font-smoothing: antialiased;
    -webkit-appearance: none;
    overflow: visible;
    vertical-align: middle;
    display: inline-flex;
    position: relative;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    border: none;
    outline: none;
    font-weight: 500;
    -webkit-appearance: none;
    overflow: visible;
    vertical-align: middle;
    font-size: var(--btn-font-size);
    color: var(--btn-color);
  `;
});
export default StyledButtonContent;
