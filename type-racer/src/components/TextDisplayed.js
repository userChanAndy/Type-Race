import React, { useState, useEffect, useRef } from "react";
import TextCopy from "./TextCopy";
import TextInput from "./TextInput";
import Timer from "./Timer";
import randomWords from "random-words";
import Score from "./Score";
const numberOfWords = 83;

function TextDisplayed({
  onAddData,
  scoreData,
  calculatePercentage,
  calculateScore,
  setCorrect,
  setIncorect,
  time,
  setTime,
  correct,
  incorrect,
  currentInput,
  setCurrentInput,
  currentIndex,
  setCurrentIndex,
  charIndex,
  setCharIndex,
  currentChar,
  setCurrentChar,
}) {
  const [words, setWords] = useState([]);
  const textInput = useRef(null);
  const [gameStatus, setGameStatus] = useState("gameStatus");

  const [timeRemaining, setTimeRemaining] = useState(time);

  useEffect(() => {
    setWords(generateWords());
  }, []);

  useEffect(() => {
    if (gameStatus === "gameStarted") textInput.current.focus();
  }, [gameStatus]);

  function generateWords() {
    return new Array(numberOfWords).fill(null).map(() => randomWords());
  }

  function startTimer(e) {
    e.preventDefault();
    if (gameStatus === "gameLoading") {
      setCorrect(0);
      setIncorect(0);
      setCharIndex(-1);
      setCurrentIndex(0);
      setCurrentChar("");
      setTimeRemaining(time);
      setWords(generateWords());
      setGameStatus("gameOver");
    }
    if (gameStatus !== "gameStarted") {
      setGameStatus("gameStarted");
      const countDown = setInterval(() => {
        setTimeRemaining((timeRemaining) => {
          if (timeRemaining <= 0) {
            clearInterval(countDown);
            setGameStatus("gameOver");
            setCurrentInput("");
            return time;
          } else {
            return timeRemaining - 1;
          }
        });
      }, 1000);
    }
  }

  function handleKeyPress(e) {
    if (e.keyCode === 32) {
      checkMatch();
      setCurrentInput("");
      setCurrentIndex(currentIndex + 1);
      setCharIndex(-1);
    } else if (e.keyCode === 8) {
      setCharIndex(charIndex - 1);
      setCurrentChar("");
      setCharIndex(charIndex - 1);
    } else if (e.keyCode >= 65 && e.keyCode <= 90) {
      setCharIndex(charIndex + 1);
      setCurrentChar(e.key);
    }
  }

  function checkMatch() {
    const compare = words[currentIndex];
    const match = compare === currentInput.trim();
    if (match) {
      setCorrect(correct + 1);
      return true;
    } else {
      setIncorect(incorrect + 1);
      return false;
    }
  }

  function display() {
    if (gameStatus === "gameOver") {
      setGameStatus("gameLoading");
      const userName = "user";
      const timePlayed = time;
      const wpmScore = calculateScore();
      const accuracy = calculatePercentage() + "%";

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

    if (gameStatus === "gameLoading") {
      return (
        <Score
          onAddData={onAddData}
          time={time}
          calculatePercentage={calculatePercentage}
          calculateScore={calculateScore}
          scoreData={scoreData}
        />
      );
    } else if (gameStatus === "gameStarted") {
      return (
        <TextInput
          currentInput={currentInput}
          checkMatch={checkMatch}
          words={words}
          GameStatus={gameStatus}
          charIndex={charIndex}
          currentIndex={currentIndex}
          currentChar={currentChar}
          gameStatus={gameStatus}
        />
      );
    }
  }

  return (
    <div>
      <Timer
        time={time}
        setTime={setTime}
        timeRemaining={timeRemaining}
        setTimeRemaining={setTimeRemaining}
      />
      <TextCopy
        textInput={textInput}
        setCurrentInput={setCurrentInput}
        currentInput={currentInput}
        startTimer={startTimer}
        handleKeyPress={handleKeyPress}
        GameStatus={gameStatus}
      />
      {display()}
    </div>
  );
}

export default TextDisplayed;
