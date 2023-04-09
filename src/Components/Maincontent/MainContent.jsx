import React from "react";
import Widget from "../Widgets/Widget";
import ChartSection from "../ChartSection/chartSection";
import UserList from "../UserList/UserList";

function MainContent() {
  return (
    <div className="main-content">
      <Widget />
      <ChartSection />
      <UserList title="Lastest Transaction" />
    </div>
  );
}

export default MainContent;
