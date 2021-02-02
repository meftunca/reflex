import { Global } from "@emotion/react";
import { MDXProvider } from "@mdx-js/react";
import { css, darkTheme, defaultTheme, ThemeProvider } from "@re-flex/ui";
import dayjs from "dayjs";
import weekDay from "dayjs/plugin/weekday";
import React, { useLayoutEffect, useState } from "react";
import components from "./components";
import Wrapper from "./wrapper";

dayjs.extend(weekDay);

window.dayjs = dayjs;
const globalStyles = css`
  html,
  body {
    overflow: hidden;
  }
  ::-webkit-scrollbar {
    transition: all 0.2s ease-in-out;
    width: 0.5rem;
    height: 0.5rem;
    background-color: transparent;
    &:hover {
      width: 1rem;
      height: 1rem;
    }
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px 0 0 4px;
    background-color: #566573;
    transition: all 0.2s ease-in-out;
    outline: none;
    &:hover {
      background-color: #2e4053;
    }
  }
`;
const DocumentationProvider = ({ children }) => {
  const [reflexTheme, setReflexTheme] = useState(defaultTheme);
  useLayoutEffect(() => {
    // console.clear();
    let theme = localStorage.getItem("reflex-theme");
    if (!theme) {
      localStorage.setItem("reflex-theme", "light");
    } else {
      setReflexTheme(
        theme === "light" ? { ...defaultTheme } : { ...darkTheme }
      );
    }
    window.changeTheme = changeTheme;
  }, []);
  const changeTheme = (theme) => {
    localStorage.setItem("reflex-theme", theme);
    setReflexTheme((prev) =>
      theme === "light"
        ? { ...prev, ...defaultTheme }
        : { ...prev, ...darkTheme }
    );
  };
  return (
    <ThemeProvider theme={reflexTheme}>
      <MDXProvider components={components}>
        <Global styles={globalStyles} />
        <Wrapper>{children}</Wrapper>
      </MDXProvider>
    </ThemeProvider>
  );
};

export default DocumentationProvider;

/* 

  TODO Önemli

  -> Component Örneklerini scripts klasörü içinde bir fonksiyon yazarak kopyalayıp public/examples dizinine taşı
  -> Sonra Örneklerin çıktılarını Playground Componetini özelleştirerek fetch ile text olarak çekerek içine göm
  @Örnek fetch("/examples/alerts/Danger.tsx") gibi

*/
