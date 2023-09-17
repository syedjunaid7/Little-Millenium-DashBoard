import React, { useState } from "react";
import "./Sidebar.scss";
import logo from "../../imgs/logo.png";
import school from "../../imgs/logo.gif";
import { SidebarData } from "../../Data/Data";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { UilBars } from "@iconscout/react-unicons";
const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  return (
    <div className="container">
      <div className="sidebar">
        <div className="top_section"></div>
        <h1 className="logo">Logo</h1>
        <div></div>
      </div>
    </div>
  );
};

export default Sidebar;

// {SidebarData.map((item, index) => {
//           return (
//             <div
//               className={selected === index ? "menuItem active" : "menuItem"}
//               key={index}
//               onClick={() => setSelected(index)}
//             >
//               <item.icon />
//               <span>{item.heading}</span>
//             </div>
//           );
//         })}
{
  /* <UilSignOutAlt /> */
}
