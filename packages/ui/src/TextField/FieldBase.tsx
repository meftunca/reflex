import styled from "@emotion/styled";
import React from "react";
import clsx from "clsx";
import Box, { BoxProps } from "../Box";
const TextFieldBase = styled(Box)<{ size: number }>`
  display: flex;
  place-items: center;
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 100%;
  padding: calc(var(--textfield-input-base-padding) / 2);
  border-bottom: 1px solid var(--textfield-border-color);
  transition: var(--textfield-transitions);

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
      transition: var(--textfield-transitions);
      color: rgba(var(--textfield-color), 0.6);
      display: inline-block;
      max-width: 100%;
      transform: translateY(0px);
      font-size: ${({ size = 14 }) => size}px;
      transform: translateY(
        calc(var(--textfield-input-base-padding, 14px) / 2)
      );
      transform-origin: left top;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: calc(100% - 24px);
    }
  }

  &.outlined {
    border-radius: 4px;
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
      transition: var(--textfield-transitions);
      legend {
        display: block;
        width: auto;
        padding: 0px;
        font-size: 0.75em;
        visibility: hidden;
        max-width: 0.01px;
        opacity: 0;
        transition: var(--textfield-transitions);
      }
    }
  }
  &.filled {
    &::before {
      content: " ";
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 1px;
      background-color: var(--textfield-active-color);
      transition: var(--textfield-transitions);
    }

    .reflex-input-base {
      padding-top: calc(var(--textfield-input-base-padding) / 2);
      padding-bottom: 2px;
    }
    label {
      transform: translateY(
        calc(var(--textfield-input-base-padding) / 2 - 2px)
      );
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
        transform: translateY(
          calc(var(--textfield-input-base-padding) * -1 - 2px)
        );
        font-size: ${({ size = 16 }) => (size / 4) * 3}px;
      }
    }

    &.filled {
      &::before {
        left: 0%;
        width: 100%;
        height: 1px;
        background-color: var(--textfield-active-color);
      }
      label {
        transform: translateY(
          calc(var(--textfield-input-base-padding) * -1 + 8px)
        );
      }
    }
  }
`;

type Props = BoxProps & {
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
  className,
  ...rest
}) => (
  <TextFieldBase
    overflow="visible"
    className={clsx({ active: isFocused || isActive }, mode, className)}
    size={size}
    {...rest}
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
