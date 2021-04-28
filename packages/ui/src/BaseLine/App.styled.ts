import { css } from "@emotion/react";
import defaultTheme from "../utils/theme/defaultTheme";
import ButtonBaseLine from "./Components/Button/Button.styled";

const breakPointsVarGenerator = (
  breakpoints: any = defaultTheme.breakpoints.values
) => {
  return Object.entries(breakpoints).map(
    ([key, value]) => `--breakpoint-${key}: ${value}px;`
  );
};

const responsiveFontSize = css`
  @media screen and (max-width: var(--breakpoint-sm)) {
    html,
    body {
      font-size: 10px;
    }
  }
  @media screen and (max-width: var(--breakpoint-md)) {
    html,
    body {
      font-size: 12px;
    }
  }
  @media screen and (max-width: var(--breakpoint-lg)) {
    html,
    body {
      font-size: 14px;
    }
  }
  @media screen and (max-width: var(--breakpoint-xl)) {
    html,
    body {
      font-size: 16px;
    }
  }
`;

export const AppBaseLineInitialStyle = (
  theme: typeof defaultTheme = defaultTheme
) => {
  const {
    prefix,
    transitions: {
      duration: { enteringScreen },
      easing: { easeInOut },
    },
  } = theme;
  return css`

    html,body {
      font-family: var(--typography-font-family);
      background-color: var(--body-background);
      transition: background-color ${enteringScreen} ${easeInOut}, color ${enteringScreen} ${easeInOut}, letter-spacing ${enteringScreen} ${easeInOut}, font-size ${enteringScreen} ${easeInOut};
    }
    ${responsiveFontSize}

    .${prefix}-typography {
      color: var(--typography-color);
      letter-spacing: var(--typography-letter-spacing);
      font-size: var(--typography-font-size);
      font-family: var(--typography-font-family);
      font-style: var(--typography-font-style);
      font-weight: var(--typography-font-weight);
      font-stretch: var(--typography-font-stretch);
      text-align: var(--typography-text-align);
      text-transform: var(--typography-text-transform);
      opacity: var(--typography-opacity);
      transition: color ${enteringScreen} ${easeInOut}, letter-spacing ${enteringScreen} ${easeInOut}, font-size ${enteringScreen} ${easeInOut};
    }

    ${ButtonBaseLine.ButtonBaseLineInitial(theme)}
  `;
};

export const AppBaseLineVariableStyle = (
  theme: typeof defaultTheme = defaultTheme
) => {
  const { typography, palette, direction, breakpoints } = theme;
  return css`
    :root {
      --direction: ${direction === "rtl" ? "right" : "left"};
      ${breakPointsVarGenerator(breakpoints.values)}

      --typography-color: ${palette.text.primary};
      --typography-letter-spacing: ${typography.letterSpacing}px;
      --typography-font-size: ${typography.htmlFontSize}px;
      --typography-font-family: ${typography.fontFamily};
      --typography-font-style: ${typography.fontStyle};
      --typography-font-weight: ${typography.fontWeight};
      --typography-font-stretch: ${typography.fontStretch};
      --typography-opacity: ${typography.opacity};
      --typography-text-align: var(--direction);

      --body-background: ${palette.background.default};
      --component-background: ${palette.background.paper};
    }

    ${ButtonBaseLine.ButtonBaseLineVariables(theme)}

  `;
};
