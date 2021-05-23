import React from "react";
import CardWrapper from "@re-flex/styled/src/Card/CardWrapper";
import CardContent from "@re-flex/styled/src/Card/CardContent";
import CardFooter from "@re-flex/styled/src/Card/CardFooter";
import CardHeader from "@re-flex/styled/src/Card/CardHeader";
import CardRow from "@re-flex/styled/src/Card/CardRow";
import { BoxProps } from "../Box";
import clsx from "clsx";
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
      className={clsx(`${theme?.prefix || "reflex"}-card`, className)}
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
