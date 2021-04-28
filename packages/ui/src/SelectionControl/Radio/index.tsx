import { css, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { darken, transparentize } from "color2k";

const RadioStyled = styled.label(
  ({ theme: { transitions, palette } }) => css`
    --radio-btn-transition: ${transitions.duration.shortest}ms
      ${transitions.easing.sharp};
    --radio-btn-size: 40px;
    --radio-btn-passive-color: ${palette.text.secondary};
    --radio-btn-disabled-color: ${palette.grey[300]};
    --radio-btn-disabled-active-color: ${darken(palette.primary.main, 0.1)};
    --radio-btn-active-color: ${palette.primary.main};
    --radio-btn-span-color: ${palette.background.paper};
    --radio-btn-span-passive-color: ${transparentize(
      darken(palette.background.paper, 0.2),
      0.8
    )};
    z-index: 0;
    position: relative;
    display: inline-block;
    color: rgba(var(--radio-btn-passive-color, 0, 0, 0), 0.87);

    > input {
      appearance: none;
      z-index: -1;
      position: absolute;
      left: calc(var(--radio-btn-size) / 4 * -1); // -10px;
      top: calc(var(--radio-btn-size) / 5 * -1); //-8
      display: block;
      margin: 0;
      border-radius: 50%;
      width: var(--radio-btn-size);
      height: var(--radio-btn-size);
      background-color: rgba(var(--radio-btn-passive-color, 0, 0, 0), 0.6);
      outline: none;
      opacity: 0;
      transform: scale(1);
      pointer-events: none;
      transition: opacity var(--radio-btn-transition),
        transform var(--radio-btn-transition);
      &:active {
        opacity: 1;
        transform: scale(0);
        transition: transform var(--radio-btn-transition),
          opacity var(--radio-btn-transition);

        + span::before {
          border-color: var(--radio-btn-active-color);
        }
      }

      &:disabled {
        opacity: 0;

        + span {
          color: rgba(var(--radio-btn-passive-color, 0, 0, 0), 0.38);
          cursor: initial;

          &::before {
            border-color: currentColor;
          }

          &::after {
            background-color: currentColor;
          }
        }
      }
      &:checked {
        background-color: var(--radio-btn-active-color);
        + span {
          &::before {
            border-color: var(--radio-btn-active-color);
          }

          &::after {
            transform: translate(5px, 5px) scale(1);
          }
        }
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
        margin: 2px 10px 2px 0;
        border: solid 2px;

        /* Safari */
        border-color: rgba(var(--radio-btn-passive-color, 0, 0, 0), 0.6);
        border-radius: 50%;
        width: calc(var(--radio-btn-size) / 2);
        height: calc(var(--radio-btn-size) / 2);
        vertical-align: top;
        transition: border-color var(--radio-btn-transition);
      }

      &::after {
        content: "";
        display: block;
        position: absolute;
        top: calc(var(--radio-btn-size) / 20);
        left: 0;
        border-radius: 50%;
        width: calc(var(--radio-btn-size) / 4);
        height: calc(var(--radio-btn-size) / 4);
        background-color: var(--radio-btn-active-color);
        transform: translate(5px, 5px) scale(0);
        transition: transform var(--radio-btn-transition);
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
