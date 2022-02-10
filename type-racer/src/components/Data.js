import React from "react";
import DataCard from "./DataCard";

function Data({ dataArr }) {
  //   setWpmScore(wpm);
  //   console.log(wpmScore);
  console.log(dataArr);

  return (
    <ul id="scoreContainer">
      {dataArr.map((data) => (
        <DataCard key={data.id} data={data} />
      ))}
    </ul>
  );
}

export default Data;
