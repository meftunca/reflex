import { Button, styled } from "@re-flex/ui";
import React from "react";
export const ButtonProps: React.FC<typeof Button> = () => <></>;

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
  <>
    {/* <svg
      width="360"
      height="56"
      viewBox="0 0 360 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M216 0C216 19.8823 199.882 36 180 36C160.118 36 144 19.8823 144 0H0V56H360V0H216Z"
        fill="black"
      />
    </svg> */}
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
  </>
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
