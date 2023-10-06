import React, { useState } from "react";
import "./Sidebar.scss";
import { SidebarData } from "../../Data/Data";
import { MdLogout } from "react-icons/md";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const handleSelect = (index, nav) => {
    setSelected(index);
    navigate(nav);
  };
  return (
    <div className="SideBarcontainer">
      <div style={{ width: isOpen ? "200px" : "80px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <HiMiniBars3CenterLeft onClick={toggle} style={{cursor : "pointer"}}/>
          </div>
        </div>
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => handleSelect(index, item.to)}

            >
              <item.icon style={{ fontSize: "1.5rem" }} />
              <span
                style={{
                  display: isOpen ? "block" : "none",
                  fontSize: "1rem",
                  fontWeight: "600",
                  letterSpacing : "0.7px"
                }}
              >
                {item.heading}
              </span>
            </div>
          );
        })}
        <div className="menuItem">
          <MdLogout style={{ fontSize: "1.5rem" }} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
