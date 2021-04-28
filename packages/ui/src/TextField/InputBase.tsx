import { css } from "@emotion/react";
import styled, { StyledTags } from "@emotion/styled";
import React from "react";

const InputBase = styled(
  ({
    as: T = "input",
    variant = "outlined",
    theme,
    ...props
  }: React.HTMLProps<HTMLInputElement> & {
    as: any; // "div" | "textarea" | "input" | "button" | React.ReactNode;
    variant?: "filled" | "outlined";
    className: string;
    placeholder: string;
    theme: any;
    //@ts-ignore
  }) => <T {...props} />
)(
  ({ variant = "outlined", theme, as }) => css`
    display: flex;
    border: none !important;
    outline: none;
    background-color: #0000;
    padding: ${as === "div" || as === "button"
      ? `var(--textfield-padding-y)`
      : `var(--textfield-padding-y) var(--textfield-padding-x)`};
    z-index: 1;
    caret-color: #6200ee;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.009375em;
    text-decoration: inherit;
    text-transform: inherit;
    align-self: flex-end;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);
    border: none;
    border-radius: 0;
    background: none;
    appearance: none;
  `
);

export default InputBase;
