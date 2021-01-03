import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useMemo } from "react";

const CheckboxStyled = styled.label((props: any) => {
  let obj = {};

  if (props.size)
    obj["--checkbox-size"] =
      typeof props.size === "number" ? props.size + "px" : props.size;
  return obj;
});

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
