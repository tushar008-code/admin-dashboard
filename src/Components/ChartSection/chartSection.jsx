import React from "react";
import Chart from "../Chart/Chart";
import Featured from "../Featured/Featured";

function chartSection() {
  return (
    <>
      <div className="chart-section">
        <Featured />
        <Chart />
      </div>
    </>
  );
}

export default chartSection;
