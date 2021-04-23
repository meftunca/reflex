import { Dayjs } from "dayjs";

type Breakpoints = {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

type Mixins = {
  [key: string]: MixinsField;
};

type MixinsField = {
  [key: string]: string | number | object;
};

type Overrides = {
  [key: string]: object;
};

type Palette = {
  common: Common;
  type: string;
  primary: ColorDepth;
  secondary: ColorDepth;
  error: ColorDepth;
  warning: ColorDepth;
  info: ColorDepth;
  success: ColorDepth;
  grey: Grey;
  contrastThreshold: number;
  tonalOffset: number;
  text: Text;
  divider: string;
  background: Background;
  action: Action;
};

type Action = {
  active: string;
  hover: string;
  hoverOpacity: number;
  selected: string;
  selectedOpacity: number;
  disabled: string;
  disabledBackground: string;
  disabledOpacity: number;
  focus: string;
  focusOpacity: number;
  activatedOpacity: number;
};

type Background = {
  paper: string;
  default: string;
};

type Common = {
  black: string;
  white: string;
};

type ColorDepth = {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
};

type Grey = {
  the50: string;
  the100: string;
  the200: string;
  the300: string;
  the400: string;
  the500: string;
  the600: string;
  the700: string;
  the800: string;
  the900: string;
  a100: string;
  a200: string;
  a400: string;
  a700: string;
};

type Text = {
  primary: string;
  secondary: string;
  disabled: string;
  hint: string;
};

type Shape = {
  borderRadius: number;
};

type Space = {
  default: number;
  dense: number;
  large: number;
};

type Transitions = {
  easing: Easing;
  duration: Duration;
};

type Duration = {
  shortest: number;
  shorter: number;
  short: number;
  standard: number;
  complex: number;
  enteringScreen: number;
  leavingScreen: number;
};

type Easing = {
  easeInOut: string;
  easeOut: string;
  easeIn: string;
  sharp: string;
  linear: string;
};

type Typography = {
  importFonts: string;
  htmlFontSize: number;
  fontFamily: string;
  fontSize: number;
  fontWeightLight: number;
  fontWeightRegular: number;
  fontWeightMedium: number;
  fontWeightBold: number;
  fontWeight: number;
  fontStyle: string;
  fontStretch: string;
  textTransform: string;
  opacity: number;
  letterSpacing: number;
  h1: TypographyTag;
  h2: TypographyTag;
  h3: TypographyTag;
  h4: TypographyTag;
  h5: TypographyTag;
  h6: H6;
  subtitle1: TypographyTag;
  subtitle2: TypographyTag;
  body1: TypographyTag;
  body2: TypographyTag;
  button: TypographyTag;
  caption: TypographyTag;
  overline: TypographyTag;
};

type TypographyTag = {
  textTransform: TextTransform;
  fontSize: number;
  fontWeight: number;
  lineHeight?: number;
  letterSpacing: number;
  opacity?: number;
};

enum TextTransform {
  Capitalize = "capitalize",
  Uppercase = "uppercase",
}

type H6 = {
  opacity: number;
  textTransform: TextTransform;
  fontSize: number;
  fontWeight: string;
  letterSpacing: number;
};

type ZIndex = {
  mobileStepper: number;
  speedDial: number;
  appBar: number;
  drawer: number;
  modal: number;
  snackbar: number;
  tooltip: number;
};

// import "@emotion/react";
// declare module "@emotion/react" {
//   export interface Theme {
//     prefix: string;
//     breakpoints: Breakpoints;
//     space: Space;
//     direction: string;
//     mixins: Mixins;
//     overrides: Overrides;
//     palette: Palette;
//     props: Overrides;
//     shadows: string[];
//     typography: Typography;
//     shape: Shape;
//     transitions: Transitions;
//     zIndex: ZIndex;
//     dayjs?: Dayjs;
//   }
// }

export default interface Theme {
  prefix: string;
  breakpoints: Breakpoints;
  space: Space;
  direction: string;
  mixins: Mixins;
  overrides: Overrides;
  palette: Palette;
  props: Overrides;
  shadows: string[];
  typography: Typography;
  shape: Shape;
  transitions: Transitions;
  zIndex: ZIndex;
  dayjs?: Dayjs;
}
