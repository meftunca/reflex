import { Global } from "@emotion/react";
import React, { useMemo } from "react";
import {
  AppBaseLineInitialStyle,
  AppBaseLineVariableStyle,
} from "./App.styled";

import resetCss from "./reset";

const BaseLine: React.FC<{ theme: any }> = ({ theme, children }) => {
  return (
    <React.Fragment>
      <Global
        key="global-style"
        styles={[
          resetCss,
          AppBaseLineInitialStyle(theme),
          AppBaseLineVariableStyle(theme),
        ]}
      />
      {children}
    </React.Fragment>
  );
};

export default BaseLine;
