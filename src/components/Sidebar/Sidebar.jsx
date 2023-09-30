import React, { useState } from "react";
import "./Sidebar.scss";
import { SidebarData } from "../../Data/Data";
import { MdLogout } from "react-icons/md";
import {HiMiniBars3CenterLeft} from "react-icons/hi2"
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "80px" }}  className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <HiMiniBars3CenterLeft onClick={toggle} />
          </div>
        </div>
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <item.icon />
              <span style={{display: isOpen ? "block" : "none"}} onClick={() => navigate(`/${item.to}`)}>{item.heading}</span>
            </div>
          );
        })}
        <div className="menuItem">
          <MdLogout />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
