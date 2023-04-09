import React from "react";
import MainNavbar from "../../Components/Mainbar/MainNavbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import NewUser from "../../Components/NewUser/NewUser";

function New({ inputs, title }) {
  return (
    <>
      <main className="grid-2">
        <Sidebar />
        <div className="container">
          <MainNavbar />
          <NewUser inputs={inputs} title={title} />
        </div>
      </main>
    </>
  );
}

export default New;
