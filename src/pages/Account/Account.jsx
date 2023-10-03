import React, { useEffect, useState } from "react";
import "./Account.scss";
import EditProfile from "../../components/EditProfile/EditProfile";
import AccountProfile from "../../components/AccountProfile/AccountProfile";

export default function Account() {
  const [isEdit, setisEdit] = useState(false);
  const [imgData, setimgData] = useState("");
  const value = JSON.parse(localStorage.getItem("details"));
  console.log(value.userPic);
  console.log(imgData);
  return (
    <div className="accountContainer">
      <img src={value.userPic}/>
      {isEdit ? (
        <EditProfile setisEdit={setisEdit} setimgData={setimgData}/>
      ) : (
        <AccountProfile setisEdit={setisEdit} />
      )}
    </div>
  );
}
