/* @jsx jsx */
import { jsx } from "@emotion/react";
import { Button } from "@re-flex/ui";
import React, { Fragment } from "react";
export const ButtonProps: React.FC<typeof Button> = () => <Fragment></Fragment>;

const colors = {
  blue: "#0d6efd",
  indigo: "#6610f2",
  purple: "#6f42c1",
  pink: "#d63384",
  red: "#dc3545",
  orange: "#fd7e14",
  yellow: "#ffc107",
  green: "#28a745",
  teal: "#20c997",
  cyan: "#17a2b8",
  gray: "#6c757d",
  "gray-dark": "#343a40",
  primary: "#0d6efd",
  secondary: "#6c757d",
  success: "#28a745",
  info: "#17a2b8",
  warning: "#ffc107",
  danger: "#dc3545",
  dark: "#343a40",
};

export const GenerateButton = ({
  variant = "text",
}: {
  variant: "outlined" | "contained" | "text";
}) => (
  <Fragment>
    {Object.entries(colors).map(([name, color], k) => (
      <Button
        variant={variant}
        color={color}
        key={k}
        css={{ margin: ".5rem .25rem" }}
      >
        {name}
      </Button>
    ))}
  </Fragment>
);

export const GenerateButtonCodes = (
  variant: "outlined" | "contained" | "text"
) =>
  Object.entries(colors).map(
    ([name, color], k) =>
      `<Button variant="${variant}" color={${color}}>
        ${name}
      </Button>`
  );
