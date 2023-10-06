import React from "react";
import { AiFillEye } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import { MdDeleteForever } from "react-icons/md";
import "./Table.scss";
import { useNavigate } from "react-router-dom";
export default function ({ product }) {

  const navigate = useNavigate()
  return (
    <div className="table-div">
      <h2>Inventory Items</h2>
      <table className="table-lg" cellSpacing="5px">
        <thead>
          <tr>
            <th>s/n</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action Buttons</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => (
            <tr >
              <td >{index + 1}</td>
              <td>{item.productName}</td>
              <td >{item.productCatg}</td>
              <td>{item.productPrice}</td>
              <td>{item.productQuant}</td>
              <td className="btn">
                <AiFillEye className="btns"/>
                <FiEdit className="btns" onClick={() => navigate("/product")}/>
                <MdDeleteForever className="btns"/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
