import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../../components/Table/Table";
import Chart from "../../components/Charts/Chart";
import "./MainDash.scss";
import Card from "../../components/Card/Card";

function MainDash() {
  const [product, setProduct] = useState([]);
  const [price, setPrice] = useState(0);
  useEffect(() => {
    axios("https://651af42a340309952f0e1806.mockapi.io/products").then(
      (response) => {
        const totalPrice = response.data.reduce((accumulator, item) => {
          return accumulator + +item.productPrice;
        }, 0);
        setPrice(totalPrice);

        const wholeProduct = 
        setProduct(response.data);
      }
    );
  }, []);
  console.log(product);
  return (
    <div className="MainDash">
      <h1>DashBoard</h1>
      <Card price={price} />
      <Table product={product} />
      {/* <Chart /> */}
    </div>
  );
}

export default MainDash;
