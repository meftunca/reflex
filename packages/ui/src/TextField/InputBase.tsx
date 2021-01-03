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
  }: {
    as: "div" | "textarea" | "input";
    variant?: "filled" | "outlined";
    className: string;
    placeholder: string;
    theme: any;
  }) => <T {...props} />
)(
  ({ variant = "outlined", theme }) => css`
    display: flex;
    padding: calc(var(--textfield-input-base-padding))
      calc(var(--textfield-input-base-padding) / 2);
    border: none !important;
    outline: none;
    background-color: #0000;
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
    ${variant === "filled"
      ? TextFieldFilledActive(theme.prefix)
      : TextFieldOutlinedActive(
          theme.prefix
        )} /* &:focus + &-textfield-notched-outline {
      &-textfield-notched-outline-label {
        border-top-color: transparent;
        label {
          transform: translateY(calc(var(--textfield-input-base-padding) * -1))
            scale(0.75);
        }
      }
    } */
  `
);

export default InputBase;
