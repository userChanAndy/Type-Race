import React from "react";

function Score({ calculatePercentage, calculateScore }) {
  return (
    <div className="scoreContainer">
      <div className="score">
        <div className="wpm">
          <h1>Score</h1>
          <p>{calculateScore()}</p>
        </div>
        <div className="wpm">
          <h1>Accuracy</h1>
          <p>{calculatePercentage()}%</p>
        </div>
      </div>
    </div>
  );
}

export default Score;
