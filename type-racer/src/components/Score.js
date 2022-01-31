import React from "react";

function Score({correct, incorrect, time, setWpm, setPercentage}) {
    function calculateScore () {
        if(time === 15) return (correct * 4)
        else if (time === 30) return (correct * 2)
    }

    function calculatePercentage () {
        return (correct !== 0) ? Math.round((correct / (correct + incorrect)) * 100) : 0
    }

    setWpm(calculateScore())
    setPercentage(calculatePercentage())

    return (
        <div className="score"> 
            <div className="wpm">
                <h1>Score</h1>
                <p>{calculateScore()}</p>
            </div>
            <div className="wpm">
                <h1>Accuracy</h1>
                <p>{calculatePercentage()}%</p>
            </div>
        </div>
)}

export default Score
