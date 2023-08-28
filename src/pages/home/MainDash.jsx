import React from "react";
import Cards from "../../components/Cards/Cards";
import Table from "../../components/Table/Table";
import Chart from "../../components/Charts/Chart";
import "./MainDash.scss"

function MainDash() {
  return (
    <div className="MainDash">
      <h1>DashBoard</h1>
      <Cards />
      <Chart/>
      <Table />
    </div>
  );
}

export default MainDash;
