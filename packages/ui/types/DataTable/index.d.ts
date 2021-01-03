import React from "react";
declare type TableOptions = {
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
declare type TableProps = {
    options: TableOptions;
    data: never[];
    columns: never[];
};
declare const DataTable: React.FC<TableProps>;
export default DataTable;
