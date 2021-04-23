import React, { FC } from "react";
const Icon: FC = ({ children, ...props }) => (
  <span className="material-icons" {...props}>
    {children}
  </span>
);

export default Icon;
