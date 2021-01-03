import React from "react";
import CardContent from "./Styled/CardContent";
import CardFooter from "./Styled/CardFooter";
import CardHeader from "./Styled/CardHeader";
import CardRow from "./Styled/CardRow";
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
