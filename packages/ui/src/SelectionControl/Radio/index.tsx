import { useTheme } from "@emotion/react";
import React, { useEffect, useState } from "react";
import RadioStyled, {
  RadioStyledProps,
} from "@re-flex/styled/src/FormSelection/Radio/Root";

const Radio: React.FC<RadioStyledProps> = ({
  checked,
  defaultChecked = false,
  onChangeState,
}) => {
  const [state, setState] = useState<boolean>(checked || defaultChecked);
  useEffect(() => {
    if (checked && checked !== state) setState(checked);
  }, [checked]);
  const theme = useTheme();
  return (
    <RadioStyled role="radio" className={theme.prefix + "-radio-btn"}>
      <input
        type="radio"
        onChange={() =>
          onChangeState ? onChangeState(!state) : setState(!state)
        }
        checked={state}
      />
      <span></span>
    </RadioStyled>
  );
};

export default Radio;
