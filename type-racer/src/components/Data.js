import React, {useState, useEffect} from 'react'

function Data({wpm, percentage}) {
    const [scorePage, setScorePage] = useState(null)

    const scores = "http://localhost:3000/scores"
    useEffect(() => {
        fetch(scores)
        .then(res => res.json())
        .then(scores => {
            setScorePage(scores[1].wpmScore)
            })
        },[scorePage])    

    return (
        <div id = "scoreContainer">
            <h1>{scorePage}</h1>
        </div>
    )
}

export default Data
