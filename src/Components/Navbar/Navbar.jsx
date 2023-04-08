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
function Navbar() {
  return (
    <>
      <nav className="nav-items">
        <h3 className="nav-title">Main</h3>
        <ul>
          <li>
            <a href="">
              <ImStatsBars2 /> Dashboard
            </a>
          </li>
        </ul>
        <h3 className="nav-title">List</h3>
        <ul>
          <li>
            <a href="">
              <FaUserAlt /> Users
            </a>
          </li>
          <li>
            <a href="">
              <MdProductionQuantityLimits /> Products
            </a>
          </li>
          <li>
            <a href="">
              <BsFileSpreadsheetFill /> Orders
            </a>
          </li>
          <li>
            <a href="">
              <FaTruck /> Delivary
            </a>
          </li>
        </ul>
        <h3 className="nav-title">Usefull</h3>
        <ul>
          <li>
            <a href="">
              <BiStats /> Stats
            </a>
          </li>
          <li>
            <a href="">
              <AiFillNotification /> Notification
            </a>
          </li>
        </ul>
        <h3 className="nav-title">User</h3>
        <ul>
          <li>
            <a href="">
              <FaUserCircle /> Profile
            </a>
          </li>
          <li>
            <a href="">
              <AiFillSetting /> Settings
            </a>
          </li>
          <li>
            <a href="">
              <RiLogoutBoxRFill /> Logout
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
