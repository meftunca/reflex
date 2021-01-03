import React from "react";
import Item, { Props } from "./ListItem";
//import useTheme from "@Utils/hooks/useTheme";
const List: React.FC<{}> & ListSubComponents = ({ children }) => {
  return <ul>{children}</ul>;
};
interface ListSubComponents {
  Item: React.FC<Props>;
}
List.Item = Item;
export default List;
