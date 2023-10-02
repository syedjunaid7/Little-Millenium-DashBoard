import React, { useState } from "react";
import "./Account.scss";
import EditProfile from "../../components/EditProfile/EditProfile";
import AccountProfile from "../../components/AccountProfile/AccountProfile";

export default function Account() {
  const [isEdit, setisEdit] = useState(false);
  return (
    <div className="accountContainer">
     <img alt="" />
      {isEdit ? (
        <EditProfile setisEdit={setisEdit} />
      ) : (
        <AccountProfile setisEdit={setisEdit} />
      )}
    </div>
  );
}
