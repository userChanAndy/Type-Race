import React, { useState, useEffect } from "react";
import Data from "./Data";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TextDisplayed from "./TextDisplayed";

function NavBar() {
  const [time, setTime] = useState(15);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorect] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentInput, setCurrentInput] = useState("");
  const [charIndex, setCharIndex] = useState(-1);
  const [currentChar, setCurrentChar] = useState("");
  const scoreData = "http://localhost:3000/scores";
  const [dataArr, setDataArr] = useState([]);

  useEffect(() => {
    fetch(scoreData)
      .then((res) => res.json())
      .then((scores) => {
        setDataArr(scores);
      });
  }, []);

  function onAddData(newData) {
    const updatedData = [...dataArr, newData];
    setDataArr(updatedData);
  }

  function calculateScore() {
    if (time === 15) return correct * 4;
    else if (time === 30) return correct * 2;
  }

  function calculatePercentage() {
    return correct !== 0
      ? Math.round((correct / (correct + incorrect)) * 100)
      : 0;
  }

  function handleClick() {
    setCharIndex(-1);
    setCurrentIndex(0);
    setCorrect(0);
    setIncorect(0);
  }

  return (
    <Router>
      <div id="navBarContainer">
        <nav id="navBar">
          <button onClick={handleClick} className="navBtn">
            <Link to="/">Home</Link>
          </button>
          <button onClick={handleClick} className="navBtn">
            <Link to="/Race">Race</Link>
          </button>
          <button onClick={handleClick} className="navBtn">
            <Link to="/Data">Data</Link>
          </button>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/Race"
            element={
              <TextDisplayed
                onAddData={onAddData}
                scoreData={scoreData}
                calculatePercentage={calculatePercentage}
                calculateScore={calculateScore}
                correct={correct}
                incorrect={incorrect}
                setCorrect={setCorrect}
                setIncorect={setIncorect}
                time={time}
                setTime={setTime}
                currentInput={currentInput}
                setCurrentInput={setCurrentInput}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
                charIndex={charIndex}
                setCharIndex={setCharIndex}
                currentChar={currentChar}
                setCurrentChar={setCurrentChar}
              />
            }
          />
          <Route path="/Data" element={<Data dataArr={dataArr} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default NavBar;
