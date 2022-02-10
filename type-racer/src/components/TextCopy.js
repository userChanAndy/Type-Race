import React from "react";

function TextCopy({
  startTimer,
  handleKeyPress,
  currentInput,
  setCurrentInput,
  GameStatus,
  textInput,
}) {
  function startButton() {
    if (GameStatus === "gameOver") return "New Race";
    else if (GameStatus === "gameStarted") return "Race Start";
    else return "Race";
  }

  function hideButton() {
    if (GameStatus === "gameLoading") {
      return null;
    } else {
      return { display: "none" };
    }
  }

  return (
    <div id="input">
      <button className="start-btn" style={hideButton()} onClick={startTimer}>
        {startButton()}
      </button>
      <input
        autoComplete="off"
        id="inputField"
        ref={textInput}
        disabled={GameStatus !== "gameStarted"}
        onKeyDown={handleKeyPress}
        value={currentInput}
        onChange={(e) => setCurrentInput(e.target.value)}
        className="typed"
        placeholder="Click Race to Start"
        type="text"
      ></input>
    </div>
  );
}

export default TextCopy;
