import React from "react";
import "./EditProfile.scss";

export default function EditProfile({ setisEdit }) {
  const handleUpdate = () => {};
  return (
    <div className="editProfileBox">
      <div className="inputMainBox2">
        <div className="imgBox">
          <span class="btn btn-default btn-file">
            Choose File <input type="file" />
          </span>
        </div>
        <form action="" onClick={handleUpdate} className="inputBox">
          <input className="input" type="text" placeholder="name" required />
          <input className="input" type="email" placeholder="Email" required />
          <input
            className="input"
            type="number"
            placeholder="enter your mobile number"
            required
          />
          <button onClick={() => setisEdit(false)}>Update</button>
        </form>
      </div>
    </div>
  );
}
