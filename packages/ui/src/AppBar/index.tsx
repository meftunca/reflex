import React, { useEffect } from "react";
import AppBarBase, { AppBarBaseProps } from "./Styled/AppBarBase";

type AppBarProps = AppBarBaseProps & {};
const AppBar: React.FC<AppBarProps> = ({ children, ...rest }) => {
  return <AppBarBase {...rest}>{children}</AppBarBase>;
};

export default AppBar;
