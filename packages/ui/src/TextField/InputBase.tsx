import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { TextFieldFilledActive } from "./Filled";
import { TextFieldOutlinedActive } from "./Outlined";

const InputBase = styled(
  ({
    as: T = "input",
    variant = "outlined",
    theme,
    ...props
  }: HTMLInputElement & {
    as: "div" | "textarea" | "input" | "button" | React.ReactNode;
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
        padding: ${
          as === "div" || as === "button"
            ? `calc(var(--textfield-input-base-padding) / 4)`
            : "inherit"
        };
    z-index: 1;
    caret-color: #6200ee;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    min-width: 80px;
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
    /* ${
      variant === "filled"
        ? TextFieldFilledActive(theme.prefix)
        : TextFieldOutlinedActive(theme.prefix)
    } */
  `
);

export default InputBase;
