import React from "react";
import styled from "@emotion/styled";

type HiddenProps = {
  xsDown?: boolean;
  xsUp?: boolean;
  smDown?: boolean;
  smUp?: boolean;
  mdDown?: boolean;
  mdUp?: boolean;
  lgDown?: boolean;
  lgUp?: boolean;
  xlDown?: boolean;
  xlUp?: boolean;
};

const HiddenBase = styled.div<HiddenProps>((props) => {
  let style = {};
  const breakpoints = Object.entries(props.theme.breakpoints); //[xs,520] gibi
  for (let [size, width] of breakpoints) {
    if (size + "Up" in props) {
      style[`@media screen and (min-width: ${width}px)`] = {
        display: "none",
      };
    } else if (size + "Down" in props) {
      style[`@media screen and (max-width: ${width}px)`] = {
        display: "none",
      };
    }
  }

  return style;
});

export default HiddenBase;
