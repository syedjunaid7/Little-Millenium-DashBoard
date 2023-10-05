import React, { useEffect, useState } from "react";
import "./Card.scss";

import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { BsCartXFill } from "react-icons/bs";

export default function Card({price}) {


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
