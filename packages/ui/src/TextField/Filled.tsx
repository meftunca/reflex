import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

export const TextFieldFilledActive = (prefix: string) => css`
  /* background-color: black; */
  padding-bottom: calc(var(--textfield-input-base-padding));
  &:focus + label,
  label:active {
    color: var(--textfield-active-color);
    transform: translate(
        calc(var(--textfield-input-base-padding) / 2 * -1),
        calc(var(--textfield-input-base-padding) * -1)
      )
      scale(0.75);
  }
  &:focus + label + .text-field-line-ripple {
    background-color: rgba(var(--textfield-active-color, black), 0.2);

    &::after {
      left: 0%;
      width: 100%;
      opacity: 1;
      background-color: var(--textfield-active-color);
    }
  }
`;

const FilledLabel = styled.label`
  flex: 1;
  pointer-events: none;
  padding: calc(var(--textfield-input-base-padding))
    calc(var(--textfield-input-base-padding) / 2);
  left: calc(
    var(--textfield-adornment-start-width) + var(--textfield-input-base-padding) /
      2
  );
  /* top: calc(var(--textfield-input-base-padding) ); */
  top: 0;
  position: absolute;
  /* bottom: var(--textfield-input-base-padding); */
  transition: color, transform 0.2s ease-in-out;
  color: rgba(var(--textfield-color), 0.6);
`;
const TextFieldFilledBase = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;

  &::before {
    content: " ";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.3;
    height: 1px;
    transition: all 0.125s cubic-bezier(0.175, 0.385, 0.575, 1);
    background-color: var(--textfield-color);
  }
  &::after {
    content: " ";
    position: absolute;
    left: 50%;
    right: 0;
    bottom: 0;
    width: 0;
    opacity: 0.3;
    height: 2px;
    transition: all 0.125s cubic-bezier(0.175, 0.385, 0.575, 1);
    background-color: var(--textfield-color);
  }
`;

type Props = { label: string; prefix: string };
const TextFieldFilled: React.FC<Props> = ({ label, prefix, children }) => (
  <>
    <FilledLabel>{label}</FilledLabel>
    {children}
    <TextFieldFilledBase className={"text-field-line-ripple"} />
  </>
);
export default TextFieldFilled;
