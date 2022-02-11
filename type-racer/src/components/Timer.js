import React from "react";

function Timer({ timeRemaining, setTimeRemaining, time, setTime }) {
  function switchTime(e) {
    e.preventDefault();
    if (time === 15) {
      setTimeRemaining(30);
      setTime(30);
    } else if (time === 30) {
      setTimeRemaining(15);
      setTime(15);
    }
  }

  return (
    <div id="timer">
      <h1 id="countdown">{timeRemaining}</h1>
      <button id="selectTime" onClick={switchTime}>
        {time} Second Race
      </button>
    </div>
  );
}

export default Timer;
