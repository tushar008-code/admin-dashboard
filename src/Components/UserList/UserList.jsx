import React from "react";
import UserTable from "../UserTable/UserTable";

function UserList({ title }) {
  return (
    <>
      <div className="user-List">
        <h3>{title}</h3>
        <UserTable />
      </div>
    </>
  );
}

export default UserList;
