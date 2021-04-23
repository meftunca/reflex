/** @jsx jsx */

import React, { CSSProperties } from "react";
import Ripple, { Props as RippleProps } from "../Ripple";
import Text from "../Typography";
import StyledListItem from "./Styled/listItem.styled";
import { useTheme, jsx } from "@emotion/react";
export type Props = HTMLLIElement & {
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

const ListItem: React.FC<Props> = ({
  children,
  className,
  rippleProps = {},
  colorDepth = "main",
  leftItem,
  rightItem,
  size = 14,
  title,
  description,
  ...rest
}) => {
  const theme = useTheme();
  return (
    //@ts-ignore
    <StyledListItem
      className={[
        theme.prefix + "-list-item",
        Array.isArray(className) ? className.join(" ") : className,
      ].join(" ")}
      colorDepth={colorDepth}
      size={size}
      {...rest}
    >
      {leftItem && (
        <div className={theme.prefix + "-list-item-left-content"}>
          {leftItem}
        </div>
      )}
      <div className={theme.prefix + "-list-item-content"}>
        <Text
          // color="textPrimary"
          variant="subtitle1"
          tag="span"
          gutter={description ? [0, 0, 8, 0] : 0}
        >
          {title}
        </Text>
        {description && (
          <Text color="textSecondary" variant="body2" tag="span">
            {description}
          </Text>
        )}
      </div>
      {rightItem && (
        <div className={theme.prefix + "-list-item-right-content"}>
          {rightItem}
        </div>
      )}
      {rippleProps && rest.button && <Ripple {...rippleProps} />}
    </StyledListItem>
  );
};

export default ListItem;
