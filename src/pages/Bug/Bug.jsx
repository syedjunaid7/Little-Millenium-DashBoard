import React from "react";
import "./Bug.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BarLoader from "react-spinners/BarLoader";
import { useState } from "react";

export default function Bug() {
  const [sub, setSub] = useState("");
  const [mssg, setmssg] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setisLoading(true);
    setTimeout(() => {
      toast.success("Success !", {
        position: toast.POSITION.TOP,
      });
      setisLoading(false);
    }, 2000);
    setSub("");
    setmssg("");
  };
  return (
    <div className="bugBox">
      <h1>Contact Us</h1>
      <div className="inputMainBox2">
        <form className="inputBox" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Subject"
            required
            value={sub}
            onChange={(e) => setSub(e.target.value)}
          />
          <textarea
            type="text"
            placeholder="Message"
            required
            className="textAreaBug"
            onChange={(e) => setmssg(e.target.value)}
            value={mssg}
          />
          <button>
            {isLoading ? (
              <BarLoader color="#fff" className="loader" />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
      <div className="inputMainBox2 contact">
        <h2>Our Contact Information</h2>
        <h4>Fill the form or contact us via channels listed below</h4>
        <h5>+91 80776XXXXX</h5>
        <h5>support@example.com</h5>
        <h5>Prayagraj, India</h5>
        <h5>syedjunaid@gmail.com</h5>
      </div>
      <ToastContainer autoClose={500}/>
    </div>
  );
}
