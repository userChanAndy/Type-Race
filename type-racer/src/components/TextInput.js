import React, {useState,useEffect} from 'react'

function TextInput({words, GameStatus, charIndex, currentIndex, currentChar, checkMatch}) {
    function matchChar (i, index, char) {
        if(i === currentIndex && index === charIndex && currentChar && GameStatus !== "finished") {
            if(char === currentChar) {
                return "has-background-success"
            } else {
                return "has-background-danger"
            }
        } else if (i === currentIndex && charIndex >= words[currentIndex].length) {
            return "has-background-danger"
        } else {
            return ""
        }
    }

    return (
        <span>
        {(GameStatus === "gameStarted") ? words.map((word, i) => (
            <span>
                <span id='set-word-colors'>
                    {word.split("").map((char, index) => (
                        <span className={matchChar(i, index, char)} key = {index}>{char}</span>
                    ))}
                </span>
                <span> </span>
            </span>
        )) : null}
        </span>
    )
}

export default TextInput
