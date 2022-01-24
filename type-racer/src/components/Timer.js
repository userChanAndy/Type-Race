import React from 'react'

function Timer({timeRemaining,setTimeRemaining, time, setTime}) {
    function timerToggle (e) {
        e.preventDefault()
        if (time === 15) {
            setTimeRemaining(30)
            setTime(30)
        } else if (time === 30) {
            setTimeRemaining(15)
            setTime(15)
        }
    }

    return (
    <div>
        <button onClick={timerToggle}>{time} second</button>
        <h1>{timeRemaining}</h1>
    </div>
    )}

export default Timer
