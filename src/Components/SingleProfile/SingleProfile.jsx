import React from "react";
import Profile from "../Profile/Profile";
import Chart from "../Chart/Chart";
import UserList from "../UserList/UserList";
function SingleProfile() {
  return (
    <>
      <div className="profile-sec">
        <Profile />
        <Chart aspect={3 / 1} title="User Spending (Last 6 month)" />
      </div>
      <UserList title="Last Transaction" />
    </>
  );
}

export default SingleProfile;
