import React from "react";
import "./Sidebar.scss";
import logo from "../../imgs/logo.png";
const Sidebar = () => {
  return (
    <div className="Sidebar">
      {/* {logo} */}
      <div className="logo">
        <img src={logo} alt="logo" />
        <span>
          Little<span>Millenium</span>Convent
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
