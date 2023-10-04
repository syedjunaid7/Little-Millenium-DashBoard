import React, { useState, useEffect } from "react";
import ApexCharts from "react-apexcharts"; // Make sure to import from the correct package
import "./Chart.scss";
export default function Chart() {
  const [state, setState] = useState({
    options: {
      chart: {
        type: "line",
      },
      series: [
        {
          name: "Teacher",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        },
        {
          name: "Students",
          data: [10, 20, 55, 40, 39, 40, 80, 41, 135],
        },
      ],
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Feb",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
        ],
      },
    },
  });

  const [state2, setState2] = useState({
    options: {
      chart: {
        type: "line",
      },
      series: [
        {
          name: "Boys",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        },
        {
          name: "Girls",
          data: [10, 20, 55, 40, 39, 40, 80, 41, 135],
        },
      ],
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Feb",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
        ],
      },
    },
  });
  useEffect(() => {
    var chart = new ApexCharts(document.querySelector("#chart"), state.options);
    chart.render();
  }, []);

  return (
    <div className="chart-box">
      <div>
        <h3>Overview</h3>
        <ApexCharts
          options={state.options}
          series={state.options.series}
          type="line"
          width="450"
        />
      </div>
      <div>
        <h3>Number of Students</h3>
        <ApexCharts
          options={state2.options}
          series={state2.options.series}
          type="bar"
          width="450"
        />
      </div>
    </div>
  );
}



