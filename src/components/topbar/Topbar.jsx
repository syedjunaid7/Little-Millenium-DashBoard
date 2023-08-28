import React from "react";
import "./Topbar.scss";
import logo from "../../imgs/logo.gif";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import avatar from "../../imgs/avatar-01.jpg"
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img src={logo} alt="logo" className="logo"/>
        </div>
        <div className="topRight">
          <div className="topbarIcons">
            <NotificationsNoneIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIcons">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIcons">
            <SettingsIcon />
          </div>
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
}
