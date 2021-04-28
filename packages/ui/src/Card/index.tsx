import React from "react";
import CardWrapper from "./Styled/CardWrapper";
import CardContent from "./Styled/CardContent";
import CardFooter from "./Styled/CardFooter";
import CardHeader from "./Styled/CardHeader";
import CardRow from "./Styled/CardRow";
import { BoxProps } from "../Box";
import { cx } from "@emotion/css";
type Props = BoxProps & {};

interface SubComponents {
  Row: typeof CardRow;
  Content: typeof CardContent;
  Footer: typeof CardFooter;
  Header: typeof CardHeader;
}

const Card: React.FC<Props> & SubComponents = ({
  className,
  theme,
  children,
  ...props
}) => {
  return (
    <CardWrapper
      className={cx(`${theme?.prefix || "reflex"}-card`, className)}
      {...props}
    >
      {children}
    </CardWrapper>
  );
};

Card.displayName = "Card";
Card.Row = CardRow;
Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Header = CardHeader;

export default Card;
