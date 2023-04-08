import React from "react";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Color from "../../Components/Color/Color";
import styles from "./Sidebar.module.scss";
function Sidebar() {
  return (
    <>
      <aside>
        <Header />
        <Navbar />
        <Color />
      </aside>
    </>
  );
}

export default Sidebar;
