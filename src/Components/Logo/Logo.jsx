import React from "react";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <>
      <Link to="/" className="logo">
        <h1>Dashboard</h1>
      </Link>
    </>
  );
}

export default Logo;
