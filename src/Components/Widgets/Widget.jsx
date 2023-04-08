import React from "react";
import WidgetCard from "./WidgetCard.jsx";
function Widgets() {
  return (
    <>
      <div className="widget">
        <WidgetCard type="user" />
        <WidgetCard type="order" />
        <WidgetCard type="earning" />
        <WidgetCard type="balance" />
      </div>
    </>
  );
}

export default Widgets;
