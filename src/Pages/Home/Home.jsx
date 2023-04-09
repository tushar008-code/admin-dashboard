import React from "react";

import Mainbar from "../../Components/Mainbar/Mainbar";
import Sidebar from "../../Components/Sidebar/Sidebar";

function Home() {
  return (
    <>
      <main className="grid-2">
        <Sidebar />
        <Mainbar />
      </main>
    </>
  );
}

export default Home;
