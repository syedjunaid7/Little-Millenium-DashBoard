import React from "react";
import "./Sidebar.scss";
import logo from "../../imgs/logo.png";

// import { SidebarData } from "../Data/Data";
// import { UilBars } from "@iconscout/react-unicons";
const Sidebar = () => {
  return (
    <div className="Sidebar">

      <div className="logo">
        <img src={logo} alt="logo" />
        <span>
          Little<span>Millenium</span>Convent
        </span>
      </div>
      <div className="menu">
        <div className="menuItem">
          <div>
          <UilEstate />
          </div>
          <span>DashBoard</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
