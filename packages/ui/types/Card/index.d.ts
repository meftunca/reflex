import React from "react";
import CardContent from "@re-flex/styled/src/Card/CardContent";
import CardFooter from "@re-flex/styled/src/Card/CardFooter";
import CardHeader from "@re-flex/styled/src/Card/CardHeader";
import CardRow from "@re-flex/styled/src/Card/CardRow";
import { BoxProps } from "../Box";
declare type Props = BoxProps & {};
interface SubComponents {
    Row: typeof CardRow;
    Content: typeof CardContent;
    Footer: typeof CardFooter;
    Header: typeof CardHeader;
}
declare const Card: React.FC<Props> & SubComponents;
export default Card;
