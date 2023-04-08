import React from "react";
import { BsSearch } from "react-icons/bs";
import { CiDark } from "react-icons/ci";
import { FiGlobe } from "react-icons/fi";
import { MdOutlineLightMode } from "react-icons/md";
import { BiExitFullscreen } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { BiMessageAlt } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import profileImg from "../../assets/profile.jpeg";
function MainNavbar() {
  return (
    <>
      <nav className="main-navbar">
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <button className="search">
            <BsSearch />
          </button>
        </div>
        <ul className="main-nav-items">
          <li>
            <FiGlobe />
            <span>English</span>
          </li>
          <li>
            {/* <CiDark /> */}
            <MdOutlineLightMode />
          </li>
          <li>
            <BiExitFullscreen />
          </li>
          <li>
            <IoMdNotificationsOutline />
            <span className="notify">10</span>
          </li>
          <li>
            <BiMessageAlt />
            <span className="notify">10</span>
          </li>
          <li>
            <AiOutlineMenu />
          </li>
          <li className="profile">
            <img src={profileImg} alt="" />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default MainNavbar;
