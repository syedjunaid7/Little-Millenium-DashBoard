import React, { useEffect, useState } from "react";
import "./Account.scss";
import EditProfile from "../../components/EditProfile/EditProfile";
import AccountProfile from "../../components/AccountProfile/AccountProfile";
import profileImg from "../../assets/profile.jpg"
export default function Account() {
  const [isEdit, setisEdit] = useState(false);
  const [imgData, setimgData] = useState("");
  const value = JSON.parse(localStorage.getItem("details"));
  useEffect(() => {
    setimgData(value?.userPic);
  }, [isEdit]);

  console.log(imgData);
  return (
    <div className="accountContainer">
      <div>
        <img src={imgData} alt="no-image"/>
      </div>
      {isEdit ? (
        <EditProfile
          setisEdit={setisEdit}
          setimgData={setimgData}
          imgData={imgData}
        />
      ) : (
        <AccountProfile setisEdit={setisEdit} />
      )}
    </div>
  );
}
