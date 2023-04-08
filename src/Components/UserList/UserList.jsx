import React from "react";
import UserTable from "../UserTable/UserTable";

function UserList() {
  return (
    <>
      <div className="user-List">
        <h3>Latest Transaction</h3>
        <UserTable />
      </div>
    </>
  );
}

export default UserList;
