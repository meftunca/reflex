import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

export const TextFieldOutlinedActive = (prefix: string) => css`
  /* background-color: black; */
  &:focus + .${prefix}-textfield-notched-outline {
    .leading,
    .label,
    .trailing {
      border-width: 2px;
      border-color: var(--textfield-active-color);
    }
    .label {
      border-top-color: transparent;
      label {
        color: var(--textfield-active-color);
        transform: translateY(
            calc(
              var(--textfield-input-base-padding) * -1 -
                var(--textfield-input-base-padding) * 2 / 4
            )
          )
          scale(0.75);
      }
    }
  }
`;

const TextFieldOutlinedBase = styled.div`
  display: flex;
  position: relative;
  /* right: 0;
  left: 0; */
  width: 100%;
  max-width: 100%;
  height: 100%;
  pointer-events: none;

  .leading,
  .label,
  .label label,
  .trailing {
    transition: border-color 0.1s linear, color 0.1s linear,
      border-width 0.1s linear;
  }

  .leading {
    border-radius: 4px 0 0 4px;
    border: 1px solid var(--textfield-border-color);
    border-right: none;
    pointer-events: none;
    min-width: 8px;
    width: var(--textfield-adornment-start-width, 8px);
  }
  .label {
    flex: 0 0 auto;
    width: auto;
    max-width: calc(100% - 12px * 2);
    height: 100%;
    border-top: 1px solid var(--textfield-border-color);
    border-bottom: 1px solid var(--textfield-border-color);
    pointer-events: none;
    padding: calc(var(--textfield-input-base-padding))
      calc(var(--textfield-input-base-padding) / 2);
    label {
      transition: transform 0.2s ease-in-out;
      color: rgba(var(--textfield-color), 0.6);
      display: inline-block;
      position: relative;
      max-width: 100%;
      transform: translateY(0);
    }
  }
  .trailing {
    flex-grow: 1;
    border-radius: 0 4px 4px 0;
    border: 1px solid var(--textfield-border-color);
    border-left: none;
    height: 100%;
    pointer-events: none;
    min-width: 8px;
    width: var(--textfield-adornment-end-width, 8px);
  }
`;

type Props = {
  label: string;
  prefix: string;
  startAdornment: React.ReactNode;
  endAdornment: React.ReactNode;
};
const TextFieldOutlined: React.FC<Props> = ({
  label,
  prefix,
  children,
  startAdornment,
  endAdornment,
}) => (
  <TextFieldOutlinedBase className={prefix + "-textfield-notched-outline"}>
    <div className={"leading"}>{startAdornment}</div>
    <div className={"label"}>
      {children}
      <label>{label}</label>
    </div>
    <div className={"trailing"}>{endAdornment}</div>
  </TextFieldOutlinedBase>
);
export default TextFieldOutlined;
