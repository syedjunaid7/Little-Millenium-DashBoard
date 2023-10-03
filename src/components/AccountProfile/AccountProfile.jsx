import React, { useEffect, useState } from "react";
import "./AccountProfile.scss";

export default function AccountProfile({ setisEdit }) {
  const [details, setDetails] = useState('');
  useEffect(() => {
    const value = JSON.parse(localStorage.getItem("details")) || ''
    setDetails(value);
    
  }, [setisEdit]);

  return (
    <div className="pofileBox">
      <div className="inputMainBox2">
        <div className="detailsBox">
          <p>
            <strong>Name : </strong>{details?.userName}
          </p>
          <hr />
          <p>
            <strong>Email : </strong>{details?.userEmail}
          </p>
          <hr />
          <p>
            <strong>Phone : </strong>{details?.userPhone}
          </p>
          <hr />
          <button onClick={() => setisEdit(true)}>Edit Profile</button>
        </div>
      </div>
    </div>
  );
}
