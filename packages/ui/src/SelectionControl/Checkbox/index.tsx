import { useTheme } from "@emotion/react";
import React, { useMemo } from "react";
import CheckboxStyled, {
  CheckboxStyledProps,
} from "@re-flex/styled/src/FormSelection/Checkbox/Root";

const Checkbox: React.FC<CheckboxStyledProps> = ({
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
      className={theme.prefix + "-checkbox"}
      size={size}
    >
      <input id={id} type="checkbox" {...rest} />
      <span></span>
    </CheckboxStyled>
  );
};

export default Checkbox;
