import React from "react";
import MainNavbar from "./MainNavbar";
import MainContent from "./MainContent";

function Mainbar() {
  return (
    <>
      <div className="container">
        <MainNavbar />
        <MainContent />
      </div>
    </>
  );
}

export default Mainbar;
