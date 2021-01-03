import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import React from "react";
import BaseLine from "../../BaseLine";
import { ThemeProvider as EmotionProvider } from "./styled";
import Theme from "./Types";

const reflexCache = createCache({
  key: "reflex",
  // container: document.head,
  speedy: true,
  stylisPlugins: [
    /* your plugins here */
  ],
  // prefix based on the css property
  // prefix: (key) => {
  //   switch (key) {
  //     case "flex":
  //       return false;
  //     case "transform":
  //     default:
  //       return true;
  //   }
  // },
});

export const ThemeProvider: React.FC<{ theme: Theme }> = ({
  children,
  theme,
}) => {
  return (
    <CacheProvider value={reflexCache}>
      <EmotionProvider theme={theme}>
        <BaseLine theme={theme}>{children}</BaseLine>
      </EmotionProvider>
    </CacheProvider>
  );
};
