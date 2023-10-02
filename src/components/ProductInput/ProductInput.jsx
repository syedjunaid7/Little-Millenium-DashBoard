import React, { useState } from "react";
import "./ProductInput.scss";
import axios from "axios";
export default function ProductInput() {
  const [imgData, setImgData] = useState();
  const handleInputImg = (e) => {
    setImgData(URL.createObjectURL(e.target.files[0]));
  };

const handleSubmit = () =>{
  axios
    .post("https://651af42a340309952f0e1806.mockapi.io/products", {
      imgData,
    })
    .then((res) => setImgData(''));
}
console.log(imgData);
  return (
    <div className="inputMainBox">
      <h1>
        Hey, <span style={{ color: "#0ea5e9" }}>David</span>
      </h1>
      <h4>Add New Product</h4>
      <div className="inputMainBox2">
        <div className="imgBox">
          <h1>Product Image</h1>
          <p>Supported Formats: jpg, jpeg, png</p>
          <span class="btn btn-default btn-file">
            Choose File <input type="file" onChange={handleInputImg} />
          </span>
          {imgData ? (
            <img
              src={imgData}
              alt=""
              style={{ height: "9rem", width: "100%" }}
            />
          ) : (
            <p>No Image has set for this product</p>
          )}
        </div>
        <div className="inputBox">
          <input type="text" placeholder="Product Name" />
          <input type="text" placeholder="Product Category" />
          <input type="text" placeholder="Product Price" />
          <input type="text" placeholder="Product Quantity" />
        </div>
        <button onClick={handleSubmit}> Save Product</button>
      </div>
    </div>
  );
}
