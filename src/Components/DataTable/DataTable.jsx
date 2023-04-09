import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "./DatatableData";
import { Link } from "react-router-dom";

function DataTable() {
  const action = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell() {
        return (
          <>
            <ul className="cellAction">
              <li>
                <button className="viewButton">View</button>
              </li>
              <li>
                <button className="deleteButton">delete</button>
              </li>
            </ul>
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="data-grid">
        <h3>
          List of Users <Link to="/users/new">Add User</Link>
        </h3>
        <div style={{ height: "600px" }}>
          <DataGrid
            rows={userRows}
            columns={userColumns.concat(action)}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
          />
        </div>
      </div>
    </>
  );
}

export default DataTable;
