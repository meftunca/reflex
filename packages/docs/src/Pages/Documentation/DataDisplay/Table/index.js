import React from "react";
import makeData from "./makeData";
import { DataTable, Box } from "@re-flex/ui";

function App() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
          },
          {
            Header: "Last Name",
            accessor: "lastName",
          },
        ],
      },
      {
        Header: "Info",
        columns: [
          {
            Header: "Age",
            accessor: "age",
          },
          {
            Header: "Visits",
            accessor: "visits",
          },
          {
            Header: "Status",
            accessor: "status",
          },
          {
            Header: "Profile Progress",
            accessor: "progress",
          },
        ],
      },
    ],
    []
  );

  const data = React.useMemo(() => {
    const generatedData = makeData(100);

    console.log("data", generatedData);
    return generatedData;
  }, []);

  return (
    <Box bgColor="paper" radius={4} shadow={1}>
      <DataTable columns={columns} data={data} />
    </Box>
  );
}

export default App;
