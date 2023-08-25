import React from "react";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import Chart from "../Charts/Chart";


function MainDash() {
  return (
    <div className="MainDash">
      <h1>DashBoard</h1>
      <Cards />
      <Chart/>
      <h2>Recent Orders</h2>
      <Table />
    </div>
  );
}

export default MainDash;
