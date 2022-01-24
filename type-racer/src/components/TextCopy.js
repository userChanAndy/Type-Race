import React from 'react'

function TextCopy({startTimer, handleKeyPress, currentInput, setCurrentInput, GameStatus, textInput}) {
    
    return (
        <div>  
            <button className='start-btn' onClick={startTimer}>start</button> 
            <input ref = {textInput} disabled = {GameStatus !== "gameStarted"} onKeyDown={handleKeyPress} value = {currentInput} onChange={e => setCurrentInput(e.target.value)} className='typed' placeholder="Type here" type="text"></input>
        </div>
    )
}

export default TextCopy
