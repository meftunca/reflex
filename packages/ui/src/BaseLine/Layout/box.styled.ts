import defaultTheme from "../../utils/theme/defaultTheme";

export const BoxVarsStyled = (theme: typeof defaultTheme = defaultTheme) => {
  const { prefix, shadows, transitions } = theme;
  return `
    .${prefix}-box {
      --box-overflow: hidden;
      --box-margin: 0;
      --box-padding: 0;
      --box-display: block;
      --box-background-color: transparent;
      --box-border-radius: 0;
      --box-shadow: 0 0 10px 0 ${shadows[0]};
      --box-color: var(--typography-color);
      --box-width: 100%;
      --box-height: inherit;
      --box-transition: all ${transitions.duration.enteringScreen} ${transitions.easing.easeInOut};
      --box-position: relative;
    }
  `;
};

export const BoxInitialStyled = (theme: typeof defaultTheme = defaultTheme) => {
  const { prefix } = theme;
  return `
    .${prefix}-box {
      margin: var(--box-margin);
      padding: var(--box-padding);
      display: var(--box-display);
      background-color: var(--box-background-color);
      border-radius: var(--box-border-radius);
      box-shadow: var(--box-shadow);
      color: var(--box-color);
      width: var(--box-width);
      height: var(--box-height);
      transition: var(--box-transition);
      overflow: var(--box-overflow);
      position: var(--box-position);
    }
  `;
};
