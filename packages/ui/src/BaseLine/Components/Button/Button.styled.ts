import { lighten } from "color2k";
import DefaultTheme from "../../../utils/theme/defaultTheme";
const ButtonBaseLineVariables = ({
  prefix,
  palette,
  transitions,
  shadows,
}: typeof DefaultTheme) => {
  const transitionTiming = `${transitions.duration.shorter}ms ${transitions.easing.easeInOut}`;
  return `
    button,
    input[type="button"],
    .${prefix}-btn {
      --btn-outline: none;
      --btn-background-color: var(--component-background, transparent);
      --btn-active-background-color: rgba(30, 30, 30, 0.075);
      --btn-color: var(--typography-color, #333);
      --btn-border-color: ${lighten(
        palette.common.black,
        palette.type === "light" ? 0.6 : 0.4
      )};
      --btn-border: 1px solid var(--btn-border-color);
      --btn-margin: 0;
      --btn-line-height: inherit;
      --btn-padding: 8px 12px;
      --btn-border-radius: 4px;
      --btn-transform: translate3d(0, 0, 0);
      --btn-transition: color ${transitionTiming}, font-size ${transitionTiming},
        background-color ${transitionTiming}, margin ${transitionTiming},
        box-shadow ${transitionTiming};
      --btn-box-shadow: ${shadows[1]};
    }
  `;
};

const ButtonBaseLineInitial = ({
  prefix,
  transitions,
}: typeof DefaultTheme) => `
  /* button,
  input[type="button"], */
  .${prefix}-btn {
    position: relative;
    user-select: none;
    cursor: pointer;
    display: inline-flex;
    white-space: nowrap;
    text-decoration: none;
    vertical-align: baseline;
    text-align: center;
    overflow: hidden;
    text-align: center;
    align-items: center;
    justify-content: center;

    --webkit-tap-highlight-color: var(--typography-color);
    color: var(--btn-color);
    outline: var(--btn-outline);
    background-color: var(--btn-background-color);
    border: var(--btn-border);
    margin: var(--btn-margin);
    line-height: var(--btn-line-height);
    padding: var(--btn-padding);
    border-radius: var(--btn-border-radius);
    transform: var(--transform);
    transition: var(--btn-transition);
    box-shadow: var(--btn-box-shadow);

    &:focus,
    &:hover,
    &:active {
      background-color: var(--btn-active-background-color);
    }
  }

  .${prefix}-btn:not(.${prefix}-icon-btn) > svg:first-of-type {
    margin-right: 8px;
  }
  .${prefix}-btn:not(.${prefix}-icon-btn) > svg:last-of-type {
    margin-left: 8px;
  }
  .${prefix}-ripple-container {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    overflow: hidden;
    position: absolute;
    border-radius: inherit;
  }
  .${prefix}-ripple-container > .ripples {
    display: block;
    position: absolute;
    background: currentcolor;
    border-radius: 100%;
    pointer-events: none;
    animation-name: useRippleAnimation;
    animation-duration: ${transitions.duration.standard}ms;
    animation-timing-function: ${transitions.easing.easeIn};
    z-index: 1;
  }

  @keyframes useRippleAnimation {
    0% {
      transform: scale(0);
      opacity: 0.2;
    }

    30% {
      transform: scale(0.7);
    }
    70% {
      transform: scale(2);
       opacity: 0.1;
   }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
`;

export default { ButtonBaseLineVariables, ButtonBaseLineInitial };
