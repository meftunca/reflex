import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

const FormFieldBase = styled.div<FormFieldType>(({ direction, theme }) => {
  return {
    position: "relative",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
    flexDirection: direction,
  };
});

export type FormFieldType = Partial<HTMLDivElement> & {
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
};

const FormField: React.FC<FormFieldType> = ({
  children,
  direction = "row",
  ...props
}) => {
  // @ts-ignore
  return <FormFieldBase {...{ direction, ...props }}>{children}</FormFieldBase>;
};

export default FormField;
