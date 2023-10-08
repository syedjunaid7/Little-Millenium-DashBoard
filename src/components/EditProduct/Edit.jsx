import React from "react";
import "./Edit.scss";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BarLoader from "react-spinners/BarLoader";
import { useEffect } from "react";
export default function Edit() {
    
    useEffect(() => {
        axios("https://651af42a340309952f0e1806.mockapi.io/Products")
        .then((data) => {

        })
    })
  return (
    <div>
      <div className="inputMainBox">
        <ToastContainer autoClose={500} />
        <h1>
          Hey, <span style={{ color: "#0ea5e9" }}>David</span>
        </h1>
        <h4>Add New Product</h4>
        <div className="inputMainBox2">
          <div className="imgBox">
            <h1>Product Image</h1>
            <p>Supported Formats: jpg, jpeg, png</p>
            <span class="btn btn-default btn-file">
              Choose File{" "}
              <input type="file" onChange={handleInputImg} required />
            </span>
            {imgNot ? <div className="imgRequire">Image Required</div> : null}
            {imgData ? (
              <img src={imgData} alt="product Image" className="productImg" />
            ) : (
              <p>No Image has set for this product</p>
            )}
          </div>
          <form className="inputBox" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Product Name"
              required
              onChange={(e) => setproductName(e.target.value)}
              value={productName}
            />
            <input
              type="text"
              placeholder="Product Category"
              required
              onChange={(e) => setproductCatg(e.target.value)}
              value={productCatg}
            />
            <input
              type="number"
              placeholder="Product Price"
              required
              onChange={(e) => setproductPrice(e.target.value)}
              value={productPrice}
            />
            <input
              type="number"
              placeholder="Product Quantity"
              required
              onChange={(e) => setproductQuant(e.target.value)}
              value={productQuant}
            />
            <button>
              {isLoading ? (
                <BarLoader color="#fff" className="loader" />
              ) : (
                "Save Product"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
