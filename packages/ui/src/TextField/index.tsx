/** @jsx jsx */
import { jsx, useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import * as React from "react";
import { mergeClassNames } from "../utils/helpers/stringFormat";
import useMeasure from "../utils/hooks/useMeasure";
import TextFieldFilled from "./Filled";
import InputBase from "./InputBase";
import TextFieldOutlined from "./Outlined";

// Create Wrapper Component
const TextFieldBase = styled.div();

/** A TextField with a configurable any think. */
type Props = HTMLInputElement & {
  /** TextField Variant
   */
  variant?: "outlined" | "filled";
  /** TextField Start Adornment */
  startAdornment?: React.ReactNode;
  /** TextField End Adronment */
  endAdornment?: React.ReactNode;
  /** Textfield Custom Tag */
  tag?: "div" | "input" | "textarea";
  /** TextField Custom Size */
  size?: number;
  /** TextField label/placeholder */
  label?: string;
};

const TextField: React.FC<Props> = ({
  variant = "filled",
  startAdornment,
  endAdornment,
  tag = "input",
  size = 16,
  label = "TextField",
}) => {
  const theme = useTheme();
  const [startAdornmentRef, { width: startAdornmentWidth }] = useMeasure<
    HTMLDivElement
  >();
  const [endAdornmentRef, { width: endAdornmentWidth }] = useMeasure<
    HTMLDivElement
  >();
  const TextFieldEffectBase =
    variant === "filled" ? TextFieldFilled : TextFieldOutlined;
  return (
    <TextFieldBase
      className={mergeClassNames(
        theme.prefix + "-textfield",
        theme.prefix + "-textfield-" + variant
      )}
      css={{
        "--textfield-input-base-padding": size + "px",
        "--textfield-adornment-start-width": startAdornmentWidth + "px",
        "--textfield-adornment-end-width": endAdornmentWidth + "px",
      }}
    >
      {startAdornment && (
        <div
          className={theme.prefix + "-textfield-start-adornment"}
          ref={startAdornmentRef}
        >
          {startAdornment}
        </div>
      )}
      <InputBase
        as={tag}
        variant={variant}
        theme={theme}
        className={theme.prefix + "-input-base"}
        placeholder=" "
        {...(tag === "div" ? { contentEditable: true } : {})}
      />

      <TextFieldEffectBase label={label} prefix={theme.prefix} />

      {endAdornment && (
        <div
          className={theme.prefix + "-textfield-end-adornment"}
          ref={endAdornmentRef}
        >
          {endAdornment}
        </div>
      )}
    </TextFieldBase>
  );
};

export default TextField;
