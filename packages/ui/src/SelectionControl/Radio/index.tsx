import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";

const RadioStyled = styled.label();

export type RadioProps = {
  defaultChecked?: boolean;
  checked?: boolean;
  onChangeState?: (e: boolean) => void;
};

const Radio: React.FC<RadioProps> = ({
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
