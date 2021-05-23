/** @jsx jsx */
import { css, jsx, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import React, { useState } from "react";
import Box, { BoxProps } from "../Box";
import ButtonBase from "../ButtonBase";
import { mergeClassNames } from "../utils/helpers/stringFormat";
import FieldBase from "./FieldBase";
import InputBase from "./InputBase";

// Create Wrapper Component
const TextFieldBase = styled(Box)(
  ({ theme: { palette, transitions } }) => css`
    --textfield-helper-color: ${palette.text.secondary};
    --textfield-color: ${palette.text.primary};
    --textfield-active-color: ${palette.primary.main};
    --textfield-transitions: ${transitions.duration.shortest}ms
      ${transitions.easing.easeInOut};
    --textfield-border-color: #00000061;
    --textfield-input-base-padding: 16px;
    --textfield-adornment-start-width: 8px;
    --textfield-adornment-end-width: 8px;
    --textfield-padding-x: calc(var(--textfield-input-base-padding, 8px) / 4);
    --textfield-padding-y: calc(var(--textfield-input-base-padding, 8px) / 4);
    position: relative;
    justify-content: space-between;
    border-radius: 4px 4px 0 0;
    position: relative;
    display: flex;
    align-content: center;
    align-items: center;
    box-sizing: border-box;
    will-change: opacity, transform, color;
    transition: all 0.2s linear;
    border-radius: 4px;
    padding: 0; //calc(var(--textfield-input-base-padding) / 4);
  `
);

/** A TextField with a configurable any think. */
export type InputProps = BoxProps & {
  /** TextField Variant */
  fieldProps?: BoxProps;
  variant?: "outlined" | "filled";
  /** TextField Start Adornment */
  startAdornment?: React.ReactNode;
  /** TextField End Adronment */
  endAdornment?: React.ReactNode;
  /** Textfield Custom Tag */
  tag?: "div" | "input" | "textarea" | "button";
  /** TextField Custom Size */
  size?: number;
  /** TextField label/placeholder */
  label?: string;
  readOnly?: boolean;
  disabled?: boolean;
  value?: string | number | boolean;
  onChange?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  inputProps?: HTMLInputElement;
  htmlFor?: string;
  wrapperClassName: string;
  fullWidth: boolean;
};

const TextField: React.FC<InputProps> = ({
  variant = "filled",
  startAdornment,
  endAdornment,
  tag = "input",
  size = 14,
  label = "TextField",
  fieldProps = {},
  readOnly = false,
  value,
  onChange,
  disabled = false,
  inputProps,
  htmlFor = Number(Date.now()).toString(16),
  wrapperClassName,
  fullWidth,
  ...wrapperProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme();

  return (
    <TextFieldBase
      className={mergeClassNames(
        theme.prefix + "-textfield",
        theme.prefix + "-textfield-" + variant
      )}
      overflow="visible"
      css={css({ width: fullWidth ? "100%" : "auto" })}
      {...fieldProps}
      {...wrapperProps}
    >
      <FieldBase
        className={wrapperClassName}
        label={label}
        prefix={theme.prefix}
        startAdornment={startAdornment}
        endAdornment={endAdornment}
        mode={variant}
        isFocused={isFocused} // aktif rengi verir
        size={size}
        htmlFor={htmlFor}
        isActive={
          !value ? false : typeof value === "string" ? value?.length > 0 : true
        } //label'ı aktif eder
      >
        {/* @ts-ignore */}
        <InputBase
          as={tag === "button" ? ButtonBase : tag}
          variant={variant}
          theme={theme}
          className={theme.prefix + "-input-base"}
          size={size}
          id={htmlFor}
          placeholder=" "
          {...(tag === "div"
            ? {
                contentEditable: !readOnly && !disabled && true,
                children: value,
              }
            : tag === "input"
            ? { value }
            : { children: value })}
          onFocus={() => {
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          readOnly={readOnly}
          disabled={disabled}
          onChange={onChange}
          {...inputProps}
        />
      </FieldBase>
    </TextFieldBase>
  );
};

export default TextField;
