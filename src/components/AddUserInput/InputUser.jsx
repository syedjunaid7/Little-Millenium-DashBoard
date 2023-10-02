import React from "react";
import "./InputUser.scss";

export default function InputUser() {
  return (
    <div className="pofileBox">
      <div className="profileBox2">
        <img src="" alt="user-img" />
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
          <button>Edit Profile</button>
        </div>
      </div>
    </div>
  );
}
