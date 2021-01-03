import DefaultTheme from "../../../utils/theme/defaultTheme";
import { css } from "@emotion/react";
const ListItemLineVariables = ({
  prefix,
  transitions,
}: typeof DefaultTheme) => {
  const transitionTiming = `${transitions.duration.shorter}ms ${transitions.easing.easeInOut}`;
  return `
    .${prefix}-list-item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      overflow: hidden;
      position: relative;
      transition: all ${transitionTiming};
      padding: var(--list-item-padding);
      font-size: var(--list-item-font-size);
      background-color: var(--list-item-background-color);

   
      .${prefix}-list-item-content {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
      }
      .${prefix}-list-item-left-content {
        margin-right: 1rem;
        z-index: 9;
      }
      .${prefix}-list-item-right-content {
        margin-left: 1rem;
        z-index: 9;
      }
    }
  `;
};

const ListItemLineInitial = ({ prefix }: typeof DefaultTheme) =>
  css`
    .${prefix}-list-item {
      --list-item-padding: 12px 24px;
      --list-item-font-size: 14px;
      --list-item-background-color: transparent;
    }
  `;

export default { ListItemLineVariables, ListItemLineInitial };
