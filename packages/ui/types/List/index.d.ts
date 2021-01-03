import React from "react";
import { Props } from "./ListItem";
declare const List: React.FC<{}> & ListSubComponents;
interface ListSubComponents {
    Item: React.FC<Props>;
}
export default List;
