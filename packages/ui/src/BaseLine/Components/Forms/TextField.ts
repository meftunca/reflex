import { css } from "@emotion/react";
import DefaultTheme from "../../../utils/theme/defaultTheme";

const TextFieldStyled = ({
  prefix,
  palette,
  transitions,
}: typeof DefaultTheme) => css`
  .${prefix}-textfield {
    --textfield-helper-color: ${palette.text.secondary};
    --textfield-color: ${palette.text.primary};
    --textfield-active-color: ${palette.primary.main};
    --textfield-transitions: ${transitions.duration.shortest}ms
      ${transitions.easing.easeInOut};
    --textfield-border-color: #00000061;
    --textfield-input-base-padding: 16px;
    --textfield-adornment-start-width: 8px;
    --textfield-adornment-end-width: 8px;
    position: relative;
    justify-content: space-between;
    border-radius: 4px 4px 0 0;
    position: relative;
    display: inline-flex;
    align-content: center;
    align-items: center;
    box-sizing: border-box;
    will-change: opacity, transform, color;
    transition: all 0.2s linear;
    border-radius: 4px;
    padding: 0 calc(var(--textfield-input-base-padding) / 4);
  }
`;

export default TextFieldStyled;
