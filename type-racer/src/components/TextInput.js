import React, { useState, useEffect } from "react";

function TextInput({
  words,
  GameStatus,
  charIndex,
  currentIndex,
  currentChar,
}) {
  function matchChar(i, index, char) {
    if (
      i === currentIndex &&
      index === charIndex &&
      currentChar &&
      GameStatus !== "gameOver"
    ) {
      if (char === currentChar) {
        return "has-background-success";
      } else {
        return "has-background-danger";
      }
    } else if (i === currentIndex && charIndex >= words[currentIndex].length) {
      return "has-background-danger";
    }
  }

  function wordsDisplayed() {
    return (
      <div id="textDisplayed" className="has-background-grey-light">
        {GameStatus === "gameStarted"
          ? words.map((word, i) => (
              <span key={i}>
                <span key={i}>
                  <span key={i} className={i}>
                    {word.split("").map((char, index) => {
                      return (
                        <span
                          key={index}
                          className={(index, matchChar(i, index, char))}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </span>
                </span>
                <span> </span>
              </span>
            ))
          : null}
      </div>
    );
  }

  // if checkmatch = true word[i].replace word[i] to green
  // else word[i].replace word[i] to red

  return wordsDisplayed();
}

export default TextInput;
