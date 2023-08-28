import React from "react";
import { tableData } from "../../Data/Data";
import "./Table.scss"
export default function () {
  return (
    <div className="table-div">
    <h1>Star Students</h1>
      <table className="table-lg">
        <thead>
          <th>S.No.</th>
          <th>Name</th>
          <th>Marks</th>
          <th>Percentage</th>
          <th>Year</th>
        </thead>
        <tbody>
          {tableData.map((item,index) => (
            <tr>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.marks}</td>
              <td>{item.perccentage}</td>
              <td>{item.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
