import React from "react";
import "./AccountProfile.scss";

export default function AccountProfile({setisEdit}) {
  return (
    <div className="pofileBox">
      <div className="inputMainBox2">
        <div className="detailsBox">
          <p>
            <strong>Name :</strong> Jack
          </p>
          <hr />
          <p>
            <strong>Email :</strong> test1@test.com
          </p>
          <hr />
          <p>
            <strong>Phone :</strong> 8756XXXX
          </p>
          <hr />
          <button onClick={() => setisEdit(true)}>Edit Profile</button>
        </div>
      </div>
    </div>
  );
}
