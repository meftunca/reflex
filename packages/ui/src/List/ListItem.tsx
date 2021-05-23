/** @jsx jsx */

import React, { CSSProperties } from "react";
import Ripple, { Props as RippleProps } from "../Ripple";
import Text from "../Typography";
import StyledListItem from "./Styled/listItem.styled";
import { useTheme, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import clsx from "clsx";
export type Props = React.HTMLProps<HTMLElement> & {
  /** OnLongPress */
  // onLongPress?: () => void;
  // longPressDelay?: number;
  title: React.ReactNode;
  description?: React.ReactNode;
  colorDepth?: "light" | "main" | "dark";
  leftItem?: React.ReactNode;
  rightItem?: React.ReactNode;
  fullWidth?: boolean;
  size?: number;
  button?: boolean;
  color?:
    | "primary"
    | "secondary"
    | "error"
    | "warning"
    | "info"
    | "success"
    | string;
  rippleProps?: RippleProps;
  className?: string | string[];
  style?: CSSProperties;
};

/*

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

*/

const ListItemContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ListItemLeftContent = styled.div`
  margin-right: 1rem;
  z-index: 9;
`;

const ListItemRightContent = styled.div`
  margin-left: 1rem;
  z-index: 9;
`;

const ListItem: React.FC<Props> = ({
  children,
  className,
  rippleProps = {},
  colorDepth = "main",
  leftItem,
  rightItem,
  size = 1,
  title,
  description,
  ...rest
}) => {
  const theme = useTheme();
  return (
    //@ts-ignore
    <StyledListItem
      className={clsx(theme.prefix + "-list-item", className)}
      colorDepth={colorDepth}
      size={size}
      {...rest}
    >
      {leftItem && (
        <ListItemLeftContent
          className={theme.prefix + "-list-item-left-content"}
        >
          {leftItem}
        </ListItemLeftContent>
      )}
      <ListItemContent className={theme.prefix + "-list-item-content"}>
        <Text
          color="text.primary"
          variant="subtitle2"
          tag="span"
          gutter={description ? [0, 0, 8, 0] : 0}
        >
          {title}
        </Text>
        {description && (
          <Text color="text.secondary" variant="caption" tag="span">
            {description}
          </Text>
        )}
      </ListItemContent>
      {rightItem && (
        <ListItemRightContent
          className={theme.prefix + "-list-item-right-content"}
        >
          {rightItem}
        </ListItemRightContent>
      )}
      {rippleProps && rest.button && <Ripple {...rippleProps} />}
    </StyledListItem>
  );
};

export default ListItem;
