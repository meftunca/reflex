import { css } from "@emotion/react";
import defaultTheme from "../utils/theme/defaultTheme";
import ButtonBaseLine from "./Components/Button/Button.styled";
import CheckboxStyled from "./Components/Forms/Checkbox";
import RadioStyled from "./Components/Forms/Radio";
import SwitchStyled from "./Components/Forms/Switch";
import TextFieldStyled from "./Components/Forms/TextField";
import ListItemStyled from "./Components/List/ListItem.styled.";
import ProgressbarStyled from "./Components/ProgressIndicator";
import { BoxInitialStyled, BoxVarsStyled } from "./Layout/box.styled";
import ResetCss from "./reset";

const breakPointsVarGenerator = (
  breakpoints: any = defaultTheme.breakpoints
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
  const { prefix } = theme;
  return css`
    ${ResetCss}

    html,body {
      font-family: var(--typography-font-family);
      background-color: var(--body-background);
      transition: background-color, color, letter-spacing, font-size 75ms linear;
    }
        /* Set Responsive Media Query */
    ${responsiveFontSize}

    .${prefix}-typography {
      color: var(--typography-color);
      letter-spacing: var(--typography-letter-spacing);
      font-size: var(--typography-font-size);
      font-family: var(--typography-font-family);
      font-style: var(--typography-font-style);
      font-weight: var(--typography-font-weight);
      font-stretch: var(--typography-font-stretch);
      text-align: var(--typography-align);
      text-transform: var(--typography-text-transform);
      opacity: var(--typography-opacity);
      transition: color, letter-spacing, font-size 75ms linear;
    }

    ${ButtonBaseLine.ButtonBaseLineInitial(theme)}
    ${BoxInitialStyled(theme)}
    ${ListItemStyled.ListItemLineInitial(theme)}
  `;
};

export const AppBaseLineVariableStyle = (
  theme: typeof defaultTheme = defaultTheme
) => {
  const { typography, palette, direction, breakpoints } = theme;
  return css`
    :root {
      /* SetUp */
      --direction: ${direction === "rtl" ? "right" : "left"};
      /* BreakPoints */
      ${breakPointsVarGenerator(breakpoints)}

      /* Typography Variable Declaration */
      --typography-color: ${palette.text.primary};
      --typography-letter-spacing: ${typography.letterSpacing}px;
      --typography-font-size: ${typography.htmlFontSize}px;
      --typography-font-family: ${typography.fontFamily};
      --typography-font-style: ${typography.fontStyle};
      --typography-font-weight: ${typography.fontWeight};
      --typography-font-stretch: ${typography.fontStretch};
      --typography-opacity: ${typography.opacity};
      --typography-align: var(--direction);

      /* Body Variable Declaration */
      --body-background: ${palette.background.default};
      --component-background: ${palette.background.paper};
    }

    ${ButtonBaseLine.ButtonBaseLineVariables(theme)}
    ${BoxVarsStyled(theme)}
    ${ListItemStyled.ListItemLineVariables(theme)}
    ${CheckboxStyled(theme)}
    ${SwitchStyled(theme)}
    ${RadioStyled(theme)}
    ${TextFieldStyled(theme)}
    ${ProgressbarStyled(theme)}

  `;
};
