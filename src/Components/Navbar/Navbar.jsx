import React from "react";
import { AiFillSetting } from "react-icons/ai";
import { ImStatsBars2 } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { BsFileSpreadsheetFill } from "react-icons/bs";
import { BiStats } from "react-icons/bi";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { AiFillNotification } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="nav-items">
        <h3 className="nav-title">Main</h3>
        <ul>
          <li>
            <Link to="/">
              <ImStatsBars2 /> Dashboard
            </Link>
          </li>
        </ul>
        <h3 className="nav-title">List</h3>
        <ul>
          <li>
            <Link to="/users">
              <FaUserAlt /> Users
            </Link>
          </li>
          <li>
            <Link to="/products">
              <MdProductionQuantityLimits /> Products
            </Link>
          </li>
          <li>
            <Link to="/products/1">
              <BsFileSpreadsheetFill /> Order
            </Link>
          </li>
          <li>
            <Link to="/products/new">
              <FaTruck /> Add Product
            </Link>
          </li>
        </ul>
        <h3 className="nav-title">Usefull</h3>
        <ul>
          <li>
            <Link to="/">
              <BiStats /> Stats
            </Link>
          </li>
          <li>
            <Link to="/">
              <AiFillNotification /> Notification
            </Link>
          </li>
        </ul>
        <h3 className="nav-title">User</h3>
        <ul>
          <li>
            <Link to="/">
              <FaUserCircle /> Profile
            </Link>
          </li>
          <li>
            <Link to="/">
              <AiFillSetting /> Settings
            </Link>
          </li>
          <li>
            <Link to="/login">
              <RiLogoutBoxRFill /> Logout
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
