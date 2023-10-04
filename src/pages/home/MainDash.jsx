import React from "react";

import Table from "../../components/Table/Table";
import Chart from "../../components/Charts/Chart";
import "./MainDash.scss";
import Card from "../../components/Card/Card";

function MainDash() {
  return (
    <div className="MainDash">
      <h1>DashBoard</h1>
      <Card />
      <Chart />
      <Table />
    </div>
  );
}

export default MainDash;
