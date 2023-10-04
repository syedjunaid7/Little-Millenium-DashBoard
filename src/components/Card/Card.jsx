import React, { useEffect, useState } from "react";
import "./Card.scss";
import axios from "axios";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { BsCartXFill } from "react-icons/bs";

export default function Card() {
  const [price, setPrice] = useState(0);
  useEffect(() => {
  axios("https://651af42a340309952f0e1806.mockapi.io/products").then(
    (response) => {
      const totalPrice = response.data.reduce((accumulator, item) => {
        return accumulator + +item.productPrice;
      }, 0);
      setPrice(totalPrice);

      const data = response.data.map((item) => {
        
      })
    }
  );
}, []);

  console.log(price);
  return (
    <div className="cards">
      <div className="card red">
        <PiShoppingCartSimpleBold style={{ fontSize: "2.5rem" }} />
        <div className="detailsSec">
          <span className="tip">Total Products</span>:
          <span className="second-text">{price.id}</span>
        </div>
      </div>
      <div className="card blue">
        <FaIndianRupeeSign style={{ fontSize: "1.9rem" }} />
        <div className="detailsSec">
          <span className="tip">Total Store Value</span>:
          <span className="second-text">{price}</span>
        </div>
      </div>
      <div className="card green">
        <BsCartXFill style={{ fontSize: "2.5rem" }} />
        <div className="detailsSec">
          <span className="tip">Out of Stock</span>
          <span className="second-text">0</span>
        </div>
      </div>
    </div>
  );
}
