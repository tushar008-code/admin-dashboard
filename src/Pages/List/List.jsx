import React from "react";

import MainNavbar from "../../Components/Mainbar/MainNavbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import DataTable from "../../Components/DataTable/DataTable";

function Home() {
  return (
    <>
      <main className="grid-2">
        <Sidebar />
        <div className="container">
          <MainNavbar />
          <DataTable />
        </div>
      </main>
    </>
  );
}

export default Home;
