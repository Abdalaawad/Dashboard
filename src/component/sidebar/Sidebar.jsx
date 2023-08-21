import React from "react";
import "./Sidebar.css";
import { MdDashboard } from "react-icons/md";
import { AiOutlineUserSwitch } from "react-icons/ai";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { BsBorderStyle } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoMdStats } from "react-icons/io";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdSystemUpdateAlt } from "react-icons/md";
import { BiLogIn } from "react-icons/bi";
import { FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { FaBeer } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="app-sidebar">
      <div className="app-side-bar-admin">
        <Link to="/">
          <h1>DashBoard</h1>
        </Link>
      </div>
      <div className="line"></div>

      <div className="app-sidebar-content">
        <ul className="side-bar-links">
          <p>main</p>
          <li>
            <MdDashboard className="sidebar-icon" />
            <span>user</span>
          </li>

          <p>lists</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <AiOutlineUserSwitch className="sidebar-icon" />
              <span>user</span>
            </li>
          </Link>
          <Link to="/product">
            <li>
              <MdOutlineProductionQuantityLimits className="sidebar-icon" />
              <span>products</span>
            </li>
          </Link>
          <li>
            <BsBorderStyle className="sidebar-icon" />
            <span>orders</span>
          </li>
          <li>
            <CiDeliveryTruck className="sidebar-icon" />
            <span>delivery</span>
          </li>
          <p>useful</p>
          <li>
            <IoMdStats className="sidebar-icon" />
            <span>stats</span>
          </li>
          <li>
            <IoMdNotificationsOutline className="sidebar-icon" />
            <span>notifacation</span>
          </li>
          <p>services</p>
          <li>
            <MdSystemUpdateAlt className="sidebar-icon" />
            <span>system health</span>
          </li>
          <li>
            <FaBeer className="sidebar-icon" />
            <span>logs</span>
          </li>
          <li>
            <FiSettings className="sidebar-icon" />
            <span>setting</span>
          </li>
          <p>users</p>
          <li>
            <CgProfile className="sidebar-icon" />
            <span>profile</span>
          </li>
          <li>
            <BiLogIn className="sidebar-icon" />
            <span>login</span>
          </li>
        </ul>
      </div>
      <div className="sidebar-content-color">
        <div className="sidebarblack"></div>
        <div className="sidebarblue"></div>
      </div>
    </div>
  );
};

export default Sidebar;
