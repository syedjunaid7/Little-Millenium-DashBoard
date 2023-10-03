import React from "react";
import "./EditProfile.scss";
import { useState } from "react";

export default function EditProfile({ setisEdit, setimgData }) {
  const value = JSON.parse(localStorage.getItem("details"));
  const [userName, setUserName] = useState(value.userName);
  const [userEmail, setUserEmail] = useState(value.userEmail);
  const [userPhone, setUserPhone] = useState(value.userPhone);
  const [userPic, setuserPic] = useState(value.userPic);
  const [details, setDetails] = useState();

  const handleUpdate = (e) => {
    e.preventDefault();
    const userDetails = {
      userName: userName,
      userEmail: userEmail,
      userPhone: userPhone,
      userPic: userPic,
    };
    const userDetailsString = JSON.stringify(userDetails);
    localStorage.setItem("details", userDetailsString);
    setisEdit(false);
  };

  return (
    <div className="editProfileBox">
      <div className="inputMainBox2">
        <div className="imgBox">
          <span class="btn btn-default btn-file">
            Choose File
            <input
              type="file"
              onChange={(e) =>
                setimgData(URL.createObjectURL(e.target.files[0]))
              }
              src={details}
            />
          </span>
        </div>
        <form action="" onSubmit={handleUpdate} className="inputBox">
          <input
            className="input"
            type="text"
            placeholder="name"
            required
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
          <input
            className="input"
            type="email"
            placeholder="Email"
            required
            onChange={(e) => setUserEmail(e.target.value)}
            value={userEmail}
          />
          <input
            className="input"
            type="number"
            placeholder="enter your mobile number"
            required
            onChange={(e) => setUserPhone(e.target.value)}
            value={userPhone}
          />
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}
