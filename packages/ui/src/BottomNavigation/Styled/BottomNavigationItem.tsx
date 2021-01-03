import styled from "@emotion/styled";
import React from "react";
import Button, { Props as ButtonProps } from "../../Button";
import Text from "../../Typography";

const BottomNavigationItemBase = styled(Button)<{
  direction?: "column" | "column-reverse" | "row" | "row-reverse";
  role?: "tab" | "bottom-navigation";
}>(({ direction = "row", role = "tab" }) => {
  return `
    flex: 1 1 100%;
    // flex: ${role === "tab" ? "1" : "1 1 100%"};
    display: flex;
    flex-direction: ${direction};
    align-items: center;
    align-content: center;
    justify-content: center;
    background-color: transparent;
    position: relative;
    border-radius: 0;
    margin: 0;
    height: inherit;
    transition: all 0.15s ease-in-out;

    // .reflex-typography {
    //   font-size: 12px;
    // }

    svg {
      transition: all 0.15s ease-in-out;
      font-size: 0.875rem;
      margin: ${direction === "column-reverse" ? "0.5rem" : "0"}
        ${direction === "row" ? "0.5rem" : "0"}
        ${direction === "column" ? "0.5rem" : "0"}
        ${direction === "row-reverse" ? "0.5rem" : "0"};
    }
    // &.active {
    //   .reflex-typography {
    //     font-size: 14px;
    //   }
    //   svg {
    //     font-size: 1.2rem;
    //     width: 1.2rem;
    //     height: 1.2rem;
    //   }
    // }
    > * {
      color: currentColor;
    }
  `;
});

type Props = ButtonProps & {
  icon?: React.ReactNode;
  noLabel?: boolean;
  label?: string | number;
  direction?: "column" | "column-reverse" | "row" | "row-reverse";
  role?: "tab" | "bottom-navigation";
  activeColor?: ButtonProps["color"];
  passiveColor?: ButtonProps["color"];
  active: boolean;
};

const BottomNavigationItem: React.FC<Props> = ({
  icon,
  noLabel,
  children,
  label,
  activeColor = "primary",
  passiveColor,
  active,
  ...rest
}) => {
  const child = label || children;
  return (
    <BottomNavigationItemBase
      color={active ? activeColor : passiveColor}
      variant="text"
      className={active ? "active" : ""}
      affixIcon={icon}
      {...rest}
    >
      <Text variant="button">{child}</Text>
    </BottomNavigationItemBase>
  );
};

export default BottomNavigationItem;
