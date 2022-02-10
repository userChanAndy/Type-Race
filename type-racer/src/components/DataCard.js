import React from "react";

function DataCard({ data }) {
  const { userName, gameTime, wpmScore, accuracy } = data;
  return (
    <li className="userData">
      <div className="userName">
        <h1>{userName}</h1>
      </div>
      <div className="userScore">
        <h2>Time: {gameTime}</h2>
        <h2>Score: {wpmScore} wpm</h2>
        <h2>Accuracy: {accuracy}</h2>
      </div>
    </li>
  );
}

export default DataCard;
