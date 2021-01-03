import { Global } from "@emotion/react";
import React from "react";
import {
  AppBaseLineInitialStyle,
  AppBaseLineVariableStyle,
} from "./App.styled";
// import { ThemeProvider } from "../utils/theme/theming";
// import DefaultTheme from "../utils/theme/defaultTheme";

const BaseLine: React.FC<{ theme: any }> = ({ theme, children }) => {
  return (
    <React.Fragment>
      <Global key="global-variables" styles={AppBaseLineVariableStyle(theme)} />
      <Global key="global-style" styles={AppBaseLineInitialStyle(theme)} />
      {children}
    </React.Fragment>
  );
};

export default BaseLine;
