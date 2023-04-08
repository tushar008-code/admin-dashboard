import React from "react";
import Widget from "../Widgets/Widget";
import ChartSection from "../ChartSection/chartSection";

function MainContent() {
  return (
    <div className="main-content">
      <Widget />
      <ChartSection />
    </div>
  );
}

export default MainContent;
