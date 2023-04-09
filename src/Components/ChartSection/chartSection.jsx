import React from "react";
import Chart from "../Chart/Chart";
import Featured from "../Featured/Featured";

function chartSection() {
  return (
    <>
      <div className="chart-section">
        <Featured />
        <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
      </div>
    </>
  );
}

export default chartSection;
