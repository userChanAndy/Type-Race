import React from "react";

function Score({
  calculatePercentage,
  calculateScore,
  time,
  scoreData,
  onAddData,
}) {
  const userName = "user";
  const timePlayed = time;
  const wpmScore = calculateScore();
  const accuracy = calculatePercentage();

  // setWpmScore(14);
  // console.log(wpmScore);

  // useEffect(() => {
  //   setWpmScore(14);
  //   console.log(wpmScore);
  // }, [wpmScore]);
  function handleSubmit() {
    fetch(scoreData, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        gameTime: timePlayed,
        wpmScore: wpmScore,
        accuracy: accuracy,
      }),
    })
      .then((r) => r.json())
      .then((newData) => onAddData(newData));
  }

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
      <form className="hiddenForm" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          name="user Name"
          placeholder="user name"
          value={userName}
        />
        <input
          className="form-input"
          type="text"
          name="time"
          placeholder="time"
          value={timePlayed}
        />
        <input
          className="form-input"
          type="text"
          name="wpm"
          placeholder="wpm"
          value={calculateScore()}
        />
        <input
          className="form-input"
          type="text"
          name="accuracy"
          placeholder="accuracy"
          value={calculatePercentage()}
        />
        <button type="submit">New Race</button>
      </form>
    </div>
  );
}

export default Score;
