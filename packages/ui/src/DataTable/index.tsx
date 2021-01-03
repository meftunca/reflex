/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import React, { useMemo } from "react";
import Table from "../Table";
import {
  useTable,
  useRowSelect,
  useSortBy,
  useFilters,
  usePagination,
  useGroupBy,
  useGlobalFilter,
  useResizeColumns,
  useBlockLayout,
} from "react-table";

const ArrowIcon = ({
  active = false,
  opacity = 0,
}: {
  active: boolean;
  opacity: number;
}) => (
  <svg
    style={{
      transition: "all .125s linear",
      transform: `rotate(${active ? 180 : 0}deg)`,
      opacity,
    }}
    stroke="currentColor"
    fill="none"
    strokeWidth="2"
    viewBox="0 0 24 24"
    strokeLinecap="round"
    strokeLinejoin="round"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="12" y1="5" x2="12" y2="19"></line>
    <polyline points="19 12 12 19 5 12"></polyline>
  </svg>
);

type TableOptions = {
  headerEnable?: boolean;
  footerEnable?: boolean;
  sortingEnable?: boolean;
  filterEnable?: boolean;
  paginationEnable?: boolean;
  rowSelctionEnable?: boolean;
  groupingEnable?: boolean;
  globalFilterEnable?: boolean;
  resizeEnable?: boolean;
};

type TableProps = {
  options: TableOptions;
  data: never[];
  columns: never[];
};
/**
 *  TODO Filtreleme için popup içnde search özelliği eklenecek
 *  TODO Satır seçme eklenecek
 *  TODO Pagination Yazılacak
 *  TODO Grouplama Özelliği eklenecek
 *
 */
const DataTable: React.FC<TableProps> = ({
  columns,
  data,
  options: {
    headerEnable = true,
    footerEnable,
    sortingEnable = true,
    filterEnable,
    paginationEnable = true,
    rowSelctionEnable,
    groupingEnable,
    globalFilterEnable,
    resizeEnable = true,
  } = {},
}) => {
  // Use the state and functions returned from useTable to build your UI
  const initialRules = useMemo(() => {
    const rules: any[] = [];
    if (sortingEnable) rules.push(useSortBy);
    if (filterEnable) rules.push(useFilters);
    if (globalFilterEnable) rules.push(useGlobalFilter);
    if (paginationEnable) rules.push(usePagination);
    if (rowSelctionEnable) rules.push(useRowSelect);
    if (groupingEnable) rules.push(useGroupBy);
    if (resizeEnable) {
      rules.push(useResizeColumns);
      rules.push(useBlockLayout);
    }

    return rules;
  }, [
    sortingEnable,
    filterEnable,
    paginationEnable,
    rowSelctionEnable,
    groupingEnable,
    globalFilterEnable,
    resizeEnable,
  ]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
  } = useTable(
    {
      columns: columns,
      data: data,
      // initialState: { pageIndex: 1 },
    },
    ...initialRules
  );
  // Render the UI for your table
  return (
    <Table {...getTableProps()}>
      {headerEnable === true && (
        <Table.THead>
          {headerGroups.map((headerGroup: any) => (
            <Table.Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <Table.Th
                  className={[
                    sortingEnable && column.getSortByToggleProps()
                      ? "th-sorting"
                      : "",
                  ].join(" ")}
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render("Header")}
                  {sortingEnable && (
                    <ArrowIcon
                      active={column.isSortedDesc}
                      opacity={column.isSorted ? 1 : 0}
                    />
                  )}
                  {resizeEnable && (
                    <div
                      {...column.getResizerProps()}
                      className={`resizer ${
                        column.isResizing ? "isResizing" : ""
                      }`}
                    />
                  )}
                </Table.Th>
              ))}
            </Table.Tr>
          ))}
        </Table.THead>
      )}
      <Table.TBody {...getTableBodyProps()}>
        {rows.slice(0, 10).map((row: any, i: number) => {
          prepareRow(row);
          return (
            <Table.Tr key={i} className="table-body-row" {...row.getRowProps()}>
              {row.cells.map((cell: any, k: number) => {
                const cellData = cell.render("Cell");
                return (
                  <Table.Td
                    key={k}
                    // className={"is-numeric"}
                    {...cell.getCellProps()}
                  >
                    {cellData}
                  </Table.Td>
                );
              })}
            </Table.Tr>
          );
        })}
      </Table.TBody>
      {footerEnable && (
        <Table.TFoot>
          {footerGroups.map((group: any, i: number) => (
            <tr key={i} {...group.getFooterGroupProps()}>
              {group.headers.map((column: any, k: number) => (
                <td key={k} {...column.getFooterProps()}>
                  {column.render("Footer")}
                </td>
              ))}
            </tr>
          ))}
        </Table.TFoot>
      )}
    </Table>
  );
};

export default DataTable;
