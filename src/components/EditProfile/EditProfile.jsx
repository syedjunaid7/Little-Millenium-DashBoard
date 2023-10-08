import React from "react";
import "./EditProfile.scss";
import { useState } from "react";

const blobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.onerror = (error) => {
      reject(error);
    };
    reader.readAsDataURL(blob);
  });
};

export default function EditProfile({ setisEdit, setimgData, imgData }) {
  const value = JSON.parse(localStorage.getItem("details"));
  const [userName, setUserName] = useState(value?.userName);
  const [userEmail, setUserEmail] = useState(value?.userEmail);
  const [userPhone, setUserPhone] = useState(value?.userPhone);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const userDetails = {
        userName: userName,
        userEmail: userEmail,
        userPhone: userPhone,
        userPic: imgData,
      };
      const userDetailsString = JSON.stringify({
        ...userDetails,
        userPic: imgData instanceof Blob ? await blobToBase64(imgData) : imgData,
      });
      localStorage.setItem("details", userDetailsString);
      setisEdit(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      // Handle the error gracefully (e.g., show a message to the user)
    }
  };
  

  return (
    <div className="editProfileBox">
      <div className="inputMainBox2">
        <div className="imgBox">
          <span className="btn btn-default btn-file">
            Choose File
            <input
              type="file"
              onChange={(e) =>
                setimgData(URL.createObjectURL(e.target.files[0]))
              }
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
