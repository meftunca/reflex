import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import clsx from "clsx";
import Box from "../Box";
const TextFieldBase = styled(Box)<{ size: number }>`
  display: flex;
  place-items: center;
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 100%;
  padding: calc(var(--textfield-input-base-padding) / 2);
  border-bottom: 1px solid var(--textfield-border-color);
  transition: all 150ms ease-in-out;
  &.outlined {
    border: 1px solid var(--textfield-border-color);
    border-radius: 4px;
  }
  .leading,
  .trailing {
    padding: calc(var(--textfield-input-base-padding) / 4);
    min-width: 8px;
  }
  .content {
    position: relative;
    width: 100%;
    height: 100%;
    padding: calc(var(--textfield-input-base-padding) / 4);
    label {
      user-select: none;
      position: absolute;
      transition: all 125ms ease-in-out;
      color: rgba(var(--textfield-color), 0.6);
      display: inline-block;
      max-width: 100%;
      transform: translateY(0px);
      font-size: ${({ size = 16 }) => size}px;
    }
  }
  &.outlined {
    border: none;
    fieldset {
      text-align: left;
      position: absolute;
      inset: calc(var(--textfield-input-base-padding) / 2 * -1) 0px 0px;
      margin: 0px;
      padding: 0px 8px;
      pointer-events: none;
      border-radius: inherit;
      border-style: solid;
      border-width: 1px;
      overflow: hidden;
      min-width: 0%;
      border-color: var(--textfield-border-color);
      transition: all 0.1s ease-in-out;
      legend {
        display: block;
        width: auto;
        padding: 0px;
        font-size: 0.75em;
        visibility: hidden;
        max-width: 0.01px;
        opacity: 0;
        transition: max-width 50ms cubic-bezier(0, 0, 0.2, 1);
      }
    }
  }
  /* Active Style */

  &.active {
    border-color: var(--textfield-active-color);
    &.outlined {
      border-top-color: transparent;
    }
    .content {
      & + fieldset {
        border-width: 2px;
        border-color: var(--textfield-active-color);
        legend {
          padding: 0px calc(var(--textfield-input-base-padding) / 2);
          font-size: 0.75em;
          visibility: visible;
          max-width: 100%;
          color: var(--textfield-active-color);
        }
      }
      label {
        color: var(--textfield-active-color);
        transform: translateY(calc(var(--textfield-input-base-padding) * -1.2));
        font-size: ${({ size = 16 }) => (size / 4) * 3}px;
      }
    }

    &.filled .content {
      label {
        transform: translateY(calc(var(--textfield-input-base-padding) * -1));
      }
    }
  }
`;

type Props = {
  label: string;
  htmlFor: string;
  prefix: string;
  startAdornment: React.ReactNode;
  endAdornment: React.ReactNode;
  isFocused: boolean;
  isActive: boolean;
  className: string;
  mode?: "outlined" | "filled";
  size: number;
};
const FieldBase: React.FC<Props> = ({
  label,
  prefix,
  children,
  startAdornment,
  endAdornment,
  isFocused,
  isActive,
  mode = "outlined",
  size = 14,
  htmlFor,
}) => (
  <TextFieldBase
    overflow="visible"
    className={clsx({ active: isFocused || isActive }, mode)}
    size={size}
  >
    <div className={"leading"}>{startAdornment}</div>
    <div className={"content"}>
      <label htmlFor={htmlFor}>{label}</label>
      {children}
    </div>
    {mode === "outlined" && (
      <fieldset>
        <legend>{label}</legend>
      </fieldset>
    )}
    <div className={"trailing"}>{endAdornment}</div>
  </TextFieldBase>
);
export default FieldBase;
