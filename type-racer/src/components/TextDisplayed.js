import React, { useState, useEffect, useRef } from 'react'
import TextCopy from './TextCopy'
import TextInput from './TextInput'
import Timer from './Timer'
import randomWords from 'random-words'
import Score from './Score'
const numberOfWords = 100


function TextDisplayed() {
    const [words, setWords] = useState([])
    const [timeRemaining, setTimeRemaining] = useState(15);
    const [time, setTime] = useState(15)
    const [currentInput, setCurrentInput] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(-1)
    const [currentChar, setCurrentChar] = useState("")
    const [correct, setCorrect] = useState(0)
    const [incorrect, setIncorect] = useState(0)
    const [gameStatus, setGameStatus] = useState("gameLoading")
    const textInput = useRef(null)

    useEffect(()=> {
        setWords(generateWords())
    }, [])

    useEffect(()=> {
        if(gameStatus === "gameStarted") textInput.current.focus()
    }, [gameStatus])

    function generateWords () {
        return new Array(numberOfWords).fill(null).map(()=> randomWords())
    }

    function startTimer (e) {
        e.preventDefault()
        if (gameStatus === "gameOver") {
            setCorrect(0)
            setIncorect(0)
            setCharIndex(-1)
            setCurrentIndex(0)
            setCurrentChar("")
            setTimeRemaining(time)
            setWords(generateWords())
        }
        if(gameStatus !== "gameStarted") {
            setGameStatus("gameStarted")
            const countDown = setInterval(()=> {
                setTimeRemaining((timeRemaining)=> {
                    if(timeRemaining < 0) {
                        clearInterval(countDown)
                        setGameStatus("gameOver")
                        setCurrentInput("")
                        return time
                    } else {
                        return timeRemaining - 1
                    }
                })
              },1000)
        }
    }

    function handleKeyPress (e){
        if(e.keyCode === 32) {
            checkMatch()
            setCurrentInput("")
            setCurrentIndex(currentIndex + 1)
            setCharIndex(-1)
        } else if (e.keyCode === 8){
            setCharIndex(charIndex - 1)
            setCurrentChar("")
        } else {
            setCharIndex(charIndex + 1)
            setCurrentChar(e.key)
        }
    }

    function checkMatch () {
        const compare = words[currentIndex]
        const match = compare === currentInput.trim()
        if(match) {
            setCorrect(correct + 1)
        } else { 
            setIncorect(incorrect + 1)
        }
    }

    function display () {
        if(gameStatus === "gameOver") return <Score
        time = {time}
        correct = {correct}
        incorrect = {incorrect}/>
        else if(gameStatus === "gameStarted") return <TextInput
        words = {words}
        checkMatch = {checkMatch}
        GameStatus = {gameStatus}
        charIndex = {charIndex}
        currentIndex = {currentIndex}
        currentChar = {currentChar}
        gameStatus = {gameStatus}
        />
    }

    return (
        <div>
            <Timer 
            time = {time}
            setTime = {setTime}
            timeRemaining = {timeRemaining}
            setTimeRemaining = {setTimeRemaining}/>
            <TextCopy
            textInput = {textInput} 
            setCurrentInput = {setCurrentInput}
            currentInput = {currentInput}
            startTimer = {startTimer}
            handleKeyPress = {handleKeyPress}
            GameStatus = {gameStatus}/>
            {display()}
        </div>
    )
}

export default TextDisplayed
