import React from "react";
import DataCard from "./DataCard";

function Data({ dataArr }) {
  return (
    <ul id="scoreContainer">
      {dataArr.map((data) => (
        <DataCard key={data.id} data={data} />
      ))}
    </ul>
  );
}

export default Data;
