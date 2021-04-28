import styled from "@emotion/styled";
import React from "react";
import Text, { TextProps } from "../../Typography";
import SXBase, { SXBaseProps } from "../../Styled/SX";
import { useTheme } from "@emotion/react";

const CardHeaderBase = styled(SXBase)`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  > *:not(:last-child) {
    margin-right: 1rem;
  }
  > .${({ theme }) => theme.prefix + "-card-header-text-group"} {
    width: "100%";
    flex-grow: 1;
    margin: 0 ${({ theme: { space } }) => space.default + "px"};
  }
`;
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
  console.log(`avatar`, typeof title);
  return (
    <CardHeaderBase {...props}>
      {avatar}
      <SXBase className={prefix + "-card-header-text-group"}>
        {typeof title === "string" ? (
          <Text
            data-role="title"
            {...{ variant: "subtitle2", tag: "h6", ...titleProps }}
          >
            {title}
          </Text>
        ) : (
          title
        )}
        {typeof subtitle === "string" ? (
          <Text
            data-role="description"
            {...{ variant: "caption", tag: "span", ...subtitleProps }}
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
