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



//     return (
//         <div className="container">
//            <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
//                <div className="top_section">
//                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Logo</h1>
//                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
//                        <FaBars onClick={toggle}/>
//                    </div>
//                </div>
//                {
//                    menuItem.map((item, index)=>(
//                        <li to={item.path} key={index} className="link" activeclassName="active">
//                            <div className="icon">{item.icon}</div>
//                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
//                        </li>
//                    ))
//                }
//            </div>
//            <main>{children}</main>
//         </div>
//     );
// };
