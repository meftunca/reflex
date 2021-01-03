import defaultTheme from "../../utils/theme/defaultTheme";
import { css } from "@emotion/react";

export const BoxVarsStyled = (theme: typeof defaultTheme = defaultTheme) => {
  const { prefix } = theme;
  return css`
    .${prefix}-collapse-content {
      --collapse-cursor: pointer;
      --collapse-padding: 0;
      --collapse-width: 100%;
      --collapse-border: none;
      --collapse-text-align: left;
      --collapse-font-size: 14px;
    }
  `;
};

export const BoxInitialStyled = (theme: typeof defaultTheme = defaultTheme) => {
  const { prefix } = theme;
  return css`
    .${prefix}-collapse-content {
      cursor: var(--collapse-cursor);
      padding: var(--collapse-padding);
      width: var(--collapse-width);
      border: var(--collapse-border);
    }
  `;
};
