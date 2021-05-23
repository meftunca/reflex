import styled from "@emotion/styled";
import React from "react";
import CardHeaderBase from "@re-flex/styled/src/Card/CardHeader";
import Text, { TextProps } from "@re-flex/styled/src/Typography";
import SXBase, { SXBaseProps } from "@re-flex/styled/src/SX";
import { useTheme } from "@emotion/react";

export type CardHeaderProps = SXBaseProps & {
  avatar?: React.ReactNode;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  actions?: React.ReactNode;
  titleProps?: TextProps;
  subtitleProps?: TextProps;
};

const CardHeader: React.FC<CardHeaderProps> = ({
  avatar,
  title,
  subtitle,
  actions,
  titleProps = {},
  subtitleProps = {},
  ...props
}) => {
  const { prefix } = useTheme();
  return (
    <CardHeaderBase {...props}>
      {avatar}
      <SXBase className={prefix + "-card-header-text-group"}>
        {typeof title === "string" ? (
          <Text
            // data-role="title"
            {...{ variant: "subtitle2", tag: "h6", ...titleProps }}
          >
            {title}
          </Text>
        ) : (
          title
        )}
        {typeof subtitle === "string" ? (
          <Text
            // data-role="description"
            {...{ variant: "caption", as: "span", ...subtitleProps }}
          >
            {subtitle}
          </Text>
        ) : (
          subtitle
        )}
      </SXBase>
      {actions}
    </CardHeaderBase>
  );
};

CardHeader.displayName = "Card.Header";

export default CardHeader;
