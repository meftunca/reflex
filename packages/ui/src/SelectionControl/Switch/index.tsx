import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

const numberORString = (value: number | string, suffix?: string) =>
  typeof value === "number" ? value + (suffix || "px") : value;
const SwitchStyled = styled.label((props: any) => {
  let obj = {};

  if (props.size) obj["--switch-thumb-size"] = numberORString(props.size);
  if (props.width) obj["--switch-track-width"] = numberORString(props.width);
  if (props.height) obj["--switch-track-height"] = numberORString(props.height);
  return obj;
});

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
