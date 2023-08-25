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
          name: "sales",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        },
      ],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
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
