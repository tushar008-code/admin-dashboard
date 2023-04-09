import React from "react";
import MainNavbar from "../../Components/Mainbar/MainNavbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import SingleProfile from "../../Components/SingleProfile/SingleProfile";

function Single() {
  return (
    <>
      <main className="grid-2">
        <Sidebar />
        <div className="container">
          <MainNavbar />
          <SingleProfile />
        </div>
      </main>
    </>
  );
}

export default Single;
