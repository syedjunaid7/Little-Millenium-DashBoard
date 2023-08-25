import React, { useState, useEffect } from "react";
import ApexCharts from "react-apexcharts"; // Make sure to import from the correct package

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
          data: [10, 20, 55,40, 39, 40, 80, 41, 135],
        }
      ],
      xaxis: {
        categories: ['Jan', 'Feb', 'Feb', 'March', 'April', 'May', 'June', 'July', 'August'],
      },
    },
  });

  useEffect(() => {
    var chart = new ApexCharts(document.querySelector("#chart"), state.options);
    chart.render();
  }, []); // Empty dependency array ensures the effect runs only once after initial render

  return (
    <div>
      <div className="app">
        <div className="row">
          <div className="mixed-chart" id="chart">
            {/* Use ApexCharts component from 'react-apexcharts' */}
            <ApexCharts
              options={state.options}
              series={state.options.series} // Adjust this as needed
              type="line" // Change this to 'bar' if you want a bar chart
              width="500"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
