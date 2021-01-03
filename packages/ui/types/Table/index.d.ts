import React from "react";
import TableBody from "./TableBody";
import TableBodyCell from "./TableBodyCell";
import TableFooter from "./TableFooter";
import TableHead from "./TableHead";
import TableHeadCell from "./TableHeadCell";
import TableRow from "./TableRow";
declare type TableChild = {
    THead: typeof TableHead;
    Th: typeof TableHeadCell;
    TBody: typeof TableBody;
    Tr: typeof TableRow;
    Td: typeof TableBodyCell;
    TFoot: typeof TableFooter;
};
declare type Props = {
    variant?: "bordered" | "splitted";
};
declare const Table: React.FC<Props> & TableChild;
export default Table;
