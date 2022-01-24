import React from "react";

function Score({correct, incorrect, time}) {
    function calculateScore () {
        if(time === 15) return (correct * 4)
        else if (time === 30) return (correct * 2)
    }


    return (
        <div className="score"> 
            <div>
                <h1>Score</h1>
                <p>{calculateScore()}</p>
            </div>
            <div>
                <h1>Accuracy</h1>
                <p>{(correct !== 0) ? Math.round((correct / (correct + incorrect)) * 100) : 0}%</p>
            </div>
        </div>
)}

export default Score
