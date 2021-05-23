import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { darken, lighten, getLuminance } from "color2k";

const StyledButtonIconItem = styled.span<{}>(({ theme: {} }) => {
  return css`
    line-height: 0;
    &.affix-icon-item {
      margin-right: 8px;
    }
    &.suffix-icon-item {
      margin-left: 8px;
    }
  `;
});
export default StyledButtonIconItem;
