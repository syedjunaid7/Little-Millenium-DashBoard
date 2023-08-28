import React from "react";
import "./Topbar.scss";
import logo from "../../logo.svg";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <img src={logo} alt="" className="logo" />
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
          <img src="" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
