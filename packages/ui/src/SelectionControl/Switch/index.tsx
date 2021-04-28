// import { useTheme } from "@emotion/react";
import { css, useTheme } from "../../utils/theme/styled";

import styled from "@emotion/styled";
import React from "react";

const numberORString = (value: number | string, suffix?: string) =>
  typeof value === "number" ? value + (suffix || "px") : value;
const SwitchStyled = styled.label(
  () => css`
    --switch-track-height: 14px;
    --switch-track-width: 32px;
    --switch-track-color: #eee;
    --switch-thumb-size: 20px;
    --switch-thumb-color: #fff;
    --switch-offset: calc(
      var(--switch-thumb-size) - var(--switch-track-height)
    );
    --switch-width: calc(var(--switch-track-width) + var(--switch-offset));
    --transition-duration: 200ms;
    --switch-transition: all var(--transition-duration) ease-in-out;
    --switch-theme-rgb: 26, 115, 232;
    --switch-theme-color: rgb(var(--switch-theme-rgb));
    --switch-box-shadow: 0 0 var(--switch-offset) #11111180;
    --switch-margin: 8px;
    position: relative;
    display: inline-flex;
    align-items: center;
    box-sizing: border-box;
    min-width: var(--switch-track-width);
    min-height: var(--switch-track-height);
    margin: var(--switch-margin);
    user-select: none;
    &.disabled {
      opacity: 0.5;
      pointer-events: none;
    }
    & > input,
    .toggle-switch-input {
      position: absolute;
      width: 0;
      height: 0;
      opacity: 0;
    }
    span {
      --switch-thumb-x: calc(
        (var(--switch-track-height) - var(--switch-track-width)) / 2
      );
      position: relative;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      width: var(--switch-track-width);
      height: var(--switch-track-height);
      margin: var(--switch-margin);
      user-select: none;
    }
    input:checked + span {
      --switch-thumb-x: calc(
        (var(--switch-track-width) - var(--switch-track-height)) / 2
      );
    }
    span::before {
      box-sizing: border-box;
      width: var(--switch-track-width);
      height: var(--switch-track-height);
      background: var(--switch-track-color);
      border: 1px solid var(--switch-theme-color);
      border-radius: var(--switch-track-height);
      opacity: 0.5;
      transition: var(--switch-transition);
      content: "";
    }
    input:checked + span::before {
      background: var(--switch-theme-color);
    }
    span::after {
      position: absolute;
      box-sizing: border-box;
      width: var(--switch-thumb-size);
      height: var(--switch-thumb-size);
      background: var(--switch-thumb-color);
      border-radius: 50%;
      box-shadow: var(--switch-box-shadow);
      transform: translateX(var(--switch-thumb-x));
      transition: var(--switch-transition);
      content: "";
    }
    input:checked + span::after {
      background: var(--switch-theme-color);
    }
    input:focus + span::after,
    input:hover > span::after {
      box-shadow: var(--switch-box-shadow),
        0 0 0 calc(var(--switch-thumb-size) / 2)
          rgba(var(--switch-theme-rgb), 0.2);
    }
  `,
  (props: any) => {
    let obj = {};

    if (props.size) obj["--switch-thumb-size"] = numberORString(props.size);
    if (props.width) obj["--switch-track-width"] = numberORString(props.width);
    if (props.height)
      obj["--switch-track-height"] = numberORString(props.height);
    return obj;
  }
);

type Props = {
  colorDepth?: "light" | "main" | "dark";
  width?: number;
  height?: number;
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
  // icon?: React.ReactNode;
};
const Switch: React.FC<Props> = ({
  size = 24,
  color = "primary",
  width,
  height,
  colorDepth = "main",
  children,
  // icon,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <SwitchStyled
      role="switch"
      className={[theme.prefix + "-switch"].filter(Boolean).join(" ")}
      size={size}
      width={width}
      height={height}
      color={color}
      colorDepth={colorDepth}
    >
      <input {...rest} type="checkbox" onChange={(v) => v} />
      <span></span>
    </SwitchStyled>
  );
};

export default Switch;
