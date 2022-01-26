import React from 'react'

function TextCopy({startTimer, handleKeyPress, currentInput, setCurrentInput, GameStatus, textInput}) {
    function startButton () {
        if(GameStatus === "gameOver") return "New Race"
        else if (GameStatus === "gameStarted") return "Race Start"
        else return "Race"
    }
    
    return (
        <div id = "input">  
            <button className='start-btn' onClick={startTimer}>{startButton()}</button> 
            <input id = "inputField" ref = {textInput} disabled = {GameStatus !== "gameStarted"} onKeyDown={handleKeyPress} value = {currentInput} onChange={e => setCurrentInput(e.target.value)} className='typed' placeholder="Click Start to Race" type="text"></input>
        </div>
    )
}

export default TextCopy
