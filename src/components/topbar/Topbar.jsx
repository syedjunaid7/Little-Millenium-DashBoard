import React from "react";
import "./Topbar.scss";
import logo from "../../imgs/logo.gif";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import { useEffect } from "react";
import { useState } from "react";

export default function Topbar() {
  const userDataLocal = JSON.parse(localStorage.getItem("details"));
  const [userData, setUserData] = useState(userDataLocal);
  useEffect(() => {
    setUserData(userDataLocal);
  }, []);
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <h2>
            Hey, <span style={{ color: "#0ea5e9" }}>{userData?.userName}</span>
          </h2>
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
          <img src={userData?.userPic} alt="avatar" />
        </div>
      </div>
      <hr />

    </div>
  );
}
