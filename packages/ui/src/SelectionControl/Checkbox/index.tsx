import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useMemo } from "react";

import { darken, transparentize } from "color2k";

/*

,
  (props: any) => {
    let obj = {};

    if (props.size)
      obj["--checkbox-size"] =
        typeof props.size === "number" ? props.size + "px" : props.size;
    return obj;
  }

*/

const CheckboxStyled = styled.label<{ size?: string | number }>(
  ({ theme: { prefix, transitions, palette }, size }) => css`
    --checkbox-transition: all ${transitions.duration.shortest}ms
      ${transitions.easing.sharp};
    --checkbox-size: ${!size
      ? "24px"
      : typeof size === "number"
      ? size + "px"
      : size};
    --checkbox-passive-color: ${palette.text.secondary};
    --checkbox-disabled-color: ${palette.grey[300]};
    --checkbox-disabled-active-color: ${darken(palette.primary.main, 0.1)};
    --checkbox-active-color: ${palette.primary.main};
    --checkbox-span-color: ${palette.background.paper};
    --checkbox-span-passive-color: ${transparentize(
      darken(palette.background.paper, 0.2),
      0.8
    )};
    z-index: 0;
    position: relative;
    color: var(--checkbox-passive-color);
    display: inline-block;
    > input {
      appearance: none;
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      display: block;
      margin: 0;
      border-radius: 50%;
      width: var(--checkbox-size);
      height: var(--checkbox-size);
      background-color: rgba(var(--checkbox-passive-color, 0, 0, 0), 0.6);
      box-shadow: none;
      outline: none;
      opacity: 0;
      transform: scale(2);
      pointer-events: none;
      transition: var(--checkbox-transition);
      &:checked,
      &:indeterminate {
        background-color: var(--checkbox-active-color);
        & + span::before {
          border-color: var(--checkbox-active-color);
          background-color: var(--checkbox-active-color);
          transform: translate(0, 0) rotate(0deg);
        }
      }

      &:checked + span::after {
        border-color: var(--checkbox-span-color);
        transform: translate(3px, 4px) rotate(-45deg);
      }

      &:indeterminate + span::after {
        border-color: var(--checkbox-span-color);
        border-left: none;
        transform: translate(3px, 4px) rotate(-45deg);
      }
      &:active {
        opacity: 1;
        transform: scale(0);
        transition: var(--checkbox-transition);

        + span::before {
          border-color: var(--checkbox-span-color);
        }
      }

      &:checked:active + span::before {
        border-color: transparent;
        background-color: rgba(var(--checkbox-passive-color, 0, 0, 0), 0.6);
      }

      &:disabled {
        opacity: 0;
        + span {
          color: rgba(var(--checkbox-passive-color, 0, 0, 0), 0.38);
          cursor: initial;
          &::before {
            border-color: currentColor;
          }
        }
      }

      &:checked:disabled + span::before,
      &:indeterminate:disabled + span::before {
        border-color: transparent;
        background-color: currentColor;
      }
    }

    span {
      display: inline-block;
      width: 100%;
      cursor: pointer;

      &::before {
        content: "";
        display: inline-block;
        box-sizing: border-box;
        border: solid calc(var(--checkbox-size) / 20);
        border-color: rgba(var(--checkbox-span-passive-color, 0, 0, 0), 0.6);
        border-radius: calc(var(--checkbox-size) / 20);
        width: calc(var(--checkbox-size));
        height: calc(var(--checkbox-size));
        vertical-align: top;
        transition: var(--checkbox-transition);
      }

      &::after {
        content: "";
        display: block;
        position: absolute;
        top: calc(var(--checkbox-size) / 4 - 3px);
        left: calc(var(--checkbox-size) / 8 - 1px);
        width: calc(var(--checkbox-size) / 5 * 3);
        height: calc(var(--checkbox-size) / 7 * 2);
        border: solid calc(var(--checkbox-size) / 20) transparent;
        border-right: none;
        border-top: none;
        transform: translate(0, 0) rotate(360deg);
      }
    }
    &:hover {
      > input {
        opacity: 0.04;
      }

      > input:focus {
        opacity: 0.16;
      }
    }

    > input:focus {
      opacity: 0.12;
    }
  `
);

type Props = {
  colorDepth?: "light" | "main" | "dark";
  size?: number;
  color?:
    | "textPrimary"
    | "textSecondary"
    | "primary"
    | "secondary"
    | "error"
    | "warning"
    | "info"
    | "success"
    | string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};
const Checkbox: React.FC<Props> = ({
  size = 24,
  color = "primary",
  // icon,
  ...rest
}) => {
  const theme = useTheme();
  const [id] = useMemo(
    () => Number(Date.now() * Math.random()).toString(16),
    []
  );
  return (
    <CheckboxStyled
      htmlFor={id}
      role="checkbox"
      className={[theme.prefix + "-checkbox"].filter(Boolean).join(" ")}
      size={size}
    >
      <input id={id} type="checkbox" {...rest} />
      <span></span>
    </CheckboxStyled>
  );
};

export default Checkbox;
