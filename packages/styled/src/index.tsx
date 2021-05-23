/// <reference types="@emotion/react/types/css-prop" />
import "@emotion/react";
import type EmotionTheme from "./ThemeTypes";

declare module "@emotion/react" {
  export interface Theme extends EmotionTheme {}
}
