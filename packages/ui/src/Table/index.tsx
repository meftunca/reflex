import React from "react";
import TableContainer from "./Table";
import TableBody from "./TableBody";
import TableBodyCell from "./TableBodyCell";
import TableFooter from "./TableFooter";
import TableHead from "./TableHead";
import TableHeadCell from "./TableHeadCell";
import TableRow from "./TableRow";

type TableChild = {
  THead: typeof TableHead;
  Th: typeof TableHeadCell;
  TBody: typeof TableBody;
  Tr: typeof TableRow;
  Td: typeof TableBodyCell;
  TFoot: typeof TableFooter;
};
type Props = {
  variant?: "bordered" | "splitted";
};

const Table: React.FC<Props> & TableChild = ({ children, ...rest }) => {
  return <TableContainer {...rest}>{children}</TableContainer>;
};

Table.THead = TableHead;
Table.Th = TableHeadCell;
Table.TBody = TableBody;
Table.Tr = TableRow;
Table.Td = TableBodyCell;
Table.TFoot = TableFooter;

export default Table;
