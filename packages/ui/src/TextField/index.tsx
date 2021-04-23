/** @jsx jsx */
import { jsx, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import * as React from "react";
import { useState } from "react";
import { useMemo } from "react";
import Box, { BoxProps } from "../Box";
import ButtonBase from "../ButtonBase";
import { mergeClassNames } from "../utils/helpers/stringFormat";
import useMeasure from "../utils/hooks/useMeasure";
import FieldBase from "./FieldBase";
import TextFieldFilled from "./Filled";
import InputBase from "./InputBase";
import TextFieldOutlined from "./Outlined";

// Create Wrapper Component
const TextFieldBase = styled(Box)((theme) => ({
  display: "flex",
  padding: theme.spacing,
  alignItems: "center",
}));

/** A TextField with a configurable any think. */
export type InputProps = {
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
};

const TextField: React.FC<InputProps> = ({
  variant = "filled",
  startAdornment,
  endAdornment,
  tag = "input",
  size = 16,
  label = "TextField",
  fieldProps = {},
  readOnly = false,
  value,
  onChange,
  disabled = false,
  inputProps,
  htmlFor = Number(Date.now()).toString(16),
  wrapperClassName,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const theme = useTheme();
  const TextFieldEffectBase = useMemo(
    () => (variant === "filled" ? TextFieldFilled : TextFieldOutlined),
    [variant]
  );
  return (
    <TextFieldBase
      className={mergeClassNames(
        theme.prefix + "-textfield",
        theme.prefix + "-textfield-" + variant
      )}
      overflow="visible"
      {...fieldProps}
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
          typeof value === "undefined" || value === null
            ? false
            : typeof value === "string"
            ? value?.length > 0
            : true
        } //label'ı aktif eder
      >
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
          //@ts-ignore
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
